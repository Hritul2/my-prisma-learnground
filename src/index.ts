import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const insertUser = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const res = await prisma.user.create({
    data: {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  });
  console.log(res);
};

interface UpdateUser {
  firstName: string;
  lastName: string;
}

const updateUser = async (
  username: string,
  { firstName, lastName }: UpdateUser
) => {
  const res = await prisma.user.update({
    where: { username: username },
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  console.log(res);
};
//insertUser("test", "test", "test", "test");
//updateUser("test", { firstName: "test2", lastName: "test2" });

const createTodo = async (
  userId: number,
  title: string,
  description: string
) => {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(todo);
};

//createTodo(1, "go to gym", "go to gym and do 10 pushups");

const getTodos = async (userId: number) => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });
  console.log(todos);
};
getTodos(1);
