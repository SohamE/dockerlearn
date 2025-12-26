export const connectToDatabase = () =>
  new Promise((res) => setTimeout(() => res("Database started"), 3000));
