const path=require('path');

module.exports = ({ name, price1, price2, receiptId,imgData }) => {
  var imgSrc=path.join('file://',imgData)
    imgSrc = path.normalize(imgSrc);
    console.log(imgSrc)
    const today = new Date();
return `
    <!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <style>
      *{
        margin: 0;
        padding:0;
      }

    </style>
  </head>
<body style="padding: 10px;width: 800px;height: 1000px">
  <div style="width: 100%;border: 2px solid #EAE8E8;padding: 0" > 
    <div style="width: 100%;height: 100px;padding: 0;background:#EAE8E8!important" class="container">
      <div  class="row" style="width: 100%;padding: 3px">
        <span style="float:right"><b>Purchase Id: AFU468</b></span>
      </div>
    </div>
    <div style="width: 100%;margin-top: 30px;margin-bottom: 10px" class="container">
      <div class="row" >
        <div style="border-right: 2px solid #EAE8E8" class="col-xs-7">
          <div style="padding: 5px;" class="row">
            <h3 style="float: right;"><b>Rs. 1</b></h3>
            <h3 style="font-weight: bold;">Taj Mahal Palace</h3>
          </div>
          <div style="padding: 10px;border-bottom: 2px solid #EAE8E8" class="row">
          
          <p>Address List :</p>
          <p>1 ) Gateway of India,colaba,Maharashtra, Zip Code : 400001</p>
          </div>
          <div style="padding: 8px;justify-content: center;display: flex;flex-direction: row;border-bottom: 2px solid #EAE8E8" class="row">
            <p style="margin-top:15px">Voucher Code: AFUC-TAJ -5F1E-F4A9-69A7</p>
          </div>
          <div style="padding: 10px;margin-top: 10px;border-bottom: 2px solid #EAE8E8" class="row">
            <ul style="list-style-type: none">
              <li>
                <p>Valid On: All Days</p>
              </li>
              <li>
                <p>Valid For: 2 adults 1 child</p>
              </li>
              <li>
                <p>Valid From: 26 Jul,2020</p>
              </li>
              <li>
                <p>Valid To: 30 Jul,2020</p>
              </li>
              <li>
                <p>Status : Redeemed</p>
              </li>
              <li>
                <p>From Date : 29/07/2020</p>
              </li>
              <li>
                <p>To Date : 31/07/2020</p>
              </li>
              <li>
                <p>Total Adults : 2</p>
              </li>
              <li>
                <p>Total Child : 1</p>
              </li>
            </ul>
          </div>
          <div style="margin-top: 10px;padding: 10px;border-bottom: 2px solid #EAE8E8" class="row">
            <h3><b>Things to remember</b></h3>
            <div style="margin-left: 30px">
              <ul>
                <li>
                  Prior reservation recommended (Upon purchase, you will receive a
voucher with the reservation number)
                </li>
                <li>
                  Cannot be clubbed with any other existing offers/promotions
                </li>
                <li>
                  Not valid on public holidays, special occasions and festival days
                </li>
                <li>
                  MRP to be paid in cash
                </li>
              </ul>
            </div>

          </div>

          <div style="margin-top: 10px;padding: 10px;border-bottom: 2px solid #EAE8E8" class="row">
            <h3><b>Next Steps</b></h3>
            <div style="margin-left: 30px">
              <ul>
                <li>
                  Open the voucher on your phone - via email or under the 'purchases'
section of the app
                </li>
                <li>
                  Show the voucher to the merchant when you visit
                </li>
                <li>
                  The merchant will verify the voucher and redeem it on your app
                </li>
              </ul>
            </div>
            
          </div>
          <div style="margin-top: 10px;padding: 10px" class="row">
            <h3><b>Cancellation Policy</b></h3>
          <p>Cancellable by customer with 100% refund</p>
          </div>

        </div>
        <div class="col-xs-4" style="margin-left:10px ">
          <div style="padding: 3px" class="row">
            <img style="width: 160px;height: 135px" src="${imgSrc}">
          </div>
          <div style="margin-top: 20px" class="row">
            <h3><b>Use at</b></h3><br/>

            <p style="font-weight: bold;">Taj Mahal Palace</p><br/>
            <p>Address List :</p>
          <p>1 ) Gateway of India,colaba,Maharashtra, Zip Code : 400001</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>


</body>
</html>
    `;
};