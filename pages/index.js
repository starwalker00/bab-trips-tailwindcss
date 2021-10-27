import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="container mx-auto px-5">
      <Head>
        <title>Create Next App Mine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">BAB-Trips</h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">A <a href="https://www.youtube.com/channel/UCxDZs_ltFFvn0FDHT6kmoXA">Bald and Bankrupt</a> fan blog, reviewing the geographical side of his soviet adventures.</h4>
      </section>

      <div id="articles" className="flex flex-col divide-y divide-gray-600">
        <article> 
          <div className="tg-header">
            <div className="tg-title">
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-tight md:pr-8">BAM 3</h1>
            </div>
            <div className="tg-video border-2 aspect-w-16 aspect-h-9 px-8">
            <iframe className="mx-auto"
              src="https://www.youtube.com/embed/f2d7kJPimyE" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
              </iframe>
              </div>
              <div>
                </div>
                </div>
          <p className="">
            In this video, our dear Benjamin achieves his trip on the <a href="https://en.wikipedia.org/wiki/Baikal%E2%80%93Amur_Mainline">Baikal–Amur Mainline</a>.
            As he mentionned on his video description, he visits :
          <ul className="list-inside list-disc pl-4">
            <li className="py-1">Tayshet — approximately 30k inhabitants</li>
            <li className="py-1">Severobaykalsk — approximately 20k inhabitants</li>
            <li className="py-1">Novi Uoyan — approximately 3k inhabitants</li>
            <li className="py-1">Tynda — approximately 30k inhabitants</li>
          </ul>
          These south siberian cities average quite low temperatures, between -10°C and 10°C in autumn (time of the video) but can easily reach -20°C in the coldest season.
          They were mainly founded in the 1970s as work settlements for workers constructing the BAM, bald mentions this at <a href="https://youtu.be/f2d7kJPimyE?t=876">14:36</a> in his video.
          The population is now declining due to unemployement and low use of the train line, for instance in Tynda, according to Wikipedia, population went from more than 60 000 to 35 000 between its best years and now.
          </p>
          <iframe className="m-auto"
          src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9189084.534616245!2d102.40249234659447!3d55.785791056288915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x5ce0601bde5e755f%3A0x75f1c37fed1dd46b!2sTayshet%2C Irkutskaya oblast'%2C Russia%2C 665001!3m2!1d55.939329199999996!2d98.0008311!4m5!1s0x5c5176c4b20a01d9%3A0xd3e2594335a17047!2sSeverobaykalsk%2C Buryatia%2C Russia!3m2!1d55.627857999999996!2d109.3149162!4m5!1s0x5c4f94e4c56c2bdf%3A0xdb6d19523516431d!2sNovy Uoyan%2C Buryatia%2C Russia%2C 671732!3m2!1d56.1393597!2d111.7247721!4m5!1s0x5c2117c3fe7d7b2b%3A0xae18d4bb2c34e795!2sTında%2C Amur Oblast%2C Russia!3m2!1d55.1438334!2d124.7413766!5e0!3m2!1sen!2sfr!4v1635339515434!5m2!1sen!2sfr"
          width="100%"
          height="450" 
          allowFullScreen="" 
          maptype="satellite"
          loading="lazy">
          </iframe>
          <p className="">
          These cities are spreaded accros four oblasts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
          <iframe width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8799854.154910251!2d98.44634535018785!3d57.420378898969936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5c5879e6fa31bc9f%3A0x103c6af52459670!2sIrkutsk Oblast%2C Russia!5e0!3m2!1sen!2sfr!4v1635347678479!5m2!1sen!2sfr" loading="lazy"></iframe>
          <iframe width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9695113.950662997!2d98.8081932799248!3d53.611816693769946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dacfb1131848fe7%3A0x103c6af52459440!2sBuryatia%2C Russia!5e0!3m2!1sen!2sfr!4v1635347717396!5m2!1sen!2sfr" loading="lazy"></iframe>
          <iframe width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9651087.647036303!2d105.97471579273609!3d53.80332316367722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5c35b1aa0b8162cf%3A0xd150d2dc718dbfb7!2sZabaykalsky Krai%2C Russia!5e0!3m2!1sen!2sfr!4v1635347806297!5m2!1sen!2sfr" loading="lazy"></iframe>
          <iframe width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9843816.510835558!2d118.32102228900683!3d52.96145792869128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e9b0b7f8a9bbe89%3A0x1045834396f95d0!2sAmur Oblast%2C Russia!5e0!3m2!1sen!2sfr!4v1635347847418!5m2!1sen!2sfr" loading="lazy"></iframe>
          </div>
          <p>
            He starts this video next to the rails in Tayshet, continuing his journey on the trans-siberian, wait no, it is not the trans-siberian line.
            He said in the previous video that he had to choose between two directions from this point :
            <ul className="list-inside list-disc pl-4">
              <li> the traditional trans-siberian railway (~1930)</li>
              <li> the lesser known and more recent BAM line (~1970)</li>
            </ul>
          <img src="/img/bam-trans.png"/>
          On this map, you can see Tayshet, where <span className="text-green-500">BAM line in green</span> and the <span className="text-red-500">trans-siberian line in red</span> cross.
          Highligted in <span className="text-yellow-500">yellow</span> are the cities Bald passes in during his journey along the BAM line.
          </p>
          <p>
            <span className="font-semibold">Lake Baikal</span> is a major attraction of the region, it is the seventh largest lake of the world and the world's deepest with a maximum depth of 1,642 m (5,387 ft). Its total area is approximately the same as the country of Belgium.
            The lake could even grow wider and deeper because it is located in an active continental rift zone.
            The landscape is arguably one the best you could find in Russia, even <a href="https://www.nytimes.com/2021/03/15/world/europe/russia-lake-baikal-tourism.html"> russian rush to it </a> when they can't leave their country.
            The mountains, topped with permanent snow blend beautifully in the fresh water, home of a unique bio-diversity ; a mix that the <a href="https://whc.unesco.org/en/list/754">UNESCO declared a World Heritage Site</a> in 1996.
          </p>
          <p>
            <img src="/img/baikal-1.jpg"/>
            Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/s/photos/baikal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </p>
          <p>
            The Lake is usually frozen from January to May.
            <img src="/img/baikal-2.jpg"/>
            Photo by <a href="https://unsplash.com/@sickle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergey Pesterev</a> on <a href="https://unsplash.com/s/photos/baikal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </p>
          <p>
            The <span className="font-semibold">Baikal–Amur Mainline</span> is an eastern railway line on which mister bald travels in this video. It runs north and parralel of the trans-siberian traditionnal line.
            The russian built the line in 1970 because they were scared of the proximity with China of the trans-siberian line that existed before. They thought that, in case of a conflict, the trans-siberian line could be easily blocked by China, preventing russian troops dispatch to the front.
            Building the line cost a lot of money since the terrain was far from welcoming, the line counts 4200+ bridges and 21 tunnels and passes through very cold areas.
          </p>
          <p>
            The main line is 4,300 km long between Tayshet and Sovetskaya Gavan. Mister Bald rode it from Tayshet to Tynda for about 2,300 km.
          </p>
          <p>
            <img src="/img/bam-1.png"/>
            <img src="/img/bam-2.jpg"/>
          </p>
        </article>
        <article className="">
          <h1>BAM TRIP 2</h1>
        </article>
        <article className="">
          <h1>BAM TRIP 1</h1>
        </article>
      </div>
    </div>
    </div>
  )
}
