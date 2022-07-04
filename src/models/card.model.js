import Joi from "joi";
import { getDB } from "*/config/mongodb";

// define board collection
const cardCollectionName = "cards";
const cardCollectionSchema = Joi.object({
  columnId: Joi.string().required(),
  boardId: Joi.string().required(),
  title: Joi.string().required().min(3).max(24),
  desc: Joi.string(),
  priority: Joi.string().required().default("medium"),
  deadline: Joi.string().required().default(Date.now()),
  createdAt: Joi.date().timestamp().default(Date.now()),
  updateAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});

const validateSchema = async (data) => {
  return await cardCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    const value = await validateSchema(data);
    const result = await getDB()
      .collection(cardCollectionName)
      .insertOne(value);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const CardModel = { createNew };
