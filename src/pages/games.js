import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import MatchWithLogo from '../components/match-with-logo'

class GamesPage extends Component {
  render() {
    const wedstrijd1 = {
      region: 'bra',
      division: 'BVZ',
      dateTime: 1564596000000,
      home: 'FC Zemst Sp',
      away: 'KCVV Elewijt',
      resultHome: '2',
      resultAway: '2',
      status: '',
      // matchDay,
      regNumberHome: '03746',
      regNumberAway: '00055',
    }
    const wedstrijd2 = {
      region: 'bra',
      division: 'BCA',
      dateTime: 1564927200000,
      home: 'KCVV Elewijt',
      away: 'Groot Dilbeek A',
      resultHome: '0',
      resultAway: '9',
      status: '',
      // matchDay,
      regNumberHome: '00055',
      regNumberAway: '06325',
    }
    const wedstrijd3 = {
      region: 'bra',
      division: 'FR',
      dateTime: 1565200800000,
      home: 'KCS Machelen',
      away: 'KCVV Elewijt',
      resultHome: '2',
      resultAway: '4',
      status: '',
      // matchDay,
      regNumberHome: '00628',
      regNumberAway: '00055',
    }
    const wedstrijd4 = {
      region: 'bra',
      division: 'FR',
      dateTime: 1565283600000,
      home: 'K GR Katelijne',
      away: 'KCVV Elewijt',
      resultHome: '1',
      resultAway: '0',
      status: '',
      // matchDay,
      regNumberHome: '03019',
      regNumberAway: '00055',
    }
    const wedstrijd5 = {
      region: 'bra',
      division: 'BCA',
      dateTime: 1565532000000,
      home: 'BOKA United A',
      away: 'KCVV Elewijt',
      resultHome: '0',
      resultAway: '9',
      status: '',
      // matchDay,
      regNumberHome: '06439',
      regNumberAway: '00055',
    }
    const wedstrijd6 = {
      region: 'bra',
      division: 'BVZ',
      dateTime: 1565719200000,
      home: 'KCVV Elewijt',
      away: 'KFC Eppegem',
      resultHome: '7',
      resultAway: '1',
      status: '',
      // matchDay,
      regNumberHome: '00055',
      regNumberAway: '04759',
    }
    const wedstrijd7 = {
      region: 'bra',
      division: 'FR',
      dateTime: 1566136800000,
      home: 'KCVV Elewijt A',
      away: 'KFC Eppegem A',
      resultHome: '',
      resultAway: '',
      status: '',
      // matchDay,
      regNumberHome: '00055',
      regNumberAway: '04759',
    }
    const wedstrijd9 = {
      region: 'bra',
      division: 'BCA',
      dateTime: 1566741600000,
      home: 'Borght-Humbeek A',
      away: 'KCVV Elewijt',
      resultHome: '',
      resultAway: '',
      status: '',
      // matchDay,
      regNumberHome: '00039',
      regNumberAway: '00055',
    }
    const wedstrijd10 = {
      region: 'bra',
      division: 'FR',
      dateTime: 1565805600000,
      home: 'Borght-Humbeek B',
      away: 'KCVV Elewijt B',
      resultHome: '5',
      resultAway: '1',
      status: '',
      // matchDay,
      regNumberHome: '00039',
      regNumberAway: '00055',
    }
    const wedstrijd11 = {
      region: 'bra',
      division: 'BVZ',
      dateTime: 1565874000000,
      home: 'KCVV Elewijt A',
      away: 'VK Weerde',
      resultHome: '6',
      resultAway: '0',
      status: '',
      // matchDay,
      regNumberHome: '00055',
      regNumberAway: '06354',
    }
    const wedstrijd12 = {
      region: 'bra',
      division: 'BCA',
      dateTime: 1566406800000,
      home: 'KCVV Elewijt A',
      away: 'Rhod.-De Hoek A',
      resultHome: '',
      resultAway: '',
      status: '',
      // matchDay,
      regNumberHome: '00055',
      regNumberAway: '00006',
    }
    const wedstrijd13 = {
      region: 'bra',
      division: 'FR',
      dateTime: 1566410400000,
      home: 'KCVV Elewijt B',
      away: 'FC Beigem B',
      resultHome: '',
      resultAway: '',
      status: '',
      // matchDay,
      regNumberHome: '00055',
      regNumberAway: '07753',
    }
    const wedstrijd14 = {
      region: 'bra',
      division: 'FR',
      dateTime: 1566410400000,
      home: 'V.O. Steenokkerzeel',
      away: 'KCVV Elewijt B',
      resultHome: '',
      resultAway: '',
      status: '',
      // matchDay,
      regNumberHome: '02660',
      regNumberAway: '00055',
    }
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />
        <div className={'games__template'}>
          <MatchWithLogo match={wedstrijd1} />
          <MatchWithLogo match={wedstrijd2} />
          <MatchWithLogo match={wedstrijd3} />
          <MatchWithLogo match={wedstrijd4} />
          <MatchWithLogo match={wedstrijd5} />
          <MatchWithLogo match={wedstrijd6} />
          <MatchWithLogo match={wedstrijd10} />
          <MatchWithLogo match={wedstrijd11} />
          <MatchWithLogo match={wedstrijd7} />
          <MatchWithLogo match={wedstrijd12} />
          <MatchWithLogo match={wedstrijd13} />
          <MatchWithLogo match={wedstrijd14} />
          <MatchWithLogo match={wedstrijd9} />
        </div>
      </Layout>
    )
  }
}

export default GamesPage
