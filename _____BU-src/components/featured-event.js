// import React, { Component } from 'react'

// /**
//  * Render a featured event (fullwidth) with image, title, link and content.
//  *
//  * event = {
//  *     dateStart: '2019-02-15',
//  *     dateEnd: '2019-02-17',
//  *     title: 'Steakfestijn KCVV Elewijt',
//  *     link: '/events/steak-2019',
//  *     image: pictureSteak2019,
//  *     text:
//  *       '<p>En jawel hoor!  Ook dit seizoen wordt het weer smullen van onze heerlijke steaks met frietjes. Hartverwarmend  in deze grille wintertijden.  Onze KCVV Angels mobiliseren daarom een volledig team om jullie vanaf vrijdag 15 februari in de watten te leggen. Stip het steakfestijn dus aan in jullie agenda en we zien jullie dan.</p>',
//  *   }
//  */
// class FeaturedEvent extends Component {
//   render() {
//     const { event, key = null } = this.props

//     return (
//       <article
//         className={
//           'small-12' +
//           ' cell featured__news-item article-card featured__event-item'
//         }
//         key={key}
//       >
//         <div className={'posts__item posts__item--card card posts__event'}>
//           <figure className="posts__thumb">
//             <a href={event.event.link}>
//               <img src={event.event.image} alt={event.event.title} />
//             </a>
//           </figure>
//           <div className="posts__inner card__content">
//             <time
//               className={'posts__date'}
//               dateTime={`${event.event.dateStart}/${event.event.dateEnd}`}
//             >
//               {event.event.dateStart} - {event.event.dateEnd}
//             </time>
//             <h6 className="posts__title">
//               <a
//                 href={event.event.link}
//                 dangerouslySetInnerHTML={{
//                   __html: event.event.title,
//                 }}
//               />
//             </h6>
//             <div
//               className="posts__excerpt"
//               dangerouslySetInnerHTML={{
//                 __html: event.event.text,
//               }}
//             />
//           </div>
//         </div>
//       </article>
//     )
//   }
// }

// export default FeaturedEvent
