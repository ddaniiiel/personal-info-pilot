
/**
 * Returns the display title for a given topic ID
 */
export const getTopicTitle = (topicId: string): string => {
  switch (topicId) {
    case 'wohnen': return 'Wohnen & Eigentum';
    case 'steuern': return 'Steuern & Recht';
    case 'versicherungen': return 'Versicherungen';
    case 'finanzen': return 'Finanzen & Versicherungen';
    case 'energie': return 'Energie & Nachhaltigkeit';
    case 'recht': return 'Recht & Compliance';
    case 'foerderungen': return 'Förderprogramme';
    case 'kinder': return 'Kinder & Bildung';
    case 'mobilitaet': return 'Mobilität';
    case 'haustiere': return 'Haustiere';
    case 'bildung': return 'Bildung & Weiterbildung';
    case 'vorsorge': return 'Vorsorge & Absicherung';
    case 'arbeit': return 'Arbeit & Karriere';
    case 'gesundheit': return 'Gesundheit & Wellness';
    case 'freizeit': return 'Freizeit & Reisen';
    default: return 'Wohnen & Eigentum';
  }
};

/**
 * Returns the subcategories for a given topic ID
 */
export const getTopicSubcategories = (topicId: string): Array<{ title: string, href: string }> => {
  const subcategories: Record<string, Array<{ title: string, href: string }>> = {
    wohnen: [
      { title: "Dokumentenmanagement", href: "#dokumente" },
      { title: "Wartung & Instandhaltung", href: "#wartung" },
      { title: "Immobilienverwaltung", href: "#immobilien" },
      { title: "Umzug & Renovation", href: "#umzug" },
      { title: "Sicherheit", href: "#sicherheit" },
      { title: "Verbrauchsmaterialien & Inventar", href: "#inventar" },
      { title: "Hausautomatisierung", href: "#smart-home" }
    ],
    energie: [
      { title: "Verbrauchsanalyse", href: "#verbrauch" },
      { title: "Einsparungspotenziale", href: "#einsparung" },
      { title: "Smart Home (Energie)", href: "#smart-home" },
      { title: "Erneuerbare Energien", href: "#erneuerbare" },
      { title: "CO2-Fußabdruck", href: "#co2" },
      { title: "Mülltrennung", href: "#muell" }
    ],
    finanzen: [
      { title: "Konten", href: "#konten" },
      { title: "Budgetplanung", href: "#budget" },
      { title: "Kreditmanagement", href: "#kredit" },
      { title: "Versicherungen", href: "#versicherungen" },
      { title: "Investments", href: "#investments" }
    ],
    steuern: [
      { title: "Steuererklärungen", href: "#erklaerungen" },
      { title: "Steueroptimierung", href: "#optimierung" },
      { title: "Rechtliches", href: "#rechtliches" }
    ],
    bildung: [
      { title: "Schulbildung", href: "#schule" },
      { title: "Weiterbildung", href: "#weiterbildung" },
      { title: "Finanzbildung", href: "#finanzbildung" }
    ],
    vorsorge: [
      { title: "Altersvorsorge", href: "#altersvorsorge" },
      { title: "Gesundheitsvorsorge", href: "#gesundheit" },
      { title: "Absicherung", href: "#absicherung" },
      { title: "Notfallplanung", href: "#notfall" }
    ],
    arbeit: [
      { title: "Berufliche Entwicklung", href: "#entwicklung" },
      { title: "Bewerbungsmanagement", href: "#bewerbung" },
      { title: "Arbeitsorganisation", href: "#organisation" }
    ],
    gesundheit: [
      { title: "Allgemeine Gesundheit", href: "#allgemein" },
      { title: "Fitness & Sport", href: "#fitness" },
      { title: "Ernährung", href: "#ernaehrung" },
      { title: "Wohlbefinden", href: "#wohlbefinden" }
    ],
    freizeit: [
      { title: "Reiseplanung", href: "#reisen" },
      { title: "Lokale Aktivitäten", href: "#lokal" },
      { title: "Veranstaltungskalender", href: "#veranstaltungen" },
      { title: "Hobbys", href: "#hobbys" }
    ],
    kinder: [
      { title: "Schule/Kita", href: "#schule" },
      { title: "Kurse & Hobbys", href: "#hobbys" },
      { title: "Entwicklung", href: "#entwicklung" }
    ],
    mobilitaet: [
      { title: "Fahrzeuge", href: "#fahrzeuge" },
      { title: "Öffentlicher Nahverkehr", href: "#oeffentlicher-verkehr" },
      { title: "Reiseplanung", href: "#reiseplanung" }
    ],
    haustiere: [
      { title: "Haustierprofile", href: "#profile" },
      { title: "Gesundheit", href: "#gesundheit" },
      { title: "Gewichtsverlauf", href: "#gewicht" },
      { title: "Fütterung", href: "#fuetterung" },
      { title: "Pflege", href: "#pflege" },
      { title: "Kosten", href: "#kosten" },
      { title: "Haustier-Sitter", href: "#sitter" }
    ],
    versicherungen: [
      { title: "Krankenversicherung", href: "#kranken" },
      { title: "Rentenversicherung", href: "#renten" },
      { title: "Hausratversicherung", href: "#hausrat" },
      { title: "Haftpflicht", href: "#haftpflicht" },
      { title: "Rechtsschutz", href: "#rechtsschutz" }
    ],
    recht: [
      { title: "Verträge", href: "#vertraege" },
      { title: "Dokumentenvorlagen", href: "#vorlagen" },
      { title: "Rechtliche Beratung", href: "#beratung" }
    ],
    foerderungen: [
      { title: "Verfügbare Programme", href: "#programme" },
      { title: "Antragsstellung", href: "#antrag" },
      { title: "Förderhistorie", href: "#historie" }
    ]
  };

  return subcategories[topicId] || [];
};
