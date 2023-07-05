import styles from '@/styles/DataProducts.module.css'

export default function OurProducts () {
    return (
        <section className="container mx-auto py-10">
        <div className="mb-10">
          <img src="" alt="" />
          <h3>Our Products</h3>
        </div>
        <div  className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((card, i) => (
            <div className="" data-card-number={card} key={i}>
              <div className={`${styles.card_heading}  p-7`}>
                <h6>Open Banking/ Open Finance Trends Report</h6>
              </div>
              <div className="grid grid-rows-2">
              <div className="px-3 py-7">
                <p>
                  Quarterly global trends report summarising all bank platforms,
                  fintech API providers, APIs, business models, partnerships,
                  and use cases in open banking and open finance
                </p>
                <br/>
                <i>Data used to create the trends report is provided with each edition</i>
              </div>
              <div className="">
                <img />
                <button className="mb-20 text-white bg-black font-bold">
                  Download
                </button>
                <div>
                  <p>$150 per quarter</p>
                  <p>or</p>
                  <p>450 per year</p>
                  <p>(save %25)</p>
                  <button className="bg-slate-100">purchase</button>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}