"use client"

import type React from "react"
import Link from 'next/link';
import { useState } from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { useTheme } from "@/contexts/theme-context"
import purpure from "@/public/purpure.svg"
export default function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const { toast } = useToast()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Error!",
        description: "Please fill in all fields.",
        className: "bg-red-100 text-red-800 border-none",
      })
      return
    }

    if (!agreeToTerms) {
      toast({
        variant: "warning",
        title: "Warning!",
        description: "You must agree to the Terms & Conditions.",
        className: "bg-yellow-100 text-yellow-800 border-none",
      })
      return
    }

    // Simulate successful registration
    toast({
      variant: "success",
      title: "Success!",
      description: "Registration is complete.",
      className: "bg-green-100 text-green-800 border-none",
    })

    // Reset form
    setEmail("")
    setPassword("")
    setAgreeToTerms(false)
  }

  const handleGoogleLogin = () => {
    toast({
      variant: "info",
      title: "Info!",
      description: "Google login is not implemented yet.",
      className: "bg-blue-100 text-blue-800 border-none",
    })
  }

  const handleFacebookLogin = () => {
    toast({
      variant: "default",
      title: "Default",
      description: "Facebook login is not implemented yet.",
      className: "bg-gray-100 text-gray-800 border-none",
    })
  }

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 z-0 "
        style={{
          backgroundImage: `url(${purpure.src})`,
          height: "20%",
          width: "20%",
          transform: "translate(40%,250%)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
          opacity: 1,
        }}
      />
      <div
        className={`relative z-10 max-sm:max-w-80 w-full max-w-md [border-radius:32px] p-8 shadow-lg transition-colors duration-200 ${isDark
          ? "bg-[linear-gradient(142deg,var(--neutral-neutral-250,rgba(248,248,248,0.10))_0%,var(--neutral-neutral-220,rgba(248,248,248,0.04))_44.62%)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset,0px_54px_32px_-16px_rgba(5,5,5,0.05),0px_24px_24px_-16px_rgba(5,5,5,0.09),0px_6px_12px_0px_rgba(5,5,5,0.10),0px_4px_4px_-4px_rgba(5,5,5,0.10),0px_0.5px_1.5px_-4px_rgba(5,5,5,0.50)] backdrop-blur-[50px] border-[1px_solid_var(--stroke-15-card,rgba(255,255,255,0.40))]"
          : "backdrop-blur-[50px] bg-[linear-gradient(142deg,rgba(248,248,248,0.80)_0%,rgba(248,248,248,0.50)_44.62%)]"
          }`}
      >
        <h1
          className={`text-2xl font-bold text-center mb-2 transition-colors duration-200 ${isDark ? "text-white" : "text-gray-800"
            }`}
        >
          Sign Up
        </h1>
        <p
          className={`text-center text-sm mb-6 transition-colors duration-200 ${isDark ? "text-gray-400" : "text-gray-500"
            }`}
        >
          Choose a convenient method of registration
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="relative ">
            <Mail className={`absolute left-3 top-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`} size={18} />
            <input
              type="text"
              placeholder="Enter your email or phone"
              className={`w-full [border-radius:32px] pl-10 pr-4 py-3 transition-colors duration-200`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                backgroundColor: isDark ? "rgba(52, 52, 52)" : "rgba(223, 220, 219)"
              }}
            />
          </div>

          <div className="relative ">
            <Lock className={`absolute left-3 top-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`} size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full [border-radius:32px] pl-10 pr-10 py-3 transition-colors duration-200`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: isDark ? "rgba(52, 52, 52)" : "rgba(223, 220, 219)"
              }}
            />
            <button
              type="button"
              className={`absolute right-3 top-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="top-3.5" size={18} style={{ transform: "rotateY(180deg)" }} /> : <Eye className="top-3.5" size={18} />}
            </button>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
              className="mt-0.5 border-orange-500 data-[state=checked]:bg-orange-500 "
            />
            <label
              htmlFor="terms"
              className={`text-sm transition-colors duration-200 ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              I agree with{" "}
              <a href="#" className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Privacy Policy
              </a>
            </label>
          </div>

          <Button type="submit" className="w-full py-3 bg-[#FF7A45] dark:bg-[#b55530] hover:bg-[#FF6A35] text-white [border-radius:32px] shadow-[0px_24px_32px_-12px_var(--neutral-neutral-410,rgba(18,18,18,0.10)),2px_4px_16px_0px_rgba(0,0,0,0.04)]">
            Sign Up
          </Button>

          <div className="relative flex items-center justify-center pt-4">
            <div
              className={`h-[2px] opacity-10 rounded-md flex-grow ${isDark ? "bg-gradient-to-r from-[rgba(255,255,255,0.00)] via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.40)]" : "bg-gradient-to-r from-[rgba(255,255,255,0.00)] to-[#181818]"}  `}
            ></div>
            <span className={`px-3 text-sm transition-colors duration-200 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              OR
            </span>
            <div
              className={`h-[2px] opacity-10 rounded-md flex-grow ${isDark ? "bg-gradient-to-r from-[rgba(255,255,255,0.40)] via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.00)]" : "bg-gradient-to-l from-[rgba(255,255,255,0.00)] to-[#181818]"}  `}
            ></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className={`w-full flex items-center justify-center gap-2 text-gray-500 [border-radius:32px] py-3 transition-colors duration-200`}
            style={{
              backgroundColor: isDark ? "var(--neutral-neutral-22, rgba(248, 248, 248, 0.02))" : "rgba(223, 220, 219)",
              borderTop: "0.5px solid rgba(248, 248, 248, 0.05)"
            }}

          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#FFC107"
              />
              <path
                d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                fill="#4CAF50"
              />
              <path
                d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#1976D2"
              />
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            onClick={handleFacebookLogin}
            className={`w-full flex items-center justify-center gap-2 text-gray-500 [border-radius:32px] py-3 transition-colors duration-200`}
            style={{
              backgroundColor: isDark ? "var(--neutral-neutral-22, rgba(248, 248, 248, 0.02))" : "rgba(223, 220, 219)",
              borderTop: "0.5px solid rgba(248, 248, 248, 0.05)"

            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.04001C6.5 2.04001 2 6.53001 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85001C10.44 7.34001 11.93 5.96001 14.22 5.96001C15.31 5.96001 16.45 6.15001 16.45 6.15001V8.62001H15.19C13.95 8.62001 13.56 9.39001 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53001 17.5 2.04001 12 2.04001Z"
                fill="#1877F2"
              />
            </svg>
            Continue with Facebook
          </button>

          <p
            className={`text-center text-sm transition-colors duration-200 ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Already have an account?{" "}
            <Link href="/login" className={`${isDark ? "text-gray-300" : "text-gray-900"}`}>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

