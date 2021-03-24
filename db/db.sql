--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: individuals; Type: TABLE; Schema: public; Owner: tpl2_2021h1
--

CREATE TABLE public.individuals (
    id integer NOT NULL,
    nickname character varying(50),
    record_created timestamp without time zone NOT NULL,
    species_id integer NOT NULL
);


ALTER TABLE public.individuals OWNER TO tpl2_2021h1;

--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl2_2021h1
--

CREATE SEQUENCE public.individuals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_id_seq OWNER TO tpl2_2021h1;

--
-- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl2_2021h1
--

ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


--
-- Name: individuals_species_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl2_2021h1
--

CREATE SEQUENCE public.individuals_species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_species_id_seq OWNER TO tpl2_2021h1;

--
-- Name: individuals_species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl2_2021h1
--

ALTER SEQUENCE public.individuals_species_id_seq OWNED BY public.individuals.species_id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: tpl2_2021h1
--

CREATE TABLE public.sightings (
    id integer NOT NULL,
    seen timestamp without time zone,
    healthy boolean,
    location text,
    email text,
    record_created timestamp without time zone,
    animal_id integer NOT NULL,
    CONSTRAINT sightings_email_check CHECK ((email ~~ '%@%'::text))
);


ALTER TABLE public.sightings OWNER TO tpl2_2021h1;

--
-- Name: sightings_animal_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl2_2021h1
--

CREATE SEQUENCE public.sightings_animal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_animal_id_seq OWNER TO tpl2_2021h1;

--
-- Name: sightings_animal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl2_2021h1
--

ALTER SEQUENCE public.sightings_animal_id_seq OWNED BY public.sightings.animal_id;


--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl2_2021h1
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_id_seq OWNER TO tpl2_2021h1;

--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl2_2021h1
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: tpl2_2021h1
--

CREATE TABLE public.species (
    id integer NOT NULL,
    common_name character varying(50) NOT NULL,
    scientific_name character varying(100),
    population integer,
    status_code character varying(2),
    record_created timestamp without time zone
);


ALTER TABLE public.species OWNER TO tpl2_2021h1;

--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl2_2021h1
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_id_seq OWNER TO tpl2_2021h1;

--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl2_2021h1
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: individuals id; Type: DEFAULT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


