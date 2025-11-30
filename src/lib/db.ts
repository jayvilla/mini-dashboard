// Simple in-memory DB for demo purposes
export const db = {
  user: null as null | {
    name: string;
    email: string;
    age: number;
  },
};

export function saveUser(data: any) {
  db.user = data;
  return db.user;
}

export function getUser() {
  return db.user;
}
