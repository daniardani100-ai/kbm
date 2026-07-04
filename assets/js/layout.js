function getUserName() {
  const user = getSession();

  if (!user) return "";

  return user.username;
}
