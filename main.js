async function getWatchHistory() {
  const appElement = document.querySelector("#app");
  const pageData = JSON.parse(appElement.getAttribute("data-page"));
  const historySource = pageData.props.history;
  const xsrfToken = document.cookie.match(/XSRF-TOKEN=([^;]+)/)[1]; // Get the XSRF-TOKEN from cookies for the headers

  let watchTimeData = [];
  try {
    // Site retrieves extra data in a request after loading, replicating this
    const response = await fetch(window.location.href, {
      method: "GET",
      headers: {
        Accept: "text/html, application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Inertia": "true",
        "X-Inertia-Version": pageData.version,
        "X-Inertia-Partial-Data": "watchTime",
        "X-Inertia-Partial-Component": pageData.component,
        "X-XSRF-TOKEN": decodeURIComponent(xsrfToken),
      },
    });
    const watchTimeResponse = await response.json();
    watchTimeData = watchTimeResponse.props.watchTime;
  } catch (error) {
    console.error("Failed to fetch detailed watch time.", error);
    return;
  }

  const items = watchTimeData
    .map((watchTimeInfo) => {
      const mainInfo = historySource[watchTimeInfo.id];

      return {
        id: watchTimeInfo.id,
        date_watched: watchTimeInfo.lastWatchedAt,
        watch_secs: watchTimeInfo.watchSecs,
        total_secs: mainInfo.length * 60,
        title: mainInfo.title.split(":")[0].trim(),
        episode_title: mainInfo.title.includes(":")
          ? mainInfo.title.split(":", 2)[1].trim()
          : null,
        description: mainInfo.description,
        episode_number: watchTimeInfo.episode || null,
        season_number: watchTimeInfo.season || null,
      };
    })
    .filter((item) => item !== null); // Filter out any null items

  const result = {
    items: items,
  };

  console.log(JSON.stringify(result, null, 2));
  return result;
}

getWatchHistory();
