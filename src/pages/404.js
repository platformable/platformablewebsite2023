import React,{useEffect} from 'react'

export default function ErroPage() {


  return null
}

export async function getStaticProps(context) {
    return {
      redirect: {
        permanent: false,
        destination: "https://platformable.com",
      },
    };
  }
