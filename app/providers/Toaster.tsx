"use client"

import { Toaster } from "react-hot-toast"

const ToasterProvider = () => {
	return(
		<Toaster
         toastOptions={{
            duration: 5000,
            style: {
               backgroundColor: "#333",
               color: "#fff",
               borderRadius: "10px",
               padding: "10px",
            },
         }}
      />
	)
}

export default ToasterProvider;