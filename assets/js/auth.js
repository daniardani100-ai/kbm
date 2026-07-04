function setSession(user) {
  localStorage.setItem(
    "session",
    JSON.stringify(user)
  );
}

function getSession() {
  const session =
    localStorage.getItem("session");

  return session
    ? JSON.parse(session)
    : null;
}

function logout() {
  localStorage.removeItem("session");
  location.href = "../login.html";
}

function checkLogin() {
  const user = getSession();

  if (!user) {
    location.href = "login.html";
  }
}

function checkAdmin() {
  const user = getSession();

  if (!user || user.role !== "admin") {
    location.href = "../login.html";
  }
}

function checkTim() {
  const user = getSession();

  if (!user || user.role !== "tim") {
    location.href = "../login.html";
  }
}
