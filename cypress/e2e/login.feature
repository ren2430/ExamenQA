
Feature: Login en AutomationExercise
  Como usuario del portal
  Quiero iniciar sesión en la plataforma
  Para acceder a mi cuenta

  Background:
    Given que el usuario navega al portal de AutomationExercise

  Scenario: Login exitoso con credenciales válidas
    When ingresa su correo y contraseña válidos
    Then debe ver el mensaje "Logged in as" en el encabezado
 
  Scenario: Login fallido con credenciales incorrectas
    When ingresa un correo o contraseña incorrectos
    Then debe mostrarse el mensaje de error "Your email or password is incorrect!"

  Scenario: Login con campos vacíos
    When deja los campos de correo y contraseña vacíos
    Then debe permanecer en la misma página de Login
