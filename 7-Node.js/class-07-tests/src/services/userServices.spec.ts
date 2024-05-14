import { describe, expect, it } from "vitest";
import { userServices } from "./userServices";
import { UserRepositoryInMemory } from "../repositories/userRepositoryInMemory";

describe("test user create function", () => {
  it("should create user", async () => {
    const user = {
      id: "1",
      name: "nathan lins",
      email: "nathançlisnm@gmail.com",
    };
    const userCreated = await userServices.create(user, UserRepositoryInMemory);
    // expect(userCreated).toHaveProperty({"id", "name"});
    expect(userCreated).toHaveProperty("id");
  });
});
