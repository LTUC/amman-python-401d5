import React, { useState } from 'react'

import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import NameForm from '../components/NameForm'
import { replies } from '../data.json'

export default function Home() {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  function questionAskedHandler(event) {
    event.preventDefault();

    const randomReply = replies[Math.floor(Math.random() * replies.length)]
    const answeredQuestion = {
      question: event.target.question.value,
      reply: randomReply,
      id: answeredQuestions.length + 1,
    }

    setAnsweredQuestions(questions => [...questions, answeredQuestion])

  }

  function getLatestReply() {
    return answeredQuestions[answeredQuestions.length - 1]?.reply || 'Ask me anything!'
  }

  const [name, setName] = useState("Test 2")

  return (
    <div className="md:flex flex-col">
      <Head>
        <title>Magic Eight Ball</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header title="Magic 8 Ball" name={name}>
          <p>{`${answeredQuestions.length} question answered`}</p>
        </Header>

        <NameForm updateName={setName} />

        <form className="flex w-1/2 p-2 mx-auto my-4 bg-gray-200" onSubmit={questionAskedHandler}>
          <input name="question" className="flex-auto pl-1" />
          <button className="px-2 py-1 bg-gray-500 text-gray-50">Ask</button>
        </form>

        <div className="w-96 h-96 mx-auto my-4 bg-gray-900 rounded-full">
          <div className="relative flex items-center justify-center w-48 h-48 rounded-full bg-gray-50 top-16 left-16">
            <p className="text-xl text-center">{getLatestReply()}</p>
          </div>
        </div>
        {answeredQuestions.length ?
          <table className="mx-auto w-1/2 my-4">
            <thead>
              <tr>
                <th className="border border-gray-70">No.</th>
                <th className="border border-gray-70">Question</th>
                <th className="border border-gray-70">Response</th>
              </tr>
            </thead>
            <tbody>
              {answeredQuestions.map(answeredQuestion => (
                <tr key={`${answeredQuestion.id}`}>
                  <td className="pl-2 border border-gray-700">{answeredQuestion.id}</td>
                  <td className="pl-2 border border-gray-700">{answeredQuestion.question}</td>
                  <td className="pl-2 border border-gray-700">{answeredQuestion.reply}</td>
                </tr>))
              }
            </tbody>
          </table> :

          <p className="text-center">No Questions Answered</p>
        }

        <footer className="p-4 mt-8 bg-gray-500 text-gray-50">
          <nav>
            {/* TODO: Build careers page later */}
            <Link href="/careers" >
              <a>Careers</a>
            </Link>
          </nav>
        </footer>

      </main>

    </div>
  )
}
