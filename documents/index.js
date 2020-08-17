const path=require('path');

module.exports = ({ pId,merchant,address_line1,state,zip_code,vchr_code,vchr_amt,adult,child,status,valid_from,valid_to,from_date,to_date,imgData }) => {
    var logo=path.join('file://',__dirname,'../','/public/images/logo.jpg');
    logo=path.normalize(logo)
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
  <div style="width: 100%;border: 1px solid #E1DFDE;padding: 0" > 
    <div style="width: 100%;height: 120px;padding: 0;background:#E1DFDE!important" class="container">
      <div  class="row" style="width: 100%;padding: 3px">
        <img style="margin-left:15px" src="${logo}"/>
        <span style="float:right"><b>Purchase Id: ${pId}</b></span>
      </div>
    </div>
    <div style="width: 100%;margin-top: 30px;margin-bottom: 10px" class="container">
      <div class="row" >
        <div style="border-right: 1px solid #E1DFDE" class="col-xs-7">
          <div style="padding: 5px;" class="row">
            <h3 style="float: right;"><b>Rs. ${vchr_amt}</b></h3>
            <h3 style="font-weight: bold;">${merchant}</h3>
          </div>
          <div style="padding: 10px;border-bottom: 1px solid #E1DFDE" class="row">
          
          <p>Address List :</p>
          <p>${address_line1}, ${state}, Zip Code : ${zip_code}</p>
          </div>
          <div style="padding: 8px;justify-content: center;display: flex;flex-direction: row;border-bottom: 1px solid #E1DFDE" class="row">
            <p style="margin-top:15px">Voucher Code: ${vchr_code}</p>
          </div>
          <div style="padding: 10px;margin-top: 10px;border-bottom: 1px solid #E1DFDE" class="row">
            <ul style="list-style-type: none">
              <li>
                <p>Valid On: All Days</p>
              </li>
              <li>
                <p>Valid For: ${adult} adults ${child} child</p>
              </li>
              <li>
                <p>Valid From: ${valid_from}</p>
              </li>
              <li>
                <p>Valid To: ${valid_to}</p>
              </li>
              <li>
                <p>Status : ${status}</p>
              </li>
              <li>
                <p>From Date : ${from_date}</p>
              </li>
              <li>
                <p>To Date : ${to_date}</p>
              </li>
              <li>
                <p>Total Adults : ${adult}</p>
              </li>
              <li>
                <p>Total Child : ${child}</p>
              </li>
            </ul>
          </div>
          <div style="margin-top: 10px;padding: 10px;border-bottom: 1px solid #E1DFDE" class="row">
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

          <div style="margin-top: 10px;padding: 10px;border-bottom: 1px solid #E1DFDE" class="row">
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
            <img style="width: 150px;height: 120px" src="${imgSrc}">
          </div>
          <div style="margin-top: 20px" class="row">
            <h3><b>Use at</b></h3><br/>

            <p style="font-weight: bold;">${merchant}</p><br/>
            <p>Address List :</p>
          <p>${address_line1}, ${state}, Zip Code : ${zip_code}</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>


</body>
</html>
    `;
};