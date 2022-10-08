import * as yup from 'yup'

const getSignInFormSchema = () => (
  yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })
)

export default getSignInFormSchema