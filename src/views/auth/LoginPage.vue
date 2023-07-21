<template>
  <section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Inicia sesión en tu cuenta
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Correo electrónico</label
              >
              <input
                id="email"
                type="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="correo@correo.com"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Contraseña</label
              >
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500"
                    >Mantener sesión iniciada</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline"
                >¿Olvidaste tu contraseña?</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Iniciar Sesión
            </button>
            <p class="text-sm font-light text-gray-500">
              No tienes una cuenta?
              <a href="#" class="font-medium text-blue-600 hover:underline"
                >Crear Cuenta</a
              >
            </p>
          </form>
          <div class="flex items-center mb-4">
            <div class="flex-grow h-px bg-gray-300"></div>
            <div class="mx-4 text-gray-400">o</div>
            <div class="flex-grow h-px bg-gray-300"></div>
          </div>
          <div class="flex flex-col items-center">
            <button
              class="border border-gray-200 hover:bg-gray-100 py-2 px-4 rounded-lg mb-4 flex items-center justify-center w-full"
            >
              <img
                src="../../assets/google-logo.svg"
                alt="google icon"
                class="w-8"
              />
              Iniciar sesión con Google
            </button>
            <button
              class="border border-gray-200 hover:bg-gray-100 py-2 px-4 rounded-lg mb-4 flex items-center justify-center w-full"
            >
              <img
                src="../../assets/facebook-logo.svg"
                alt="google icon"
                class="w-6"
              />
              Iniciar sesión con Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
