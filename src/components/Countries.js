import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Countries.css"
import "../styles/main.css"
import Filter from "./Filter"
const url = "https://restcountries.com/v2/all"

const Countries = () => {
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
      console.log(countries)
      setIsLoading(false)
    }

    fetchCountries()
  }, [])

  // const removeCountry = (numericCode) => {
  //   const newCountry = countries.filter(
  //     (country) => country.numericCode !== numericCode
  //   )
  //   setCountries(newCountry)
  // }
  return (
    <>
      <Filter searchInput={searchInput} setSearchInput={setSearchInput} setFiltered={setFiltered} setCountries={setCountries} countries={countries} />

      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : searchInput.length > 1 ? (
        <section className="grid">
          {filtered.map(country => {
            const { numericCode, name, flag, population, region, capital } = country

            return (
              <article key={numericCode} className="country">
                <Link to={`/countries/${name}`} key={numericCode}>
                  <div className="card-img">
                    <img src={flag} alt={name} />
                  </div>
                </Link>
                <div className="card-text">
                  <h4>
                    Name: <span>{name}</span>
                  </h4>
                  <h4>
                    Population: <span>{population.toLocaleString()}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                </div>
              </article>
            )
          })}
        </section>
      ) : (
        <section className="grid">
          {countries.map(country => {
            const { numericCode, name, population, region, capital, flag } = country

            return (
              <article key={numericCode} className="country">
                <Link to={`/country/${name}`} key={numericCode}>
                  <div className="card-img">
                    <img src={flag} alt={name} />
                  </div>{" "}
                </Link>
                <div className="card-text">
                  <h4>
                    Name: <span>{name}</span>
                  </h4>
                  <h4>
                    Population: <span>{population.toLocaleString()}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                </div>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default Countries
