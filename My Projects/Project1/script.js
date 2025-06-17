let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail1").value;
  let pass = document.getElementById("txtPass1").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const loginForm = () => {
    const str = `
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; ">
    <div>
    <h3>Login Form</h3>
    <p id='errorTxt'></p>
    <input type='email' id='txtEmail1' placeholder='Enter your email' />
    <input type='password' id='txtPass1' placeholder='Enter your password' />
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    </div>
    <div>
    <h3>Registered Users</h3>
    <ul>
    ${users.map((user) => `<li>${user.name} (${user.email})</li>`).join("")}
    </ul>
    </div>
    </div>
    `;
    root.innerHTML = str + "</div>";
};

const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
  });
  loginForm();
};

const registerForm = () => {
     const str = `<div>
    <h3>Registration Form</h3>
    <input type='text' id="txtName" placeholder='Enter your name' />
    <input type='email' id="txtEmail" placeholder='Enter your email' />
    <input type='password' id="txtPass" placeholder='Enter your password' />
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `;
    root.innerHTML = str + "</div>";
}

const showHome = () => {
     const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `;
    root.innerHTML = str + "</div>";
}