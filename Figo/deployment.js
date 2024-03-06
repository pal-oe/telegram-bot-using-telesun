/**
 * Sets up the webhook for the Telegram bot to communicate with this Apps Script project.
 * This function should be run manually after deploying the web app.
 * Ensure the 'doPost' function in your project correctly handles incoming webhook requests and includes parameter 'e'.
 * 
 */
function SettingWebHook() {
    const botToken = '6179436473:AAHrPLLZBSjks3kzs5rvEVcD52UaAellVzE'; // Replace <your-bot-token> with your actual bot token
    const webhookUrl = 'https://script.google.com/macros/s/AKfycbzuzPnYylrWav_I5_tDjzT_duL4l0e86Vr958MLZRxq_YI--_YpmnsPjy72YaH3IdvA/exec'; // Replace <your-web-app-url> with the URL of your deployed web app
  
    /** @type {Telesun} */
    const telesun = new Telesun.connectBot(botToken);
    telesun.setWebhook({ url: webhookUrl });
  }
  
  /**
   * Deletes the current webhook, effectively stopping the Telegram bot from sending updates to this Apps Script project.
   * This function is useful for transitioning from production to development mode, where you might prefer polling or manual testing.
   *
   */
  function deletewebHook() {
    const botToken = '6179436473:AAHrPLLZBSjks3kzs5rvEVcD52UaAellVzE'; // Replace <your-bot-token> with your actual bot token
  
    /** @type {Telesun} */
    new Telesun.connectBot(botToken).deleteWebhook();
  }
  