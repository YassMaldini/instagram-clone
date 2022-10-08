import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "react-native"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
import Box from "../../../../designSystem/Box/Box"
import Text from "../../../../designSystem/Text/Text"
import TextInput from "../../../../designSystem/TextInput/TextInput"
import signInWithUsernameAndPasswordMutation from "./SignInForm.actions"
import getSignInFormSchema from "./SignInForm.schema"
import { SignInFormSchema, SignInWithUsernameAndPasswordMutation, SignInWithUsernameAndPasswordMutationVariables } from "./SignInForm.types"

const SignInForm = () => {
  const dispatch = useDispatch()
  const formProps = useForm<SignInFormSchema>({
    resolver: yupResolver(getSignInFormSchema()),
    reValidateMode: 'onSubmit'
  })
  const { control, handleSubmit } = formProps
  const {
    mutate,
    isLoading,
    error: mutationError
  } = useMutation<
    Awaited<ReturnType<SignInWithUsernameAndPasswordMutation>>,
    Error,
    SignInWithUsernameAndPasswordMutationVariables
  >(signInWithUsernameAndPasswordMutation, {
    onSuccess: async (user) => console.log('user', user),
    onError: async (error) => console.log('error', error.message)
  })

  const onSubmit = handleSubmit((data) => mutate({...data, dispatch}))

  useEffect(() => console.log('mutationError', mutationError), [mutationError])

  return (
    <Box>
      <Controller 
        name="username"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput onChangeText={onChange} height="xl" color='secondaryText' style={{backgroundColor: 'grey'}} {...{ value }} />
        )}
        {...{ control }}
      />
      <Controller 
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput onChangeText={onChange} {...{ value }} secureTextEntry />
        )}
        {...{ control }}
      />
      <Button title="Connexion" onPress={onSubmit} />
      {isLoading && <Text>Loading...</Text>}
      {mutationError && <Text>{mutationError.message}</Text>}
    </Box>
  )
}

export default SignInForm