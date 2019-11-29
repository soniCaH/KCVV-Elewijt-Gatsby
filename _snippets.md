# Featured player

## Query

```
featuredPlayer: nodePlayer(field_firstname: { eq: "Nick" }) {
  field_firstname
  field_lastname
  field_shirtnumber
  field_stats_games
  field_position
  field_stats_cleansheets
  field_stats_goals
  field_stats_cards_yellow
  field_stats_cards_red
  relationships {
    field_image {
      localFile {
        url
      }
    }
  }
}
```

## Code

```
const { featuredPlayer = null } = data


...

{featuredPlayer && (
  <article className={'medium-6 large-12 cell card'}>
    <header className={'card__header'}>
      <h4>Speler van de week</h4>
    </header>
    <PlayerFeatured player={featuredPlayer} />
  </article>
)}
```

# Preseason

## Query

```
preseason: file(name: { eq: "preseason" }) {
  childImageSharp {
    fluid(maxWidth: 1680, quality: 75, cropFocus: ATTENTION) {
      base64
      aspectRatio
      tracedSVG
      aspectRatio
      src
      srcSet
      srcWebp
      srcSetWebp
      sizes
    }
  }
}
```

## Code

```
<section className="grid-container site-content">
  <div className="grid-x grid-margin-x">
    <section className={'cell large-12 featured-article'}>
      <CardImage
        title="Voorbereidings- en bekerwedstrijden"
        localFile={data.preseason}
        link="/games"
        metadata={false}
      />
    </section>
  </div>
</section>
```

# Featured transfers

## Query
```
featuredTransfers: allNodeArticle(
  filter: {
    relationships: {
      field_tags: { elemMatch: { name: { eq: "Transfernieuws" } } }
    }
    status: { eq: true }
    promote: { eq: true }
  }
  sort: { fields: created, order: DESC }
  limit: 4
) {
  edges {
    node {
      id
      path {
        alias
      }
      created(formatString: "D/M/YYYY")
      title
      promote
      status
      field_featured
      body {
        value
        format
        processed
        summary
      }
      relationships {
        field_media_article_image {
          ...ArticleImage
        }
        field_tags {
          name
          path {
            alias
          }
        }
      }
    }
  }
}
```

## Code

```
const linkCTA = (
  <Link to="/category/transfernieuws" className={'btn btn--arrow'}>
    Check alle transfernieuws
  </Link>
)

...

<section className={'grid-container full'}>
  <FeaturedSection
    articles={data.featuredTransfers}
    title="Transfernieuws"
    link={linkCTA}
  />
</section>
```

# FM2019

## Query

```
fm19: file(name: { eq: "fm19-kits" }) {
  childImageSharp {
    fluid(maxWidth: 1680, quality: 75, cropFocus: ATTENTION) {
      base64
      aspectRatio
      tracedSVG
      aspectRatio
      src
      srcSet
      srcWebp
      srcSetWebp
      sizes
    }
  }
}
```

## Code

```
{articleCount % 2 !== 0 && (
  <Card
    title="Speel nu FM 2019 met KCVV"
    localFile={data.fm19}
    link="news/2019-07-11-neem-zelf-de-leiding-van-kcvv-elewijt"
    body="Speel nu zelf coach van KCVV Elewijt met de huidige spelerskern en toekomstige transfers."
    metadata={false}
  />
)}
{articleCount % 2 === 0 && (
  <CardImage
    title="Speel nu FM 2019 met KCVV"
    localFile={data.fm19}
    link="news/2019-07-11-neem-zelf-de-leiding-van-kcvv-elewijt"
    metadata={false}
  />
)}
```
