export default function Home () {
  return (
    <div>
      Home
      <style jsx global>{`
        a {
          color: green
          // 왜 about 페이지는 적용이 안될까? 페이지 별로 따로 따로 생각해야함 스코프가 있음 
        }
      `}</style>
    </div>
  )
}