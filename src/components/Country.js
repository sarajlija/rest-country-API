import React from "react"
import { useState, useEffect } from "react"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import "../styles/Country.css"

function Country() {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`)
      const country = await response.json()
      setCountry(country)
      console.log(country)
    }

    fetchCountryData()
  }, [name])
  return (
    <>
      <section className="single-country">
        <Link to="/" className="btn">
          <FaLongArrowAltLeft /> Back Home
        </Link>
        {country.map(c => {
          const { numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = c

          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="country-inner">
                <div className="country-details">
                  <div className="details">
                    <h2>{name}</h2>
                    <h5>
                      Native Name: <span>{nativeName}</span>
                    </h5>
                    <h5>
                      Population: <span>{population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>{" "}
                    </h5>
                  </div>

                  <div className="top-level">
                    <h5>
                      Top Level Domain: <span>{topLevelDomain}</span>
                    </h5>
                    <h5>
                      Currencies: <span>{currencies[0].name}</span>
                    </h5>
                    <h5>
                      Languages: <span>{languages[0].name}</span>
                    </h5>
                  </div>
                </div>
                <div className="border-details">
                  <h3>Border Countries: </h3>
                  {borders.map(border => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Country
