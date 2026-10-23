export const login = (req, res)  => {
  const {email, password } = req.body ?? {};
  //validacion de email y contraseña
    if (!email || !password) {
        return res.status(400).json ({message: "email y contraseña son incorrectas" })
    }

   res.status(200).json({message:"login satisfactorio",data:{email,password}})

};