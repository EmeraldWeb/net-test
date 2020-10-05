export default function usersProcessing(users) {
  return users.map((user) => {
    const userData = { ...user };
    const tableRow = Object.keys(userData).map((key) => {
      const type = key === 'id' ? 'checkbox' : key;
      return {
        type,
        value: userData[key],
      };
    });

    return tableRow;
  });
}
