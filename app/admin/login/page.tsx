import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function login(formData: FormData) {
  "use server";

  const password = formData.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=1");
  }
  const cookie = await cookies();
  cookie.set("admin", "true", {
    httpOnly: true,
    path: "/",
    secure: true,
  });

  redirect("/admin");
}

export default function LoginPage() {
  return (
    <div className="mx-auto mt-40 max-w-sm">
      <h1 className="mb-6 text-2xl font-semibold">Admin login</h1>

      <form action={login} className="space-y-4">
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          className="w-full rounded border px-3 py-2"
        />

        <button className="w-full rounded bg-black py-2 text-white cursor-pointer hover:bg-black/80">
          Se connecter
        </button>
      </form>
    </div>
  );
}
