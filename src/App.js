import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles/global.module.scss";
import axios from "axios";

import Map from "./components/Map";
import InfoContainer from "./components/InfoContainer";

function App() {
	const [data, setData] = useState(null);

	const { register, handleSubmit } = useForm({});

	const onSubmit = async (formData) => {

    const ip = formData["ip_address"]
    console.log(ip);
		updateData(ip);
	};

	const onError = (errors) => {};

  const updateData = async (ip) => {
    if (ip === undefined) {
      ip = "";
    }

    const res = await axios.get(
			`/country,city?apiKey=at_BaYbdhnJkiKQP1hGUZkcp5Osb4k4c&ipAddress=${ip}`,
			{
				headers: {
					"Allow-Control-Access-Origin": "*",
				},
			}
		);
    console.log(res.data);
		setData(res.data);
  }

  useEffect( () => {
    updateData()
  }, [])

	return (
		<>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <h1>IP Address Tracker</h1>
          <form className={styles.ipForm} onSubmit={handleSubmit(onSubmit, onError)}>
            <input
              type="text"
              placeholder="Search Domain"
              {...register("ip_address", { required: true , pattern: '\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b'})}
            ></input>
            <button type="submit">
              <img src="/images/icon-arrow.svg"></img>
            </button>
          </form>

          {data && <InfoContainer data={data} />}
        
        </div>

        {
          data &&
          <div className={styles.mapContainer}>
            <Map location={data["location"]} />
          </div>
        }

      </div>
		</>
	);
}

export default App;
