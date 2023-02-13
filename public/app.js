$('#navbar').load('navbar.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];

devices.forEach(function (device) {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
});

// devices.forEach(function (device) {
//     const table = document.querySelector('#devices');
//     const row = document.createElement('tr');

//     const user = document.createElement('td');
//     const userText = document.createTextNode(device.user);
//     user.appendChild(userText);

//     const name = document.createElement('td');
//     const nameText = document.createTextNode(device.name);
//     name.appendChild(nameText);

//     row.appendChild(user);
//     row.appendChild(name);

//     table.appendChild(row);

// });

// document.querySelector('#add-device').addEventListener('click', function () {
//     const user = document.querySelector('#user').value;
//     const name = document.querySelector('#name').value;
//     devices.push({ user: user, name: name });
//     console.log(devices);
// });


$('#add-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();

    if (user.length <= 12 && name.length >=3)
    {
      devices.push({ user, name });
      localStorage.setItem('devices', JSON.stringify(devices));
    }
    else if (user.length>12)
    {
      alert("Name should be less than 12 characters")
    }
    else
    {
      alert("Device name can not be less than 3 characters")
    }
    location.href = '/' ;

});
  
  
