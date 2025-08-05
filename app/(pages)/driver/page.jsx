"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/app/components/HeroSection/HeroSection"

const documents = ["Driving License", "Work Permit", "Green Card", "Social Security", "Other"]

const hearAboutUs = ["Ad on Facebook", "Saw our Trucks / Spoke with a driver", "Ad on another site"]

const DriverForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    homePhone: "",
    cellPhone: "",
    street: "",
    zip: "",
    city: "",
    state: "",
    experience: "",
    age21: "",
    military: "",
    violations: "",
    accidents: "",
    dui: "",
    citations: "",
    hearAbout: "",
  })
  const [documents, setDocuments] = useState([])
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [statesLoading, setStatesLoading] = useState(true)
  const [citiesLoading, setCitiesLoading] = useState(false)

  // Fetch US States from free API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        setStatesLoading(true)

        // Using a free, reliable API for US states
        const response = await fetch("https://api.census.gov/data/2019/pep/population?get=NAME&for=state:*")

        if (response.ok) {
          const data = await response.json()

          // Process the census data
          const statesList = data
            .slice(1) // Remove header row
            .map(([name, stateCode]) => ({
              name: name,
              abbreviation: getStateAbbreviation(name),
            }))
            .filter((state) => state.name !== "Puerto Rico") // Filter out territories if needed
            .sort((a, b) => a.name.localeCompare(b.name))

          setStates(statesList)
        } else {
          throw new Error("Census API failed")
        }
      } catch (error) {
        // Fallback to another free API
        try {
          const response = await fetch("https://restcountries.com/v3.1/name/united%20states")

          if (response.ok) {
            // If that fails too, use a comprehensive static list as last resort
            const fallbackStates = [
              { name: "Alabama", abbreviation: "AL" },
              { name: "Alaska", abbreviation: "AK" },
              { name: "Arizona", abbreviation: "AZ" },
              { name: "Arkansas", abbreviation: "AR" },
              { name: "California", abbreviation: "CA" },
              { name: "Colorado", abbreviation: "CO" },
              { name: "Connecticut", abbreviation: "CT" },
              { name: "Delaware", abbreviation: "DE" },
              { name: "Florida", abbreviation: "FL" },
              { name: "Georgia", abbreviation: "GA" },
              { name: "Hawaii", abbreviation: "HI" },
              { name: "Idaho", abbreviation: "ID" },
              { name: "Illinois", abbreviation: "IL" },
              { name: "Indiana", abbreviation: "IN" },
              { name: "Iowa", abbreviation: "IA" },
              { name: "Kansas", abbreviation: "KS" },
              { name: "Kentucky", abbreviation: "KY" },
              { name: "Louisiana", abbreviation: "LA" },
              { name: "Maine", abbreviation: "ME" },
              { name: "Maryland", abbreviation: "MD" },
              { name: "Massachusetts", abbreviation: "MA" },
              { name: "Michigan", abbreviation: "MI" },
              { name: "Minnesota", abbreviation: "MN" },
              { name: "Mississippi", abbreviation: "MS" },
              { name: "Missouri", abbreviation: "MO" },
              { name: "Montana", abbreviation: "MT" },
              { name: "Nebraska", abbreviation: "NE" },
              { name: "Nevada", abbreviation: "NV" },
              { name: "New Hampshire", abbreviation: "NH" },
              { name: "New Jersey", abbreviation: "NJ" },
              { name: "New Mexico", abbreviation: "NM" },
              { name: "New York", abbreviation: "NY" },
              { name: "North Carolina", abbreviation: "NC" },
              { name: "North Dakota", abbreviation: "ND" },
              { name: "Ohio", abbreviation: "OH" },
              { name: "Oklahoma", abbreviation: "OK" },
              { name: "Oregon", abbreviation: "OR" },
              { name: "Pennsylvania", abbreviation: "PA" },
              { name: "Rhode Island", abbreviation: "RI" },
              { name: "South Carolina", abbreviation: "SC" },
              { name: "South Dakota", abbreviation: "SD" },
              { name: "Tennessee", abbreviation: "TN" },
              { name: "Texas", abbreviation: "TX" },
              { name: "Utah", abbreviation: "UT" },
              { name: "Vermont", abbreviation: "VT" },
              { name: "Virginia", abbreviation: "VA" },
              { name: "Washington", abbreviation: "WA" },
              { name: "West Virginia", abbreviation: "WV" },
              { name: "Wisconsin", abbreviation: "WI" },
              { name: "Wyoming", abbreviation: "WY" },
            ]
            setStates(fallbackStates)
          }
        } catch (secondError) {
          // Use comprehensive static data as final fallback
          const fallbackStates = [
            { name: "Alabama", abbreviation: "AL" },
            { name: "Alaska", abbreviation: "AK" },
            { name: "Arizona", abbreviation: "AZ" },
            { name: "Arkansas", abbreviation: "AR" },
            { name: "California", abbreviation: "CA" },
            { name: "Colorado", abbreviation: "CO" },
            { name: "Connecticut", abbreviation: "CT" },
            { name: "Delaware", abbreviation: "DE" },
            { name: "Florida", abbreviation: "FL" },
            { name: "Georgia", abbreviation: "GA" },
            { name: "Hawaii", abbreviation: "HI" },
            { name: "Idaho", abbreviation: "ID" },
            { name: "Illinois", abbreviation: "IL" },
            { name: "Indiana", abbreviation: "IN" },
            { name: "Iowa", abbreviation: "IA" },
            { name: "Kansas", abbreviation: "KS" },
            { name: "Kentucky", abbreviation: "KY" },
            { name: "Louisiana", abbreviation: "LA" },
            { name: "Maine", abbreviation: "ME" },
            { name: "Maryland", abbreviation: "MD" },
            { name: "Massachusetts", abbreviation: "MA" },
            { name: "Michigan", abbreviation: "MI" },
            { name: "Minnesota", abbreviation: "MN" },
            { name: "Mississippi", abbreviation: "MS" },
            { name: "Missouri", abbreviation: "MO" },
            { name: "Montana", abbreviation: "MT" },
            { name: "Nebraska", abbreviation: "NE" },
            { name: "Nevada", abbreviation: "NV" },
            { name: "New Hampshire", abbreviation: "NH" },
            { name: "New Jersey", abbreviation: "NJ" },
            { name: "New Mexico", abbreviation: "NM" },
            { name: "New York", abbreviation: "NY" },
            { name: "North Carolina", abbreviation: "NC" },
            { name: "North Dakota", abbreviation: "ND" },
            { name: "Ohio", abbreviation: "OH" },
            { name: "Oklahoma", abbreviation: "OK" },
            { name: "Oregon", abbreviation: "OR" },
            { name: "Pennsylvania", abbreviation: "PA" },
            { name: "Rhode Island", abbreviation: "RI" },
            { name: "South Carolina", abbreviation: "SC" },
            { name: "South Dakota", abbreviation: "SD" },
            { name: "Tennessee", abbreviation: "TN" },
            { name: "Texas", abbreviation: "TX" },
            { name: "Utah", abbreviation: "UT" },
            { name: "Vermont", abbreviation: "VT" },
            { name: "Virginia", abbreviation: "VA" },
            { name: "Washington", abbreviation: "WA" },
            { name: "West Virginia", abbreviation: "WV" },
            { name: "Wisconsin", abbreviation: "WI" },
            { name: "Wyoming", abbreviation: "WY" },
          ]
          setStates(fallbackStates)
        }
      } finally {
        setStatesLoading(false)
      }
    }

    fetchStates()
  }, [])

  // Helper function to get state abbreviations
  const getStateAbbreviation = (stateName) => {
    const stateMap = {
      Alabama: "AL",
      Alaska: "AK",
      Arizona: "AZ",
      Arkansas: "AR",
      California: "CA",
      Colorado: "CO",
      Connecticut: "CT",
      Delaware: "DE",
      Florida: "FL",
      Georgia: "GA",
      Hawaii: "HI",
      Idaho: "ID",
      Illinois: "IL",
      Indiana: "IN",
      Iowa: "IA",
      Kansas: "KS",
      Kentucky: "KY",
      Louisiana: "LA",
      Maine: "ME",
      Maryland: "MD",
      Massachusetts: "MA",
      Michigan: "MI",
      Minnesota: "MN",
      Mississippi: "MS",
      Missouri: "MO",
      Montana: "MT",
      Nebraska: "NE",
      Nevada: "NV",
      "New Hampshire": "NH",
      "New Jersey": "NJ",
      "New Mexico": "NM",
      "New York": "NY",
      "North Carolina": "NC",
      "North Dakota": "ND",
      Ohio: "OH",
      Oklahoma: "OK",
      Oregon: "OR",
      Pennsylvania: "PA",
      "Rhode Island": "RI",
      "South Carolina": "SC",
      "South Dakota": "SD",
      Tennessee: "TN",
      Texas: "TX",
      Utah: "UT",
      Vermont: "VT",
      Virginia: "VA",
      Washington: "WA",
      "West Virginia": "WV",
      Wisconsin: "WI",
      Wyoming: "WY",
    }
    return stateMap[stateName] || stateName.substring(0, 2).toUpperCase()
  }

  // Fetch cities when state is selected using GeoNames API (free)
  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.state) {
        setCities([])
        return
      }

      try {
        setCitiesLoading(true)
        const selectedState = states.find((state) => state.name === formData.state)

        if (selectedState) {
          // Using GeoNames free API for cities
          const response = await fetch(
            `https://secure.geonames.org/searchJSON?country=US&adminCode1=${selectedState.abbreviation}&featureClass=P&maxRows=50&username=demo`,
          )

          if (response.ok) {
            const data = await response.json()

            if (data.geonames && data.geonames.length > 0) {
              const citiesList = data.geonames
                .map((city) => city.name)
                .filter((city, index, arr) => arr.indexOf(city) === index) // Remove duplicates
                .sort()

              setCities(citiesList)
            } else {
              // If no cities found, use major cities for the state
              setCities(getMajorCitiesForState(formData.state))
            }
          } else {
            throw new Error("GeoNames API failed")
          }
        }
      } catch (error) {
        // Fallback to major cities for the selected state
        setCities(getMajorCitiesForState(formData.state))
      } finally {
        setCitiesLoading(false)
      }
    }

    if (formData.state && states.length > 0) {
      fetchCities()
    }
  }, [formData.state, states])

  // Helper function to get major cities for each state
  const getMajorCitiesForState = (stateName) => {
    const stateCityMap = {
      California: [
        "Los Angeles",
        "San Francisco",
        "San Diego",
        "Sacramento",
        "San Jose",
        "Fresno",
        "Long Beach",
        "Oakland",
        "Bakersfield",
        "Anaheim",
      ],
      Texas: [
        "Houston",
        "San Antonio",
        "Dallas",
        "Austin",
        "Fort Worth",
        "El Paso",
        "Arlington",
        "Corpus Christi",
        "Plano",
        "Lubbock",
      ],
      Florida: [
        "Jacksonville",
        "Miami",
        "Tampa",
        "Orlando",
        "St. Petersburg",
        "Hialeah",
        "Tallahassee",
        "Fort Lauderdale",
        "Port St. Lucie",
        "Cape Coral",
      ],
      "New York": [
        "New York City",
        "Buffalo",
        "Rochester",
        "Yonkers",
        "Syracuse",
        "Albany",
        "New Rochelle",
        "Mount Vernon",
        "Schenectady",
        "Utica",
      ],
      Pennsylvania: [
        "Philadelphia",
        "Pittsburgh",
        "Allentown",
        "Erie",
        "Reading",
        "Scranton",
        "Bethlehem",
        "Lancaster",
        "Harrisburg",
        "Altoona",
      ],
      Illinois: [
        "Chicago",
        "Aurora",
        "Rockford",
        "Joliet",
        "Naperville",
        "Springfield",
        "Peoria",
        "Elgin",
        "Waukegan",
        "Cicero",
      ],
      Ohio: [
        "Columbus",
        "Cleveland",
        "Cincinnati",
        "Toledo",
        "Akron",
        "Dayton",
        "Parma",
        "Canton",
        "Youngstown",
        "Lorain",
      ],
      Georgia: [
        "Atlanta",
        "Augusta",
        "Columbus",
        "Savannah",
        "Athens",
        "Sandy Springs",
        "Roswell",
        "Macon",
        "Johns Creek",
        "Albany",
      ],
      "North Carolina": [
        "Charlotte",
        "Raleigh",
        "Greensboro",
        "Durham",
        "Winston-Salem",
        "Fayetteville",
        "Cary",
        "Wilmington",
        "High Point",
        "Asheville",
      ],
      Michigan: [
        "Detroit",
        "Grand Rapids",
        "Warren",
        "Sterling Heights",
        "Lansing",
        "Ann Arbor",
        "Flint",
        "Dearborn",
        "Livonia",
        "Westland",
      ],
      Virginia: [
        "Virginia Beach",
        "Norfolk",
        "Chesapeake",
        "Richmond",
        "Newport News",
        "Alexandria",
        "Hampton",
        "Portsmouth",
        "Suffolk",
        "Roanoke",
      ],
      Washington: [
        "Seattle",
        "Spokane",
        "Tacoma",
        "Vancouver",
        "Bellevue",
        "Kent",
        "Everett",
        "Renton",
        "Federal Way",
        "Spokane Valley",
      ],
      Arizona: [
        "Phoenix",
        "Tucson",
        "Mesa",
        "Chandler",
        "Glendale",
        "Scottsdale",
        "Gilbert",
        "Tempe",
        "Peoria",
        "Surprise",
      ],
      Massachusetts: [
        "Boston",
        "Worcester",
        "Springfield",
        "Lowell",
        "Cambridge",
        "New Bedford",
        "Brockton",
        "Quincy",
        "Lynn",
        "Fall River",
      ],
      Tennessee: [
        "Nashville",
        "Memphis",
        "Knoxville",
        "Chattanooga",
        "Clarksville",
        "Murfreesboro",
        "Jackson",
        "Johnson City",
        "Franklin",
        "Bartlett",
      ],
      Indiana: [
        "Indianapolis",
        "Fort Wayne",
        "Evansville",
        "South Bend",
        "Carmel",
        "Fishers",
        "Bloomington",
        "Hammond",
        "Gary",
        "Muncie",
      ],
      Missouri: [
        "Kansas City",
        "St. Louis",
        "Springfield",
        "Independence",
        "Columbia",
        "Lee's Summit",
        "O'Fallon",
        "St. Joseph",
        "St. Charles",
        "St. Peters",
      ],
      Maryland: [
        "Baltimore",
        "Frederick",
        "Rockville",
        "Gaithersburg",
        "Bowie",
        "Hagerstown",
        "Annapolis",
        "College Park",
        "Salisbury",
        "Laurel",
      ],
      Wisconsin: [
        "Milwaukee",
        "Madison",
        "Green Bay",
        "Kenosha",
        "Racine",
        "Appleton",
        "Waukesha",
        "Eau Claire",
        "Oshkosh",
        "Janesville",
      ],
      Colorado: [
        "Denver",
        "Colorado Springs",
        "Aurora",
        "Fort Collins",
        "Lakewood",
        "Thornton",
        "Arvada",
        "Westminster",
        "Pueblo",
        "Centennial",
      ],
      Minnesota: [
        "Minneapolis",
        "St. Paul",
        "Rochester",
        "Duluth",
        "Bloomington",
        "Brooklyn Park",
        "Plymouth",
        "St. Cloud",
        "Eagan",
        "Woodbury",
      ],
      "South Carolina": [
        "Charleston",
        "Columbia",
        "North Charleston",
        "Mount Pleasant",
        "Rock Hill",
        "Greenville",
        "Summerville",
        "Sumter",
        "Goose Creek",
        "Hilton Head Island",
      ],
      Alabama: [
        "Birmingham",
        "Montgomery",
        "Mobile",
        "Huntsville",
        "Tuscaloosa",
        "Hoover",
        "Dothan",
        "Auburn",
        "Decatur",
        "Madison",
      ],
      Louisiana: [
        "New Orleans",
        "Baton Rouge",
        "Shreveport",
        "Lafayette",
        "Lake Charles",
        "Kenner",
        "Bossier City",
        "Monroe",
        "Alexandria",
        "Houma",
      ],
      Kentucky: [
        "Louisville",
        "Lexington",
        "Bowling Green",
        "Owensboro",
        "Covington",
        "Richmond",
        "Georgetown",
        "Florence",
        "Hopkinsville",
        "Nicholasville",
      ],
      Oregon: [
        "Portland",
        "Eugene",
        "Salem",
        "Gresham",
        "Hillsboro",
        "Bend",
        "Beaverton",
        "Medford",
        "Springfield",
        "Corvallis",
      ],
      Oklahoma: [
        "Oklahoma City",
        "Tulsa",
        "Norman",
        "Broken Arrow",
        "Lawton",
        "Edmond",
        "Moore",
        "Midwest City",
        "Enid",
        "Stillwater",
      ],
      Connecticut: [
        "Bridgeport",
        "New Haven",
        "Hartford",
        "Stamford",
        "Waterbury",
        "Norwalk",
        "Danbury",
        "New Britain",
        "West Hartford",
        "Greenwich",
      ],
      Iowa: [
        "Des Moines",
        "Cedar Rapids",
        "Davenport",
        "Sioux City",
        "Waterloo",
        "Iowa City",
        "Council Bluffs",
        "Ames",
        "Dubuque",
        "West Des Moines",
      ],
      Mississippi: [
        "Jackson",
        "Gulfport",
        "Southaven",
        "Hattiesburg",
        "Biloxi",
        "Meridian",
        "Tupelo",
        "Greenville",
        "Olive Branch",
        "Horn Lake",
      ],
      Arkansas: [
        "Little Rock",
        "Fort Smith",
        "Fayetteville",
        "Springdale",
        "Jonesboro",
        "North Little Rock",
        "Conway",
        "Rogers",
        "Pine Bluff",
        "Bentonville",
      ],
      Kansas: [
        "Wichita",
        "Overland Park",
        "Kansas City",
        "Topeka",
        "Olathe",
        "Lawrence",
        "Shawnee",
        "Manhattan",
        "Lenexa",
        "Salina",
      ],
      Utah: [
        "Salt Lake City",
        "West Valley City",
        "Provo",
        "West Jordan",
        "Orem",
        "Sandy",
        "Ogden",
        "St. George",
        "Layton",
        "Taylorsville",
      ],
      Nevada: [
        "Las Vegas",
        "Henderson",
        "Reno",
        "North Las Vegas",
        "Sparks",
        "Carson City",
        "Fernley",
        "Elko",
        "Mesquite",
        "Boulder City",
      ],
      "New Mexico": [
        "Albuquerque",
        "Las Cruces",
        "Rio Rancho",
        "Santa Fe",
        "Roswell",
        "Farmington",
        "Clovis",
        "Hobbs",
        "Alamogordo",
        "Carlsbad",
      ],
      "West Virginia": [
        "Charleston",
        "Huntington",
        "Parkersburg",
        "Morgantown",
        "Wheeling",
        "Martinsburg",
        "Fairmont",
        "Beckley",
        "Clarksburg",
        "Lewisburg",
      ],
      Nebraska: [
        "Omaha",
        "Lincoln",
        "Bellevue",
        "Grand Island",
        "Kearney",
        "Fremont",
        "Hastings",
        "North Platte",
        "Norfolk",
        "Columbus",
      ],
      Idaho: [
        "Boise",
        "Meridian",
        "Nampa",
        "Idaho Falls",
        "Pocatello",
        "Caldwell",
        "Coeur d'Alene",
        "Twin Falls",
        "Lewiston",
        "Post Falls",
      ],
      Hawaii: [
        "Honolulu",
        "East Honolulu",
        "Pearl City",
        "Hilo",
        "Kailua",
        "Waipahu",
        "Kaneohe",
        "Kailua-Kona",
        "Kahului",
        "Mililani Town",
      ],
      "New Hampshire": [
        "Manchester",
        "Nashua",
        "Concord",
        "Derry",
        "Rochester",
        "Salem",
        "Dover",
        "Merrimack",
        "Londonderry",
        "Hudson",
      ],
      Maine: [
        "Portland",
        "Lewiston",
        "Bangor",
        "South Portland",
        "Auburn",
        "Biddeford",
        "Sanford",
        "Saco",
        "Augusta",
        "Westbrook",
      ],
      Montana: [
        "Billings",
        "Missoula",
        "Great Falls",
        "Bozeman",
        "Butte",
        "Helena",
        "Kalispell",
        "Havre",
        "Anaconda",
        "Miles City",
      ],
      "Rhode Island": [
        "Providence",
        "Warwick",
        "Cranston",
        "Pawtucket",
        "East Providence",
        "Woonsocket",
        "Newport",
        "Central Falls",
        "Westerly",
        "North Providence",
      ],
      Delaware: [
        "Wilmington",
        "Dover",
        "Newark",
        "Middletown",
        "Smyrna",
        "Milford",
        "Seaford",
        "Georgetown",
        "Elsmere",
        "New Castle",
      ],
      "South Dakota": [
        "Sioux Falls",
        "Rapid City",
        "Aberdeen",
        "Brookings",
        "Watertown",
        "Mitchell",
        "Yankton",
        "Pierre",
        "Huron",
        "Vermillion",
      ],
      "North Dakota": [
        "Fargo",
        "Bismarck",
        "Grand Forks",
        "Minot",
        "West Fargo",
        "Williston",
        "Dickinson",
        "Mandan",
        "Jamestown",
        "Wahpeton",
      ],
      Alaska: [
        "Anchorage",
        "Fairbanks",
        "Juneau",
        "Sitka",
        "Ketchikan",
        "Wasilla",
        "Kenai",
        "Kodiak",
        "Bethel",
        "Palmer",
      ],
      Vermont: [
        "Burlington",
        "Essex",
        "South Burlington",
        "Colchester",
        "Rutland",
        "Bennington",
        "Brattleboro",
        "Milton",
        "Hartford",
        "Barre",
      ],
      Wyoming: [
        "Cheyenne",
        "Casper",
        "Laramie",
        "Gillette",
        "Rock Springs",
        "Sheridan",
        "Green River",
        "Evanston",
        "Riverton",
        "Jackson",
      ],
    }

    return stateCityMap[stateName] || ["City Center", "Downtown", "Metro Area"]
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    // Reset city when state changes
    if (name === "state") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        city: "", // Reset city selection
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size / 1024 > 1000) {
      setMessage({ text: "Please upload file less than 1 MB", type: "error" })
      e.target.value = ""
      return
    }
    if (e.target.name === "resume") {
      setResume(file)
    } else {
      setDocuments([...documents, file])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: "", type: "" })

    try {
      const formDataToSend = new FormData()

      // Append your access key
      formDataToSend.append("access_key", "93119b65-2a92-437e-a3ee-3fa223728d66")

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      // Append files
      if (resume) {
        formDataToSend.append("resume", resume)
      }
      documents.forEach((doc, index) => {
        formDataToSend.append(`document_${index}`, doc)
      })

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.status === 200) {
        setMessage({ text: result.message, type: "success" })
        e.target.reset()
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          homePhone: "",
          cellPhone: "",
          street: "",
          zip: "",
          city: "",
          state: "",
          experience: "",
          age21: "",
          military: "",
          violations: "",
          accidents: "",
          dui: "",
          citations: "",
          hearAbout: "",
        })
        setDocuments([])
        setResume(null)
      } else {
        setMessage({
          text: result.message || "Something went wrong!",
          type: "error",
        })
      }
    } catch (error) {
      console.error(error)
      setMessage({ text: "Something went wrong!", type: "error" })
    } finally {
      setLoading(false)
    }
  }

  const driverHeroProps = {
    backgroundImage: "/driver-hero.png",
    welcomeText: "Welcome to DTL",
    mainHeading: "Are You A Driver?",
    subHeading:
      "Join our growing family! We are always looking for drivers and employees who want to use their talents to their full potential.",
    ctaText: "Apply Now",
    ctaLink: "#driver-form",
    height: "h-[600px] md:h-[700px]",
  }

  return (
    <>
      <HeroSection {...driverHeroProps} />
      <div id="driver-form" className="min-h-screen w-full flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-[linear-gradient(180deg,_rgba(33,41,80,0.2)_0%,_#0B0428_100%)] p-8 rounded-xl shadow-lg backdrop-blur-md text-white my-5"
        >
          {message.text && (
            <div className={`mb-4 p-4 rounded ${message.type === "success" ? "bg-green-500/20" : "bg-red-500/20"}`}>
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block mb-1">Home Phone Number</label>
              <input
                name="homePhone"
                type="tel"
                value={formData.homePhone}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Cell Phone Number</label>
              <input
                name="cellPhone"
                type="tel"
                value={formData.cellPhone}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block mb-1">Street</label>
              <input
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1">ZIP</label>
              <input
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block mb-1">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none text-white"
                required
                disabled={statesLoading}
              >
                <option value="" className="text-gray-800">
                  {statesLoading ? "Loading states..." : "Select State"}
                </option>
                {states.map((state) => (
                  <option className="text-gray-800" key={state.abbreviation} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none text-white"
                required
                disabled={!formData.state || citiesLoading}
              >
                <option value="" className="text-gray-800">
                  {!formData.state ? "Select State First" : citiesLoading ? "Loading cities..." : "Select City"}
                </option>
                {cities.map((city) => (
                  <option className="text-gray-800" key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-1">How many years of Truck Driving experience?</label>
            <input
              name="experience"
              type="number"
              min="0"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block mb-1">At least 21 years old</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="age21"
                    value="Yes"
                    className="accent-blue-600"
                    checked={formData.age21 === "Yes"}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="age21"
                    value="No"
                    className="accent-blue-600"
                    checked={formData.age21 === "No"}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="block mb-1">Currently serving or a military veteran?</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="military"
                    value="Yes"
                    className="accent-blue-600"
                    checked={formData.military === "Yes"}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="military"
                    value="No"
                    className="accent-blue-600"
                    checked={formData.military === "No"}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-1">How many moving violations have you had in the last 5 years?</label>
            <input
              name="violations"
              type="number"
              min="0"
              value={formData.violations}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block mb-1">How many accidents in total did you have in the last 3 years?</label>
            <input
              name="accidents"
              type="number"
              min="0"
              value={formData.accidents}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-white rounded px-3 py-2 outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block mb-1">Have you ever been charged/convicted of a DUI/OWI?</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="dui"
                    value="Yes"
                    className="accent-blue-600"
                    checked={formData.dui === "Yes"}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="dui"
                    value="No"
                    className="accent-blue-600"
                    checked={formData.dui === "No"}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-1">Have you had any CITATIONS in the last 5 years?</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="citations"
                    value="Yes"
                    className="accent-blue-600"
                    checked={formData.citations === "Yes"}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="citations"
                    value="No"
                    className="accent-blue-600"
                    checked={formData.citations === "No"}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-1">Upload your CV / Resume here</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full text-white file:bg-blue file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:mr-4 file:cursor-pointer"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block mb-1">Select and Upload your Documents</label>
            <div className="flex flex-wrap gap-4 mb-2">
              {documents.map((doc, index) => (
                <span key={index} className="text-sm bg-blue/20 px-2 py-1 rounded">
                  {doc.name}
                </span>
              ))}
            </div>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleFileChange}
              className="w-full text-white file:bg-blue file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:mr-4 file:cursor-pointer"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-1">How did you hear about us?</label>
            <div className="flex flex-col gap-2">
              {hearAboutUs.map((opt) => (
                <label key={opt} className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="hearAbout"
                    value={opt}
                    className="accent-blue-600"
                    checked={formData.hearAbout === opt}
                    onChange={handleInputChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-8 w-full bg-blue hover:bg-blue-700 text-white font-bold py-3 rounded transition ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  )
}

export default DriverForm
