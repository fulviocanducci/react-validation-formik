import * as Yup from "yup";

export const formLoginDefaultValue = {
  email: "",
  password: "",
};

export const formLoginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().lowercase().trim().strict(),
  password: Yup.string()
    .required()
    .min(2)
    .trim()
    .matches(/^(\w+\S+)$/, "no matches")
    .strict(),
});
