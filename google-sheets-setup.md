# Google Sheets Integration Setup

This guide will help you set up Google Sheets to track order button clicks.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Yume Orders" or similar
4. Add headers in row 1:
   - Column A: `Email`
   - Column B: `Timestamp`
   - Column C: `Product`
   - Column D: `Price`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code and paste this script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.email || '',
      data.timestamp || new Date().toISOString(),
      data.product || 'Yume',
      data.price || '£199'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (💾) and give your project a name like "Yume Order Tracker"
4. Click **Deploy** → **New deployment**
5. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
6. Set the following:
   - **Description**: "Yume Order Tracker"
   - **Execute as**: Me
   - **Who has access**: Anyone
7. Click **Deploy**
8. **Copy the Web App URL** - this is your script URL

## Step 3: Update Your Website

1. Open `script.js` in your project
2. Find the line: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the Web App URL you copied
4. Save the file

## Step 4: Test

1. Open your website
2. Enter an email address in the order form
3. Click "Order Now"
4. Check your Google Sheet - you should see a new row with the email and timestamp

## Troubleshooting

- If you get a CORS error, make sure "Who has access" is set to "Anyone" in the deployment settings
- If data isn't appearing, check the Apps Script execution log (View → Execution log)
- Make sure you've authorized the script when prompted

## Alternative: Using FormSubmit (Simpler but less control)

If you prefer a simpler solution without Google Apps Script:

1. Sign up at [FormSubmit](https://formsubmit.co/)
2. Use their email endpoint instead
3. You'll receive emails with order information

Note: This won't automatically populate Google Sheets, but you can forward emails or use Zapier to automate.

