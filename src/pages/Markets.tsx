import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Filter, Map, List } from "lucide-react";
import { Link } from "react-router-dom";

interface Market {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: string;
  features: string[];
  isOpen: boolean;
}

// Market data from wochenmarkt-deutschland.de
const marketData: Market[] = [
  // Berlin
  {
    id: "1",
    name: "Winterfeldtmarkt",
    address: "Winterfeldtplatz",
    city: "Berlin",
    postalCode: "10781",
    openingHours: "Mi 8-14, Sa 8-16",
    features: ["Bio", "International", "Streetfood"],
    isOpen: true
  },
  {
    id: "2",
    name: "Kollwitzplatz",
    address: "Kollwitzplatz",
    city: "Berlin", 
    postalCode: "10405",
    openingHours: "Do 12-18, Sa 9-16",
    features: ["Bio", "Kunsthandwerk", "Regional"],
    isOpen: false
  },
  {
    id: "3",
    name: "Maybachufer",
    address: "Maybachufer, Neukölln",
    city: "Berlin",
    postalCode: "12047",
    openingHours: "Di, Fr 11-18:30",
    features: ["International", "Großmarkt", "Streetfood"],
    isOpen: true
  },
  {
    id: "4",
    name: "Boxhagener Platz",
    address: "Boxhagener Platz",
    city: "Berlin",
    postalCode: "10245",
    openingHours: "Sa 9-15:30",
    features: ["Bio", "Regional", "Produkte", "Imbisse"],
    isOpen: false
  },
  {
    id: "5",
    name: "Arkonaplatz",
    address: "Arkonaplatz",
    city: "Berlin",
    postalCode: "10435",
    openingHours: "Fr 12-19",
    features: ["Feinkost", "Lokal"],
    isOpen: true
  },
  {
    id: "6",
    name: "Mexikoplatz",
    address: "Mexikoplatz",
    city: "Berlin",
    postalCode: "14163",
    openingHours: "Sa 9-15",
    features: ["Bio", "Kunsthandwerk", "Dorf-Atmosphäre"],
    isOpen: false
  },
  {
    id: "7",
    name: "Karl-August-Platz",
    address: "Karl-August-Platz",
    city: "Berlin",
    postalCode: "10625",
    openingHours: "Mi 8-13, Sa 8-14",
    features: ["Blumen", "Gemüse", "Feinkost"],
    isOpen: true
  },
  {
    id: "8",
    name: "DIE DICKE LINDA",
    address: "Kranoldplatz, Neukölln",
    city: "Berlin",
    postalCode: "12051",
    openingHours: "Sa 10-16",
    features: ["Regional", "Bio", "Musik", "Streetfood"],
    isOpen: false
  },
  // Hamburg
  {
    id: "9",
    name: "Isemarkt",
    address: "Isestraße/Hoheluft",
    city: "Hamburg",
    postalCode: "20144",
    openingHours: "Di, Fr 8:30-14",
    features: ["Großer Europas", "Regional", "Bio"],
    isOpen: true
  },
  {
    id: "10",
    name: "Großneumarkt",
    address: "Großneumarkt",
    city: "Hamburg",
    postalCode: "20354",
    openingHours: "Mi, Sa 8:30-13:30",
    features: ["Historischer Stadtmarkt"],
    isOpen: false
  },
  {
    id: "11",
    name: "Fischmarkt",
    address: "Große Elbstraße 9",
    city: "Hamburg",
    postalCode: "22767",
    openingHours: "So 5-9:30",
    features: ["Kultmarkt", "Fisch", "Musik"],
    isOpen: true
  },
  {
    id: "12",
    name: "Goldbekmarkt",
    address: "Goldbekplatz",
    city: "Hamburg",
    postalCode: "22303",
    openingHours: "Di, Do, Sa 8:30-13",
    features: ["Regional", "Bio"],
    isOpen: false
  },
  {
    id: "13",
    name: "Billstedt",
    address: "Möllner Landstraße",
    city: "Hamburg",
    postalCode: "22111",
    openingHours: "Di 9-13, Fr 9-13",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  // München
  {
    id: "14",
    name: "Viktualienmarkt",
    address: "Viktualienmarkt",
    city: "München",
    postalCode: "80331",
    openingHours: "Mo-Sa 8-20",
    features: ["Traditionsmarkt", "Regional", "Produkte"],
    isOpen: true
  },
  {
    id: "15",
    name: "Josephsplatz",
    address: "Josephsplatz",
    city: "München",
    postalCode: "80798",
    openingHours: "Di 12-18",
    features: ["Bio", "Regional"],
    isOpen: false
  },
  {
    id: "16",
    name: "Mariahilfplatz",
    address: "Mariahilfplatz",
    city: "München",
    postalCode: "81541",
    openingHours: "Sa 7-13",
    features: ["Groß", "Bauernmarkt"],
    isOpen: true
  },
  {
    id: "17",
    name: "Rosenkavaliersplatz",
    address: "Rosenkavaliersplatz",
    city: "München",
    postalCode: "81925",
    openingHours: "Do 8-18",
    features: ["Regional", "Vielfalt"],
    isOpen: false
  },
  {
    id: "18",
    name: "Kirchplatz",
    address: "Kirchplatz",
    city: "München",
    postalCode: "81543",
    openingHours: "Do 8-13",
    features: ["Nachbarschaftsmarkt"],
    isOpen: true
  },
  // Köln
  {
    id: "19",
    name: "Severinshof",
    address: "Severinshof",
    city: "Köln",
    postalCode: "50678",
    openingHours: "Di, Fr 8-14",
    features: ["Bio", "Regional"],
    isOpen: true
  },
  {
    id: "20",
    name: "Rudolfplatz",
    address: "Rudolfplatz",
    city: "Köln",
    postalCode: "50674",
    openingHours: "Mi 10-18, Sa",
    features: ["Bio", "Kunsthandwerk"],
    isOpen: false
  },
  {
    id: "21",
    name: "Münster Platz",
    address: "Münster Platz",
    city: "Köln",
    postalCode: "50733",
    openingHours: "Do 8-14",
    features: ["Bio", "Fleisch"],
    isOpen: true
  },
  // Frankfurt
  {
    id: "22",
    name: "Schillerplatz",
    address: "Schillerplatz",
    city: "Frankfurt",
    postalCode: "60313",
    openingHours: "Fr 7:30-18:30",
    features: ["Brotstand", "Fleisch", "International"],
    isOpen: true
  },
  {
    id: "23",
    name: "Berlinerhof Wochenmarkt",
    address: "Berlinerhof",
    city: "Frankfurt",
    postalCode: "60311",
    openingHours: "Di, Sa 8-16",
    features: ["Regional", "Bio"],
    isOpen: false
  },
  {
    id: "24",
    name: "Salzgasse",
    address: "Salzgasse",
    city: "Frankfurt",
    postalCode: "60311",
    openingHours: "Sa 8-16",
    features: ["Flohmarkt", "Regional"],
    isOpen: true
  },
  // Stuttgart
  {
    id: "25",
    name: "Großmarkthalle",
    address: "Großmarkthalle",
    city: "Stuttgart",
    postalCode: "70315",
    openingHours: "Di, Do, Sa",
    features: ["Großmarkthalle"],
    isOpen: false
  },
  {
    id: "26",
    name: "Markthalle",
    address: "Markthalle",
    city: "Stuttgart",
    postalCode: "70173",
    openingHours: "Mo-Sa",
    features: ["Markthalle"],
    isOpen: true
  },
  {
    id: "27",
    name: "Marienplatz",
    address: "Marienplatz",
    city: "Stuttgart",
    postalCode: "70178",
    openingHours: "Mi 10-18",
    features: ["Bio", "Regional"],
    isOpen: false
  },
  {
    id: "28",
    name: "Wilhelmsplatz",
    address: "Wilhelmsplatz",
    city: "Stuttgart",
    postalCode: "70182",
    openingHours: "Fr 8-13",
    features: ["Regional", "Bio"],
    isOpen: true
  },
  {
    id: "29",
    name: "Marktplatz Cannstatt",
    address: "Marktplatz Cannstatt",
    city: "Stuttgart",
    postalCode: "70372",
    openingHours: "Di, Do, Sa",
    features: ["Stadtteilmarkt"],
    isOpen: false
  },
  // Leipzig
  {
    id: "30",
    name: "Diezellshofer",
    address: "Diezellshofer",
    city: "Leipzig",
    postalCode: "04317",
    openingHours: "Do 8-13",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "31",
    name: "Markgrafenstraße",
    address: "Markgrafenstraße",
    city: "Leipzig",
    postalCode: "04109",
    openingHours: "Mi, Sa 8-16",
    features: ["Regional", "Bio"],
    isOpen: false
  },
  {
    id: "32",
    name: "Inh Zentrum Grünau",
    address: "Zentrum Grünau",
    city: "Leipzig",
    postalCode: "04207",
    openingHours: "Do 8-16",
    features: ["Zentral", "Regional"],
    isOpen: true
  },
  {
    id: "33",
    name: "Wilhelm Külz-Ring",
    address: "Wilhelm Külz-Ring",
    city: "Leipzig",
    postalCode: "04109",
    openingHours: "Mi, Sa 8-16",
    features: ["Regional", "Bio"],
    isOpen: false
  },
  // Essen
  {
    id: "34",
    name: "Rüttenscheid",
    address: "Rüttenscheid",
    city: "Essen",
    postalCode: "45130",
    openingHours: "Di, Do, Sa",
    features: ["Vielfalt", "Bio"],
    isOpen: true
  },
  {
    id: "35",
    name: "Altenessen",
    address: "Altenessen",
    city: "Essen",
    postalCode: "45326",
    openingHours: "Mi, Do, Sa",
    features: ["Zentral", "Regional"],
    isOpen: false
  },
  {
    id: "36",
    name: "Altenessen Markt",
    address: "Altenessen Markt",
    city: "Essen",
    postalCode: "45326",
    openingHours: "Mi, Do, Sa",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  // Dortmund
  {
    id: "37",
    name: "Markthof",
    address: "Markthof",
    city: "Dortmund",
    postalCode: "44135",
    openingHours: "Mi, Fr 7-13",
    features: ["Regional"],
    isOpen: false
  },
  {
    id: "38",
    name: "Mengede",
    address: "Mengede",
    city: "Dortmund",
    postalCode: "44359",
    openingHours: "Mi, Fr 7-13",
    features: ["Regional"],
    isOpen: true
  },
  {
    id: "39",
    name: "Mallinkckrodt-straße",
    address: "Mallinkckrodt-straße",
    city: "Dortmund",
    postalCode: "44147",
    openingHours: "Di, Fr 8-13",
    features: ["Regional"],
    isOpen: false
  },
  {
    id: "40",
    name: "Hausmarkt",
    address: "Hausmarkt",
    city: "Dortmund",
    postalCode: "44139",
    openingHours: "Mi, Sa 7-13",
    features: ["Regional"],
    isOpen: true
  },
  // Dresden
  {
    id: "41",
    name: "Fürstenhof",
    address: "Fürstenhof",
    city: "Dresden",
    postalCode: "01307",
    openingHours: "Di 8-18, Fr",
    features: ["Biothek", "Bio"],
    isOpen: false
  },
  {
    id: "42",
    name: "Bautzner",
    address: "Bautzner",
    city: "Dresden",
    postalCode: "01099",
    openingHours: "Di, Fr 8-18, Sa",
    features: ["Regional", "Bio"],
    isOpen: true
  },
  {
    id: "43",
    name: "Albertstadt",
    address: "Albertstadt",
    city: "Dresden",
    postalCode: "01099",
    openingHours: "Do 8-13",
    features: ["Stadtteilmarkt"],
    isOpen: false
  },
  // Düsseldorf
  {
    id: "44",
    name: "Carlsplatz",
    address: "Carlsplatz",
    city: "Düsseldorf",
    postalCode: "40213",
    openingHours: "Mo-Fr 8:00-18:00, Sa 8:00-16:00",
    features: ["Traditional", "Regional", "Bio"],
    isOpen: true
  },
  {
    id: "45",
    name: "Rheinischer Bauernmarkt (Pempelfort)",
    address: "Pempelforter Straße",
    city: "Düsseldorf",
    postalCode: "40211",
    openingHours: "Mi 8:30-13:00, Sa 8:30-13:30",
    features: ["Bauernmarkt", "Regional"],
    isOpen: false
  },
  {
    id: "46",
    name: "Hermannplatz (Fingern)",
    address: "Hermannplatz",
    city: "Düsseldorf",
    postalCode: "40233",
    openingHours: "Sa 7:00-13:00",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "47",
    name: "Friedensplätzen (Unterbilk)",
    address: "Friedensplätzen",
    city: "Düsseldorf",
    postalCode: "40219",
    openingHours: "Di 8:00-13:00, Fr 9:00-17:00",
    features: ["Bio", "Regional"],
    isOpen: false
  },
  {
    id: "48",
    name: "Marktplatz (Benrath)",
    address: "Benrather Marktplatz",
    city: "Düsseldorf",
    postalCode: "40597",
    openingHours: "Mo-Fr 8:00-18:00, Sa 8:00-14:00",
    features: ["Traditional", "Regional"],
    isOpen: true
  },
  {
    id: "49",
    name: "Neusser Tor (Gerresheim)",
    address: "Neusser Tor",
    city: "Düsseldorf",
    postalCode: "40625",
    openingHours: "Di und Do 8:00-17:00, Sa 8:00-14:00",
    features: ["Stadtteilmarkt"],
    isOpen: false
  },
  {
    id: "50",
    name: "Marktplatz (Kaiserswerth)",
    address: "Kaiserswerther Marktplatz",
    city: "Düsseldorf",
    postalCode: "40489",
    openingHours: "Mi und Sa 8:00-14:00",
    features: ["Historic", "Regional"],
    isOpen: true
  },
  {
    id: "51",
    name: "Barbarossaplatz (Oberkassel)",
    address: "Barbarossaplatz",
    city: "Düsseldorf",
    postalCode: "40545",
    openingHours: "Di und Fr 7:00-18:00",
    features: ["Bio", "International"],
    isOpen: false
  },
  {
    id: "52",
    name: "Lessingplatz (Oberbilk)",
    address: "Lessingplatz",
    city: "Düsseldorf",
    postalCode: "40227",
    openingHours: "Do 8:00-13:30",
    features: ["Neighborhood"],
    isOpen: true
  },
  {
    id: "53",
    name: "Gertrudisplatz Östetelbekhausen",
    address: "Gertrudisplatz",
    city: "Düsseldorf",
    postalCode: "40225",
    openingHours: "Di und Fr 8:00-18:00, Sa 8:00-14:00",
    features: ["Regional", "Bio"],
    isOpen: false
  },
  // Bremen
  {
    id: "54",
    name: "Wochenmarkt Findorff",
    address: "Neukirchstraße 45",
    city: "Bremen",
    postalCode: "28215",
    openingHours: "Di, Do und Sa 8:00-13:00, Sa 8:00-14:00",
    features: ["Regional", "Bio"],
    isOpen: true
  },
  {
    id: "55",
    name: "Wochenmarkt Gröpelingen",
    address: "Bürgermeister-Ehlers-Platz, Pastorenweg",
    city: "Bremen",
    postalCode: "28239",
    openingHours: "Di, Do, Sa 8:00-13:00",
    features: ["Stadtteilmarkt"],
    isOpen: false
  },
  {
    id: "56",
    name: "Wochenmarkt Osterholz-Scharmbeck",
    address: "Regine-Hildebrandt-Platz",
    city: "Bremen",
    postalCode: "28239",
    openingHours: "Mi, Fr 8:00-13:00",
    features: ["Regional"],
    isOpen: true
  },
  {
    id: "57",
    name: "Bauernmarkt Fangelm",
    address: "Fangelm",
    city: "Bremen",
    postalCode: "28195",
    openingHours: "Fr 10:00-16:00",
    features: ["Bauernmarkt", "Bio"],
    isOpen: false
  },
  {
    id: "58",
    name: "Blumenmarkt Unser-Lieben-Frauen",
    address: "Unser Lieben Frauen Kirchhof",
    city: "Bremen",
    postalCode: "28195",
    openingHours: "Mo-Fr 8:00-14:00, Sa 8:00-15:00",
    features: ["Blumen", "Pflanzen"],
    isOpen: true
  },
  {
    id: "59",
    name: "Wochenmarkt Domshof",
    address: "Domshof",
    city: "Bremen",
    postalCode: "28195",
    openingHours: "Mo-Fr 8:00-14:00, Sa 8:00-15:00",
    features: ["Historic", "Traditional"],
    isOpen: false
  },
  {
    id: "60",
    name: "Wochenmarkt Walle",
    address: "Wartburgstraße 12",
    city: "Bremen",
    postalCode: "28217",
    openingHours: "Di, Do, Sa 8:00-13:00",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "61",
    name: "Wochenmarkt Horn-Lehe",
    address: "Ecke Robert-Bunsen-Straße/Wilhelm-Raabe-Straße",
    city: "Bremen",
    postalCode: "28359",
    openingHours: "Do, Sa 8:00-13:00",
    features: ["Regional"],
    isOpen: false
  },
  {
    id: "62",
    name: "Wochenmarkt Steintor (Zegenmarkt)",
    address: "Vor dem Steintor 82",
    city: "Bremen",
    postalCode: "28203",
    openingHours: "Di, Fr 8:00-18:00, Sa 8:00-14:00",
    features: ["Urban", "International"],
    isOpen: true
  },
  {
    id: "63",
    name: "Wochenmarkt Blödelt",
    address: "Einkaufszentrum Blödelt, Max-Säume",
    city: "Bremen",
    postalCode: "28279",
    openingHours: "Fr 8:00-13:00",
    features: ["Shopping Center"],
    isOpen: false
  },
  {
    id: "64",
    name: "Wochenmarkt Osterholz",
    address: "Schweizer Eck (Weser)",
    city: "Bremen",
    postalCode: "28325",
    openingHours: "Di, Do, Sa 8:00-13:00",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "65",
    name: "Bauernmarkt Steglitzstraße",
    address: "Steglitzstraße 56",
    city: "Bremen",
    postalCode: "28209",
    openingHours: "Do 10:00-16:00",
    features: ["Bauernmarkt"],
    isOpen: false
  },
  {
    id: "66",
    name: "Wochenmarkt Schwachhausen (Bürgerpark)",
    address: "Benquestraße",
    city: "Bremen",
    postalCode: "28209",
    openingHours: "Mi 7:30-13:00, Sa 7:30-13:30",
    features: ["Park Setting"],
    isOpen: true
  },
  {
    id: "67",
    name: "Wochenmarkt Schwachhausen (H.-J.-Weier-Allee)",
    address: "Ecke H.-J.-Weier-Allee/Hans Kausen",
    city: "Bremen",
    postalCode: "28211",
    openingHours: "Fr und Sa 8:00-13:00",
    features: ["Neighborhood"],
    isOpen: false
  },
  {
    id: "68",
    name: "Wochenmarkt Großer Kurfürst",
    address: "Eislebener Straße 66",
    city: "Bremen",
    postalCode: "28329",
    openingHours: "Fr 8:00-13:00",
    features: ["Local"],
    isOpen: true
  },
  {
    id: "69",
    name: "Wochenmarkt Vahr",
    address: "Berliner Freiheit",
    city: "Bremen",
    postalCode: "28327",
    openingHours: "Di, Do, Sa 8:00-13:30",
    features: ["Shopping Area"],
    isOpen: false
  },
  {
    id: "70",
    name: "Wochenmarkt Borgfeld",
    address: "Platz zur Linde",
    city: "Bremen",
    postalCode: "28357",
    openingHours: "Mi, Sa 8:00-13:00",
    features: ["Village Setting"],
    isOpen: true
  },
  {
    id: "71",
    name: "Wochenmarkt Arbergen",
    address: "Dorfplatz, Colehornstraße 36",
    city: "Bremen",
    postalCode: "28307",
    openingHours: "Fr 8:00-13:00",
    features: ["Rural"],
    isOpen: false
  },
  {
    id: "72",
    name: "Wochenmarkt Hastedt",
    address: "Ecke Bei den drei Pfahlen, Hermine-Berthold-Straße",
    city: "Bremen",
    postalCode: "28199",
    openingHours: "Fr 8:00-13:00",
    features: ["Community"],
    isOpen: true
  },
  {
    id: "73",
    name: "Wochenmarkt Neustadt (Kornstraße)",
    address: "Ecke Am Sodenmatt/Berntalstr.",
    city: "Bremen",
    postalCode: "28199",
    openingHours: "Mi, Sa 8:00-13:00, Fr 7:00-13:30",
    features: ["Traditional"],
    isOpen: false
  },
  {
    id: "74",
    name: "Wochenmarkt Neustadt (Delmestraße)",
    address: "Ecke Delmestraße, Papedistraße",
    city: "Bremen",
    postalCode: "28199",
    openingHours: "Mo-Fr 8:00-13:00, Sa 8:00-14:00",
    features: ["Central"],
    isOpen: true
  },
  {
    id: "75",
    name: "Wochenmarkt Neustadt (Gottfried-Menken-Straße)",
    address: "Gottfried-Menken-Straße",
    city: "Bremen",
    postalCode: "28201",
    openingHours: "Fr und Sa 8:00-13:00",
    features: ["Residential"],
    isOpen: false
  },
  {
    id: "76",
    name: "Wochenmarkt Habenhausen",
    address: "Anna-Seghers-Straße",
    city: "Bremen",
    postalCode: "28279",
    openingHours: "Do 15:00-18:00",
    features: ["Afternoon Market"],
    isOpen: true
  },
  {
    id: "77",
    name: "Wochenmarkt Obervieland",
    address: "Kattenturner Marktplatz, Anna-Stegmann-Str.",
    city: "Bremen",
    postalCode: "28277",
    openingHours: "Mi, Fr 8:00-13:00",
    features: ["Suburban"],
    isOpen: false
  },
  {
    id: "78",
    name: "Wochenmarkt Woltmershausen",
    address: "Pusdorfer Marktplatz",
    city: "Bremen",
    postalCode: "28197",
    openingHours: "Di, Do, Sa 8:00-13:00",
    features: ["Harbor Area"],
    isOpen: true
  },
  {
    id: "79",
    name: "Wochenmarkt Lesum",
    address: "Hindenburgstraße",
    city: "Bremen",
    postalCode: "28717",
    openingHours: "Fr 8:00-13:00",
    features: ["North Bremen"],
    isOpen: false
  },
  {
    id: "80",
    name: "Wochenmarkt Marßel",
    address: "Stockholmer Straße",
    city: "Bremen",
    postalCode: "28719",
    openingHours: "Fr 8:00-13:00",
    features: ["Local Market"],
    isOpen: true
  },
  {
    id: "81",
    name: "Wochenmarkt Vegesack",
    address: "Am Sedanplatz",
    city: "Bremen",
    postalCode: "28757",
    openingHours: "Mi, Sa 8:00-13:00, Sa 8:00-13:30",
    features: ["Coastal", "Traditional"],
    isOpen: false
  }
];

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [filteredMarkets, setFilteredMarkets] = useState(marketData);

  const handleSearch = () => {
    let filtered = marketData;

    // Filter by search term (city, postal code, or market name)
    if (searchTerm.trim()) {
      filtered = filtered.filter(market => 
        market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.postalCode.includes(searchTerm.trim()) ||
        market.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by weekday
    if (selectedDay) {
      const dayMap: { [key: string]: string[] } = {
        "mo": ["Mo", "Montag"],
        "di": ["Di", "Dienstag"],
        "mi": ["Mi", "Mittwoch"],
        "do": ["Do", "Donnerstag"],
        "fr": ["Fr", "Freitag"],
        "sa": ["Sa", "Samstag"],
        "so": ["So", "Sonntag"]
      };
      
      const searchDays = dayMap[selectedDay] || [];
      filtered = filtered.filter(market => 
        searchDays.some(day => market.openingHours.includes(day))
      );
    }

    setFilteredMarkets(filtered);
  };

  // Auto-search when search term or day changes
  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    // Auto-search after short delay
    setTimeout(() => {
      let filtered = marketData;
      
      if (value.trim()) {
        filtered = filtered.filter(market => 
          market.name.toLowerCase().includes(value.toLowerCase()) ||
          market.city.toLowerCase().includes(value.toLowerCase()) ||
          market.postalCode.includes(value.trim()) ||
          market.address.toLowerCase().includes(value.toLowerCase())
        );
      }

      if (selectedDay) {
        const dayMap: { [key: string]: string[] } = {
          "mo": ["Mo", "Montag"],
          "di": ["Di", "Dienstag"],
          "mi": ["Mi", "Mittwoch"],
          "do": ["Do", "Donnerstag"],
          "fr": ["Fr", "Freitag"],
          "sa": ["Sa", "Samstag"],
          "so": ["So", "Sonntag"]
        };
        
        const searchDays = dayMap[selectedDay] || [];
        filtered = filtered.filter(market => 
          searchDays.some(day => market.openingHours.includes(day))
        );
      }

      setFilteredMarkets(filtered);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-green-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              MarktAtlas
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Startseite
              </Link>
              <Link to="/markets" className="text-primary font-medium">
                Märkte
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-8">
            Alle Wochenmärkte in deiner Nähe
          </h1>
          
          <div className="bg-card rounded-2xl shadow-card p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Stadt, PLZ oder Marktname eingeben..."
                  value={searchTerm}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedDay}
                  onChange={(e) => {
                    setSelectedDay(e.target.value);
                    // Trigger search immediately when day selection changes
                    setTimeout(() => {
                      let filtered = marketData;
                      
                      if (searchTerm.trim()) {
                        filtered = filtered.filter(market => 
                          market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          market.postalCode.includes(searchTerm.trim()) ||
                          market.address.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                      }

                      if (e.target.value) {
                        const dayMap: { [key: string]: string[] } = {
                          "mo": ["Mo", "Montag"],
                          "di": ["Di", "Dienstag"],
                          "mi": ["Mi", "Mittwoch"],
                          "do": ["Do", "Donnerstag"],
                          "fr": ["Fr", "Freitag"],
                          "sa": ["Sa", "Samstag"],
                          "so": ["So", "Sonntag"]
                        };
                        
                        const searchDays = dayMap[e.target.value] || [];
                        filtered = filtered.filter(market => 
                          searchDays.some(day => market.openingHours.includes(day))
                        );
                      }

                      setFilteredMarkets(filtered);
                    }, 100);
                  }}
                  className="h-12 px-4 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Wochentag wählen</option>
                  <option value="mo">Montag</option>
                  <option value="di">Dienstag</option>
                  <option value="mi">Mittwoch</option>
                  <option value="do">Donnerstag</option>
                  <option value="fr">Freitag</option>
                  <option value="sa">Samstag</option>
                  <option value="so">Sonntag</option>
                </select>
                <Button onClick={handleSearch} size="lg" className="h-12">
                  <Search className="w-5 h-5 mr-2" />
                  Suchen
                </Button>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4 mr-2" />
                  Liste
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="w-4 h-4 mr-2" />
                  Karte
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredMarkets.length} Märkte gefunden
            </p>
          </div>

          {viewMode === "list" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMarkets.map((market) => (
                <Card key={market.id} className="shadow-soft hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{market.name}</CardTitle>
                      {market.isOpen && (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          Geöffnet
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {market.address}, {market.postalCode} {market.city}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{market.openingHours}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {market.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to={`/markets/${market.id}`}>
                      <Button variant="green" size="sm" className="w-full">
                        Details anzeigen
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Kartenansicht wird geladen...
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Markets;