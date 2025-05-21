document.getElementById('taxiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name        = document.getElementById('name').value;
  const address     = document.getElementById('address').value;
  const destination = document.getElementById('destination').value;
  const farePer     = parseFloat(document.getElementById('farePerPerson').value) || 0;
  const fareTotal   = parseFloat(document.getElementById('fareTotal').value)   || 0;

  // منطق: اگر کرایه کل وارد شده بود، همون رو نشون بده، وگرنه کرایه هر نفر
  const finalFare = fareTotal > 0 ? fareTotal : farePer;
  const fareLabel = fareTotal > 0 ? ' قیمت کل تکسی' : 'کرایه یک نفر';

  const message = `
    درخواست تاکسی با موفقیت ثبت شد.
    نام: ${name}
    آدرس: ${address}
    مقصد: ${destination}
    ${fareLabel}: ${finalFare.toLocaleString()} افغانی
  `;

  document.getElementById('message').innerText = message.trim();
  this.reset();
});