--
-- Name: individuals species_id; Type: DEFAULT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.individuals ALTER COLUMN species_id SET DEFAULT nextval('public.individuals_species_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Name: sightings animal_id; Type: DEFAULT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.sightings ALTER COLUMN animal_id SET DEFAULT nextval('public.sightings_animal_id_seq'::regclass);


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: tpl2_2021h1
--

COPY public.individuals (id, nickname, record_created, species_id) FROM stdin;
1	Spotty	2008-05-02 00:00:00	1
2	Majestic	2008-05-02 00:00:00	2
3	Fiery Queen	2008-05-02 00:00:00	3
4	Amiga	2021-03-24 09:55:46.409357	6
5	Bellbottoms	2021-03-24 09:55:46.409357	6
6	Blondie	2021-03-24 09:55:46.409357	2
7	Boomhauer	2021-03-24 09:55:46.409357	1
8	Bootsie	2021-03-24 09:55:46.409357	5
9	Bubba	2021-03-24 09:55:46.409357	2
10	Bubblegum	2021-03-24 09:55:46.409357	6
11	Bud	2021-03-24 09:55:46.409357	6
12	Bug	2021-03-24 09:55:46.409357	5
13	Bunny	2021-03-24 09:55:46.409357	1
14	Carrot	2021-03-24 09:55:46.409357	2
15	Cheeto	2021-03-24 09:55:46.409357	4
16	Chief	2021-03-24 09:55:46.409357	4
17	Cindy Lou Who	2021-03-24 09:55:46.409357	5
18	Con	2021-03-24 09:55:46.409357	2
19	Cotton	2021-03-24 09:55:46.409357	1
20	Cumulus	2021-03-24 09:55:46.409357	1
21	Dear	2021-03-24 09:55:46.409357	3
22	Dingo	2021-03-24 09:55:46.409357	3
23	Dolly	2021-03-24 09:55:46.409357	5
24	Doobie	2021-03-24 09:55:46.409357	5
25	Dorito	2021-03-24 09:55:46.409357	6
26	Double Double	2021-03-24 09:55:46.409357	7
27	Dreamey	2021-03-24 09:55:46.409357	5
28	Dumbledore	2021-03-24 09:55:46.409357	1
29	Figgy	2021-03-24 09:55:46.409357	6
30	Filly Fally	2021-03-24 09:55:46.409357	4
31	Foxy Mama	2021-03-24 09:55:46.409357	6
32	Freak	2021-03-24 09:55:46.409357	2
33	Gordo	2021-03-24 09:55:46.409357	4
34	Green Giant	2021-03-24 09:55:46.409357	5
35	Hot Pepper	2021-03-24 09:55:46.409357	6
36	Knucklebutt	2021-03-24 09:55:46.409357	3
37	Hubby	2021-03-24 09:55:46.409357	2
38	Lovey	2021-03-24 09:55:46.409357	1
39	Lulu	2021-03-24 09:55:46.409357	8
40	Manatee	2021-03-24 09:55:46.409357	6
41	Marshmallow	2021-03-24 09:55:46.409357	2
42	Matey	2021-03-24 09:55:46.409357	8
43	Oreo	2021-03-24 09:55:46.409357	2
44	Peep	2021-03-24 09:55:46.409357	3
45	Pinkie	2021-03-24 09:55:46.409357	4
46	Pork Chop	2021-03-24 09:55:46.409357	7
47	Pretty Lady	2021-03-24 09:55:46.409357	1
48	Princess Pea	2021-03-24 09:55:46.409357	7
49	Rockette	2021-03-24 09:55:46.409357	4
50	Rosie	2021-03-24 09:55:46.409357	2
51	Senior	2021-03-24 09:55:46.409357	1
52	Sherlock	2021-03-24 09:55:46.409357	2
53	Shuttershy	2021-03-24 09:55:46.409357	6
54	Skinny Jeans	2021-03-24 09:55:46.409357	1
55	Smiley	2021-03-24 09:55:46.409357	4
56	Swiss Miss	2021-03-24 09:55:46.409357	2
57	Terminator	2021-03-24 09:55:46.409357	2
58	Twinkie	2021-03-24 09:55:46.409357	3
59	Zeno	2021-03-24 09:55:46.409357	3
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: tpl2_2021h1
--

COPY public.sightings (id, seen, healthy, location, email, record_created, animal_id) FROM stdin;
1	2008-05-02 00:00:00	t	Asia	discover@wwl.com	2010-09-03 00:00:00	1
2	2008-05-02 00:00:00	t	Mongolia	discover@wwl.com	2010-09-03 00:00:00	2
3	2008-05-02 00:00:00	t	China	discover@wwl.com	2010-09-03 00:00:00	3
5	2019-08-24 10:24:13	f	67°51 N  20°13 E	meinieutility@gmail.com	2021-03-24 09:55:56.174342	2
9	2020-07-12 21:28:37	f	69°41 N  18°57 E	genuineunlikely@gmail.com	2021-03-24 09:55:56.174342	5
6	2018-08-26 01:03:03	t	Kumasi, Ghana	kneelabourer@gmail.com	2021-03-24 09:55:56.174342	3
7	2020-02-07 11:01:49	f	Luanda, Angola	accomplisharctic@gmail.com	2021-03-24 09:55:56.174342	4
4	2018-12-01 04:27:04	t	34°16 N  108°54 E	drinkwhen@gmail.com	2021-03-24 09:55:56.174342	1
8	2020-07-12 21:28:37	t	69°41 N  18°57 E	genuineunlikely@gmail.com	2021-03-24 09:55:56.174342	5
10	2019-03-14 12:44:22	t	Kōfu, Japan	fishtax@gmail.com	2021-03-24 09:55:56.174342	6
11	2018-03-14 04:45:23	f	Arequipa, Peru	octopusfan@gmail.com	2021-03-24 09:55:56.174342	7
12	2018-08-29 09:57:32	f	Lilongwe, Malawi	impulsivealarming@gmail.com	2021-03-24 09:55:56.174342	8
13	2020-05-16 03:52:26	t	32°43 N  117°10 W	nobodyproblem@gmail.com	2021-03-24 09:55:56.174342	9
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: tpl2_2021h1
--

COPY public.species (id, common_name, scientific_name, population, status_code, record_created) FROM stdin;
1	bengal tiger	Panthera tigris tigris	2500	EN	2008-11-01 00:00:00
2	snow leopard	Panthera uncia	5000	VU	2008-11-01 00:00:00
3	red panda	Ailurus fulgens	10000	EN	2008-11-01 00:00:00
4	golden masked owl	Tyto aurantia	2500	EN	2008-11-01 00:00:00
5	ring-tailed lemur	Lemur catta	2400	EN	2008-11-01 00:00:00
6	koala	Phascolarctos cinereus	43000	VU	2008-11-01 00:00:00
7	black rhino	Diceros bicornis	4880	CR	2008-11-01 00:00:00
8	bonobos	Pan paniscus	10000	EN	2008-11-01 00:00:00
9	arctic fox	Vulpes lagopus	300000	VU	2008-11-01 00:00:00
\.


--
-- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl2_2021h1
--

SELECT pg_catalog.setval('public.individuals_id_seq', 59, true);


--
-- Name: individuals_species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl2_2021h1
--

SELECT pg_catalog.setval('public.individuals_species_id_seq', 1, false);


--
-- Name: sightings_animal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl2_2021h1
--

SELECT pg_catalog.setval('public.sightings_animal_id_seq', 1, false);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl2_2021h1
--

SELECT pg_catalog.setval('public.sightings_id_seq', 23, true);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl2_2021h1
--

SELECT pg_catalog.setval('public.species_id_seq', 9, true);


--
-- Name: individuals individuals_nickname_key; Type: CONSTRAINT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_nickname_key UNIQUE (nickname);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (id);


--
-- Name: sightings fk_animal; Type: FK CONSTRAINT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT fk_animal FOREIGN KEY (animal_id) REFERENCES public.individuals(id);


--
-- Name: individuals fk_species; Type: FK CONSTRAINT; Schema: public; Owner: tpl2_2021h1
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT fk_species FOREIGN KEY (species_id) REFERENCES public.species(id);


--
-- PostgreSQL database dump complete
--

