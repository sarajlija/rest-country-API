import React from "react"
import { useEffect } from "react"
import "../styles/Filter.css"
import { FaSearch } from "react-icons/fa"

const Filter = ({ searchInput, setSearchInput, setFiltered, setCountries, countries }) => {
  const regions = [
    {
      name: "Filter by region",
      desc: "All"
    },
    {
      name: "Africa",
      desc: "Africa"
    },
    {
      name: "Americas",
      desc: "Americas"
    },
    {
      name: "Asia",
      desc: "Asia"
    },
    {
      name: "Europe",
      desc: "Europe"
    },
    {
      name: "Oceania",
      desc: "Oceania"
    }
  ]

  // Prevent page reload when submitting the form
  const handleSubmit = e => {
    e.preventDefault()
  }

  // Search countries
  const searchCountries = searchValue => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter(country => Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase()))
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

  // Filter by region

  const filterRegions = async region => {
    const url = `https://restcountries.com/v2/region/${region}`
    const res = await fetch(url)
    const data = await res.json()
    setCountries(data)
  }

  useEffect(() => {
    filterRegions()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className="container">
        <form className="form-control" onSubmit={handleSubmit} autoComplete="off">
          <FaSearch className="icon-search" />
          <input onChange={e => searchCountries(e.target.value)} type="search" name="search" id="search" placeholder="Search for a country" />
        </form>
        <select name="select" id="select" className="select" onChange={e => filterRegions(e.target.value)} value={regions.name}>
          <option value="Filter By Region">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  )
}

export default Filter
