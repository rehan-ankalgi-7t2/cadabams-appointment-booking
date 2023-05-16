var myHeaders = new Headers();
myHeaders.append("Cookie", "session_id=b94b86efddcfd7bbde6a503d5431c04c94a25397");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://dev-cadambams-crm.p7devs.com/restapi/1.0/object/slot.booking?domain=[('doctor_id','=',5314),('availability','=','open')]&fields=['doctor_id','start_datetime','stop_datetime','id']&oauth_consumer_key=dB0ewUazGroc9HkAQs08YC0SkeIOGc3C&oauth_token=edUBoYYVdSR0Fx8DVg9Jm5YfLKkEbjtX&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1682485427&oauth_nonce=DhyHxMs9Q2k&oauth_version=1.0&oauth_signature=cVjASvYl8o5zWq5K0UM0sZzPP70%3D", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));