import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome to the <span className="text-decoration: line-through">R</span>evolution 🧑🏾‍🚀&nbsp;
        <span className="whitespace-nowrap">
        </span>
      </p>
      <h1 className="text-center dark:text-white">This Blog was started by myself in an attempt to not feel as though my voice has not been heard, if you feel unheard yourself I want you to know this blog is for you to read and respond to.</h1>

      < Posts/>
    </main>
  )
}
