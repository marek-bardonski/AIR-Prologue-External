# Plains, hills and house loot — 15 September 2026

- Probabilities are conditional on the tile being Plains/Field, Hills or House; they are not world-generation chances.
- Explore = first completed exploration, including its bonus find. Full = exploration plus every available search, gather and dismantle, with required tools and no lost loot.
- Full inland omits shoreline cattails. Full shoreline assumes a river/lake neighbor, which adds 1–3 cattail patches.
- Independent weighted draws with replacement: P(at least one item) = 1 − mean((1 − per-draw probability)^rolls). Ranges are uniform and inclusive.
- Bonus discovery probabilities assume no previous finds (history zero). After n finds of an item, its pool weight is 1/(1+3n), renormalized against the other items in that pool.
- Searching furniture before dismantling does not produce a second search roll. Salvage and search are separate, and are combined only once.
- Backpack availability filters and containers/batteries inside loot are included. A bonus powered-device find has a 45% chance to include its compatible default battery.
- These are item-presence probabilities, not quantity expectations. Count and charge ranges appear in the source tables.
- Already explored tiles do not reroll exploration or spawn new discovery events. Unsearched objects use the updated tables. Further item disassembly, enemy drops, fishing and passive Home production are outside this report.

## Plains (Field)

### Objects

| Object | Chance on tile | Counts when generated | Contents table |
|---|---:|---|---|
| Underbrush | 100.00% | 1–4 / 1–3 | gather |
| Rock outcrop | 31.25% | 0–1 | gather |
| Wrecked car | 18.75% | 0–1 | car_wreck |
| Weathered traveller remains (bonus) | 3.00% | 1 | discovery_remains |
| Abandoned suitcase (bonus) | 1.80% | 1 | discovery_luggage |
| Discarded toolbox (bonus) | 2.00% | 1 | discovery_workshop |
| Abandoned backpack (bonus) | 0.10% | 1 | discovery_backpack |

### Every item

| Item | First exploration | Fully looted inland | Fully looted shoreline |
|---|---:|---:|---:|
| withered plant (`withered`) | 52.10% | 100.00% | 100.00% |
| wild vegetables (`veggy_wild`) | 30.97% | 98.98% | 98.98% |
| stick (`stick`) | 20.84% | 89.13% | 89.13% |
| handful of young leaves (`young_leaves`) | 3.25% | 66.04% | 66.04% |
| dogbane (`dogbane`) | 1.30% | 59.85% | 59.85% |
| rock (`rock`) | 29.59% | 51.60% | 51.60% |
| wild garlic (`wild_garlic`) | 3.25% | 48.02% | 48.02% |
| burdock (`raw_burdock`) | 3.25% | 40.69% | 40.69% |
| handful of ground nuts (`groundnut`) | 3.25% | 40.69% | 40.69% |
| flaking rock (`rock_flaking`) | 10.26% | 38.31% | 38.31% |
| pile of straw (`straw_pile`) | 36.87% | 36.91% | 36.91% |
| chicken egg (`egg_chicken`) | 3.25% | 32.61% | 32.61% |
| rhubarb (`rhubarb`) | 3.25% | 32.61% | 32.61% |
| spurge flowers (`spurge`) | 1.33% | 31.27% | 31.27% |
| dandelion (`raw_dandelion`) | 19.78% | 19.78% | 19.78% |
| wild root (`carrot_wild`) | 19.78% | 19.78% | 19.78% |
| flint (`flint`) | 0.0254% | 9.41% | 9.41% |
| scrap metal (`scrap`) | 0.0254% | 9.02% | 9.02% |
| large rock (`rock_large`) | 0.0000% | 6.25% | 6.25% |
| nut and bolt (`nuts_bolts`) | 0.0254% | 5.06% | 5.06% |
| pipe (`pipe`) | 0.0151% | 5.06% | 5.06% |
| plastic bottle (`bottle_plastic`) | 0.24% | 4.61% | 4.61% |
| small metal sheet (`sheet_metal_small`) | 0.0254% | 4.15% | 4.15% |
| hickory root (`hickory_root`) | 3.38% | 3.38% | 3.38% |
| piece of willowbark (`willowbark`) | 3.38% | 3.38% | 3.38% |
| wild herbs (`wild_herbs`) | 3.38% | 3.38% | 3.38% |
| plastic chunk (`plastic_chunk`) | 0.0254% | 3.19% | 3.19% |
| spring (`spring`) | 0.0254% | 3.18% | 3.18% |
| peanut butter candy (`candy`) | 0.0048% | 2.72% | 2.72% |
| potato chips (`chips`) | 0.0048% | 2.72% | 2.72% |
| duct tape (`duct_tape`) | 0.0254% | 2.69% | 2.69% |
| lighter (`lighter`) | 0.0254% | 2.69% | 2.69% |
| short rope (`rope_6`) | 0.0062% | 2.21% | 2.21% |
| suitcase (`suitcase_m`) | 0.0000% | 1.80% | 1.80% |
| crowbar (`crowbar`) | 0.0151% | 1.67% | 1.67% |
| sheet metal (`sheet_metal`) | 0.0151% | 1.65% | 1.65% |
| bee stinger (`bee_sting`) | 1.33% | 1.33% | 1.33% |
| butternut husks (`butternut_husk`) | 1.33% | 1.33% | 1.33% |
| lump of clay (`clay_lump`) | 1.33% | 1.33% | 1.33% |
| pine bough (`pine_bough`) | 1.33% | 1.33% | 1.33% |
| plant fiber (`plant_fibre`) | 1.33% | 1.33% | 1.33% |
| rock salt (`material_rocksalt`) | 1.33% | 1.33% | 1.33% |
| wasp stinger (`wasp_sting`) | 1.33% | 1.33% | 1.33% |
| chunk of sulfur (`chunk_sulfur`) | 1.30% | 1.30% | 1.30% |
| limestone shard (`material_shrd_limestone`) | 1.30% | 1.30% | 1.30% |
| pine resin (`pine_resin`) | 1.30% | 1.30% | 1.30% |
| soil (`material_soil`) | 1.30% | 1.30% | 1.30% |
| zincite (`material_zincite`) | 1.30% | 1.30% | 1.30% |
| small backpack (`backpack_small`) | 0.0021% | 0.39% | 0.39% |
| backpack (`backpack`) | 0.0021% | 0.11% | 0.11% |
| pocket knife (`pockknife`) | 0.0151% | 0.11% | 0.11% |
| briefcase (`briefcase`) | 0.0062% | 0.11% | 0.11% |
| light battery (`light_battery_cell`) | 0.0229% | 0.11% | 0.11% |
| 3 L glass jar (`jar_3l_glass_sealed`) | 0.0246% | 0.0957% | 0.0957% |
| medium tin can (`can_medium`) | 0.0580% | 0.0771% | 0.0771% |
| small tool battery (`heavy_battery_cell`) | 0.0433% | 0.0614% | 0.0614% |
| apple (`apple`) | 0.0048% | 0.0567% | 0.0567% |
| bread (`bread`) | 0.0048% | 0.0567% | 0.0567% |
| canned beans (`can_beans`) | 0.0048% | 0.0567% | 0.0567% |
| clean water (`water_clean`) | 0.0048% | 0.0567% | 0.0567% |
| cooked fatty meat (`meat_fatty_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked fish (`fish_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked fruit (`fruit_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked meat (`meat_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked mushroom (`mushroom_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked plant marrow (`veggy_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked poultry (`poultry_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cookie (`cookies`) | 0.0048% | 0.0567% | 0.0567% |
| dehydrated meat (`dry_meat`) | 0.0048% | 0.0567% | 0.0567% |
| handful of blackberries (`blackberries`) | 0.0048% | 0.0567% | 0.0567% |
| handful of blueberries (`blueberries`) | 0.0048% | 0.0567% | 0.0567% |
| handful of raspberries (`raspberries`) | 0.0048% | 0.0567% | 0.0567% |
| handful of strawberries (`strawberries`) | 0.0048% | 0.0567% | 0.0567% |
| hardtack cracker (`hardtack_cracker`) | 0.0048% | 0.0567% | 0.0567% |
| meat jerky (`jerky`) | 0.0048% | 0.0567% | 0.0567% |
| protein ration (`protein_bar_evac`) | 0.0048% | 0.0567% | 0.0567% |
| roasted bone marrow (`cooked_marrow`) | 0.0048% | 0.0567% | 0.0567% |
| smoked meat (`meat_smoked`) | 0.0048% | 0.0567% | 0.0567% |
| gallon jug (`jug_plastic`) | 0.0342% | 0.0533% | 0.0533% |
| glass bottle (`bottle_glass`) | 0.0342% | 0.0533% | 0.0533% |
| cooked beans (`beans_cooked`) | 0.0048% | 0.0492% | 0.0492% |
| cooked lentils (`lentils_cooked`) | 0.0048% | 0.0492% | 0.0492% |
| cooked oatmeal (`oatmeal_cooked`) | 0.0048% | 0.0492% | 0.0492% |
| corn on the cob (`corn_on_cob`) | 0.0048% | 0.0492% | 0.0492% |
| popcorn (`popcorn`) | 0.0048% | 0.0492% | 0.0492% |
| 0.5 L glass jar (`jar_glass_sealed`) | 0.0294% | 0.0486% | 0.0486% |
| bandage (`bandages`) | 0.0254% | 0.0456% | 0.0456% |
| matchbook (`matches`) | 0.0254% | 0.0456% | 0.0456% |
| abaya (`abaya`) | 0.0062% | 0.0436% | 0.0436% |
| ankle sheath (`bootsheath`) | 0.0062% | 0.0436% | 0.0436% |
| ankle socks (pair) (`socks_ankle`) | 0.0062% | 0.0436% | 0.0436% |
| ankle wallet pouch (`ankle_wallet_pouch`) | 0.0062% | 0.0436% | 0.0436% |
| arm splint (`arm_splint`) | 0.0062% | 0.0436% | 0.0436% |
| armored jean jacket (`jacket_jean_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored jean vest (`vest_jean_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored jeans (`jeans_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored leather vest (`vest_leather_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored motorcycle jacket (`jacket_leather_mod`) | 0.0062% | 0.0436% | 0.0436% |
| bag socks (pair) (`socks_bag`) | 0.0062% | 0.0436% | 0.0436% |
| balaclava (`balclava`) | 0.0062% | 0.0436% | 0.0436% |
| bandana (`bandana`) | 0.0062% | 0.0436% | 0.0436% |
| baseball cap (`hat_ball`) | 0.0062% | 0.0436% | 0.0436% |
| bathrobe (`house_coat`) | 0.0062% | 0.0436% | 0.0436% |
| belly band (`bellyband`) | 0.0062% | 0.0436% | 0.0436% |
| belly wrap (`bellywrap`) | 0.0062% | 0.0436% | 0.0436% |
| bindle (`bindle`) | 0.0062% | 0.0436% | 0.0436% |
| birchbark ankle sheath (`bootsheath_birchbark`) | 0.0062% | 0.0436% | 0.0436% |
| birchbark shoes (pair) (`shoes_birchbark`) | 0.0062% | 0.0436% | 0.0436% |
| blanket (`blanket`) | 0.0062% | 0.0436% | 0.0436% |
| blindfold (`blindfold`) | 0.0062% | 0.0436% | 0.0436% |
| bookplate (`bookplate`) | 0.0062% | 0.0436% | 0.0436% |
| bookstrap (`bookstrap`) | 0.0062% | 0.0436% | 0.0436% |
| boonie hat (`hat_boonie`) | 0.0062% | 0.0436% | 0.0436% |
| boots (pair) (`boots`) | 0.0062% | 0.0436% | 0.0436% |
| bottle gourd (`bottle_gourd`) | 0.0062% | 0.0436% | 0.0436% |
| box backpack (`boxpack`) | 0.0062% | 0.0436% | 0.0436% |
| boxer briefs (`boxer_briefs`) | 0.0062% | 0.0436% | 0.0436% |
| boxer shorts (`boxer_shorts`) | 0.0062% | 0.0436% | 0.0436% |
| briefs (`briefs`) | 0.0062% | 0.0436% | 0.0436% |
| canvas aketon vest (`aketon_canvas_vest`) | 0.0062% | 0.0436% | 0.0436% |
| canvas heavy arming pants (`gambeson_pants_canvas`) | 0.0062% | 0.0436% | 0.0436% |
| canvas throat guard (`throat_guard_canvas`) | 0.0062% | 0.0436% | 0.0436% |
| cargo pants (`pants_cargo`) | 0.0062% | 0.0436% | 0.0436% |
| cargo shorts (`shorts_cargo`) | 0.0062% | 0.0436% | 0.0436% |
| carpet cuirass (`carpet_cuirass`) | 0.0062% | 0.0436% | 0.0436% |
| chestwrap (`chestwrap`) | 0.0062% | 0.0436% | 0.0436% |
| chitinous boots (pair) (`boots_chitin`) | 0.0062% | 0.0436% | 0.0436% |
| cloak (`cloak`) | 0.0062% | 0.0436% | 0.0436% |
| cloth-padded pants (`canvas_pants_padded`) | 0.0062% | 0.0436% | 0.0436% |
| cloth-padded shirt (`cloth_shirt_padded`) | 0.0062% | 0.0436% | 0.0436% |
| cloth-padded sleeveless shirt (`cloth_vest_padded`) | 0.0062% | 0.0436% | 0.0436% |
| combat boots (pair) (`boots_combat`) | 0.0062% | 0.0436% | 0.0436% |
| cord sandals (pair) (`bastsandals`) | 0.0062% | 0.0436% | 0.0436% |
| cotton apron (`apron_cotton`) | 0.0062% | 0.0436% | 0.0436% |
| cotton hat (`hat_cotton`) | 0.0062% | 0.0436% | 0.0436% |
| cowboy hat (`cowboy_hat`) | 0.0062% | 0.0436% | 0.0436% |
| crop top (`tshirt_cropped`) | 0.0062% | 0.0436% | 0.0436% |
| cropped hoodie (`hoodie_cropped`) | 0.0062% | 0.0436% | 0.0436% |
| deployment bag (`deployment_bag`) | 0.0062% | 0.0436% | 0.0436% |
| drop leg bag (`leg_bag`) | 0.0062% | 0.0436% | 0.0436% |
| duffel bag (`duffelbag`) | 0.0062% | 0.0436% | 0.0436% |
| duster (`duster`) | 0.0062% | 0.0436% | 0.0436% |
| eight point cap (`hat_navy`) | 0.0062% | 0.0436% | 0.0436% |
| espadrilles (`espadrilles`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur coat (`coat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur duster (`duster_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur hat (`hat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur trenchcoat (`trenchcoat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| flame-resistant socks (pair) (`nomex_socks`) | 0.0062% | 0.0436% | 0.0436% |
| foot rags (pair) (`footrags`) | 0.0062% | 0.0436% | 0.0436% |
| fur belly wrap (`bellywrap_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur chestwrap (`chestwrap_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur cloak (`cloak_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur coat (`coat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur duster (`duster_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur foot wraps (pair) (`footrags_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur hat (`hat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur loincloth (`loincloth_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur pants (`pants_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur trenchcoat (`trenchcoat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| garter belt (`garter_belt`) | 0.0062% | 0.0436% | 0.0436% |
| golf cap (`hat_golf`) | 0.0062% | 0.0436% | 0.0436% |
| grappling hook (`grapnel`) | 0.0062% | 0.0436% | 0.0436% |
| grass blanket (`grass_blanket`) | 0.0062% | 0.0436% | 0.0436% |
| grass cloak (`grass_cloak`) | 0.0062% | 0.0436% | 0.0436% |
| grass keffiyeh (`grass_keffiyeh`) | 0.0062% | 0.0436% | 0.0436% |
| grass sheet (`grass_sheet`) | 0.0062% | 0.0436% | 0.0436% |
| grass shirt (`shirt_straw`) | 0.0062% | 0.0436% | 0.0436% |
| grass skirt (`skirt_grass`) | 0.0062% | 0.0436% | 0.0436% |
| hairpin (`hairpin`) | 0.0062% | 0.0436% | 0.0436% |
| hard hat (`hat_hard`) | 0.0062% | 0.0436% | 0.0436% |
| headscarf (`headscarf`) | 0.0062% | 0.0436% | 0.0436% |
| hijab (`hijab`) | 0.0062% | 0.0436% | 0.0436% |
| hoodie (`hoodie`) | 0.0062% | 0.0436% | 0.0436% |
| hunting cap (`hat_hunting`) | 0.0062% | 0.0436% | 0.0436% |
| jean jacket (`jacket_jean`) | 0.0062% | 0.0436% | 0.0436% |
| jean vest (`vest_jean`) | 0.0062% | 0.0436% | 0.0436% |
| jeans (`jeans`) | 0.0062% | 0.0436% | 0.0436% |
| jerrypack (`jerrypack`) | 0.0062% | 0.0436% | 0.0436% |
| jorts (`shorts_denim`) | 0.0062% | 0.0436% | 0.0436% |
| keffiyeh (`keffiyeh`) | 0.0062% | 0.0436% | 0.0436% |
| Kevlar dog harness (`kevlar_harness`) | 0.0062% | 0.0436% | 0.0436% |
| knit cowl (`cowl_wool`) | 0.0062% | 0.0436% | 0.0436% |
| knit hat (`hat_knit`) | 0.0062% | 0.0436% | 0.0436% |
| large belt loop (`belt_loop_large`) | 0.0062% | 0.0436% | 0.0436% |
| large waterskin (`waterskin3`) | 0.0062% | 0.0436% | 0.0436% |
| leather apron (`apron_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather armor boots (pair) (`boots_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| leather armor cuirass (`armor_larmor_chest`) | 0.0062% | 0.0436% | 0.0436% |
| leather armor helmet (`helmet_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| leather belly wrap (`bellywrap_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather belt (`leather_belt`) | 0.0062% | 0.0436% | 0.0436% |
| leather body armor (`armor_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| leather chestwrap (`chestwrap_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather cloak (`cloak_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather dog harness (`leather_harness_dog`) | 0.0062% | 0.0436% | 0.0436% |
| leather duster (`duster_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather eyepatch (`eyepatch_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather foot wraps (pair) (`footrags_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather loincloth (`loincloth_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather pants (`pants_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather pouch (`leather_pouch`) | 0.0062% | 0.0436% | 0.0436% |
| leather sandals (pair) (`leathersandals`) | 0.0062% | 0.0436% | 0.0436% |
| leather suspenders (`suspenders_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather trenchcoat (`trenchcoat_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather vest (`vest_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded pants (`survivor_adhoc_leather_pants`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded shirt (`survivor_adhoc_leather_shirt`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded sleeveless shirt (`survivor_adhoc_leather_torso`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded sleeves (`survivor_adhoc_leather_sleeves`) | 0.0062% | 0.0436% | 0.0436% |
| leg splint (`leg_splint`) | 0.0062% | 0.0436% | 0.0436% |
| light jacket (`jacket_light`) | 0.0062% | 0.0436% | 0.0436% |
| light sheet metal chest guard (`chestguard_metal_sheets_light`) | 0.0062% | 0.0436% | 0.0436% |
| loincloth (`loincloth`) | 0.0062% | 0.0436% | 0.0436% |
| long cordage rope (`rope_makeshift_30`) | 0.0062% | 0.0436% | 0.0436% |
| long patchwork scarf (`long_patchwork_scarf`) | 0.0062% | 0.0436% | 0.0436% |
| long rope (`rope_30`) | 0.0062% | 0.0436% | 0.0436% |
| long underwear bottom (`long_underpants`) | 0.0062% | 0.0436% | 0.0436% |
| long underwear top (`long_undertop`) | 0.0062% | 0.0436% | 0.0436% |
| long vine (`vine_30`) | 0.0062% | 0.0436% | 0.0436% |
| long waist apron (`waist_apron_long`) | 0.0062% | 0.0436% | 0.0436% |
| long-sleeved shirt (`longshirt`) | 0.0062% | 0.0436% | 0.0436% |
| longarm bag (`long_duffelbag`) | 0.0062% | 0.0436% | 0.0436% |
| loop of rope (`rope_loop`) | 0.0062% | 0.0436% | 0.0436% |
| makeshift knapsack (`makeshift_knapsack`) | 0.0062% | 0.0436% | 0.0436% |
| makeshift poncho (`poncho_makeshift`) | 0.0062% | 0.0436% | 0.0436% |
| makeshift sling (`makeshift_sling`) | 0.0062% | 0.0436% | 0.0436% |
| medium belt loop (`belt_loop_medium`) | 0.0062% | 0.0436% | 0.0436% |
| moccasins (pair) (`mocassins`) | 0.0062% | 0.0436% | 0.0436% |
| motorcycle jacket (`leather_police_jacket`) | 0.0062% | 0.0436% | 0.0436% |
| niqab (`niqab`) | 0.0062% | 0.0436% | 0.0436% |
| noise canceling headgear (`hat_noise_cancelling`) | 0.0062% | 0.0436% | 0.0436% |
| nylon heavy arming pants (`gambeson_pants_nylon`) | 0.0062% | 0.0436% | 0.0436% |
| nylon throat guard (`throat_guard_nylon`) | 0.0062% | 0.0436% | 0.0436% |
| pack frame (`frame_pack`) | 0.0062% | 0.0436% | 0.0436% |
| pair of 2-by-arm guards (`2byarm_guard`) | 0.0062% | 0.0436% | 0.0436% |
| pair of 2-by-shin guards (`2byshin_guard`) | 0.0062% | 0.0436% | 0.0436% |
| pair of arm warmers (`arm_warmers`) | 0.0062% | 0.0436% | 0.0436% |
| pair of armored fingerless leather gloves (`gloves_fingerless_mod`) | 0.0062% | 0.0436% | 0.0436% |
| pair of armored gauntlets (`gloves_plate`) | 0.0062% | 0.0436% | 0.0436% |
| pair of bag gloves (`gloves_bag`) | 0.0062% | 0.0436% | 0.0436% |
| pair of black gloves (`gloves_black`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet arm guards (`carpet_armguards`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet bracers (`carpet_bracers`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet greaves (`carpet_greaves`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet leg guards (`carpet_legguards`) | 0.0062% | 0.0436% | 0.0436% |
| pair of claw gloves (`gloves_claws`) | 0.0062% | 0.0436% | 0.0436% |
| pair of copper earrings (`copper_ear`) | 0.0062% | 0.0436% | 0.0436% |
| pair of denim gloves (`gloves_denim`) | 0.0062% | 0.0436% | 0.0436% |
| pair of EOD overhand protectors (`gloves_eod`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless denim gloves (`gloves_denim_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless leather gloves (`gloves_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless light survivor gloves (`gloves_lsurvivor_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless survivor gloves (`gloves_survivor_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless wool gloves (`gloves_wool_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fur gloves (`gloves_fur`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fur hand wraps (`gloves_wraps_fur`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fur leggings (`leg_warmers_f`) | 0.0062% | 0.0436% | 0.0436% |
| pair of glass goggles (`glass_goggles`) | 0.0062% | 0.0436% | 0.0436% |
| pair of glove liners (`gloves_liner`) | 0.0062% | 0.0436% | 0.0436% |
| pair of golfing gloves (`gloves_golf`) | 0.0062% | 0.0436% | 0.0436% |
| pair of hand wraps (`gloves_wraps`) | 0.0062% | 0.0436% | 0.0436% |
| pair of knee pads (`knee_pads`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather arm guards (`armguard_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather armor gauntlets (`gauntlets_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather gloves (`gloves_leather`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather hand wraps (`gloves_wraps_leather`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather leg guards (`legguard_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather vambraces (`vambrace_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leg warmers (`leg_warmers`) | 0.0062% | 0.0436% | 0.0436% |
| pair of light gloves (`gloves_light`) | 0.0062% | 0.0436% | 0.0436% |
| pair of light survivor boots (`boots_lsurvivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of light survivor gloves (`gloves_lsurvivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of medical gloves (`gloves_medical`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mild steel sheet metal bracers (`armguard_metal_sheets_bracer`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mild steel sheet metal elbow guards (`armguard_metal_sheets_elbows`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mild steel sheet metal pauldrons (`armguard_metal_sheets_shoulders`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mittens (`mittens`) | 0.0062% | 0.0436% | 0.0436% |
| pair of nail knuckles (`knuckle_nail`) | 0.0062% | 0.0436% | 0.0436% |
| pair of neoprene arm sleeves (`armguard_soft`) | 0.0062% | 0.0436% | 0.0436% |
| pair of Nomex sock mitts (`nomex_sockmitts`) | 0.0062% | 0.0436% | 0.0436% |
| pair of paper arm guards (`armguard_paper`) | 0.0062% | 0.0436% | 0.0436% |
| pair of paper leg guards (`legguard_paper`) | 0.0062% | 0.0436% | 0.0436% |
| pair of rubber gloves (`gloves_rubber`) | 0.0062% | 0.0436% | 0.0436% |
| pair of safety glasses (`glasses_safety`) | 0.0062% | 0.0436% | 0.0436% |
| pair of scrap arm guards (`armguard_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| pair of scrap knuckles (`knuckle_steel`) | 0.0062% | 0.0436% | 0.0436% |
| pair of scrap leg guards (`legguard_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal arm guards (`armguard_metal`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal gauntlets (`mitten_gaunt_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal greaves (`legguard_metal_sheets_greaves`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal knee guards (`legguard_metal_sheets_knees`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal leg guards (`legguard_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| pair of snow goggles (`iggaak`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sock mitts (`sockmitts`) | 0.0062% | 0.0436% | 0.0436% |
| pair of studded gloves (`gloves_studded`) | 0.0062% | 0.0436% | 0.0436% |
| pair of survivor firegloves (`gloves_fsurvivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of survivor gloves (`gloves_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of tentacle sleeves (`stockings_tent_arms`) | 0.0062% | 0.0436% | 0.0436% |
| pair of welding goggles (`goggles_welding`) | 0.0062% | 0.0436% | 0.0436% |
| pair of white gloves (`gloves_white`) | 0.0062% | 0.0436% | 0.0436% |
| pair of wool gloves (`gloves_wool`) | 0.0062% | 0.0436% | 0.0436% |
| pair of wool hand wraps (`gloves_wraps_wool`) | 0.0062% | 0.0436% | 0.0436% |
| pair of wool sock mitts (`wool_sockmitts`) | 0.0062% | 0.0436% | 0.0436% |
| pair of work gloves (`gloves_work`) | 0.0062% | 0.0436% | 0.0436% |
| pants (`pants`) | 0.0062% | 0.0436% | 0.0436% |
| plastic apron (`apron_plastic`) | 0.0062% | 0.0436% | 0.0436% |
| plastic canteen (`canteen`) | 0.0062% | 0.0436% | 0.0436% |
| plastic shopping bag (`plastic_shopping_bag`) | 0.0062% | 0.0436% | 0.0436% |
| pot great helm (`stockpot_helmet`) | 0.0062% | 0.0436% | 0.0436% |
| pot helmet (`pot_helmet`) | 0.0062% | 0.0436% | 0.0436% |
| pouch (`ragpouch`) | 0.0062% | 0.0436% | 0.0436% |
| rag tunic (`tunic_rag`) | 0.0062% | 0.0436% | 0.0436% |
| rain coat (`coat_rain`) | 0.0062% | 0.0436% | 0.0436% |
| rain hood (`hood_rain`) | 0.0062% | 0.0436% | 0.0436% |
| rioter mask (`mask_rioter`) | 0.0062% | 0.0436% | 0.0436% |
| ripped jeans (`jeans_ripped`) | 0.0062% | 0.0436% | 0.0436% |
| rubber dog rainsuit (`rubber_harness_dog`) | 0.0062% | 0.0436% | 0.0436% |
| scrap boots (pair) (`boots_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| scrap cuirass (`cuirass_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| scrap ESAPI plate (`scrap_esapi_plate`) | 0.0062% | 0.0436% | 0.0436% |
| scrap ESBI plate (`scrap_esbi_plate`) | 0.0062% | 0.0436% | 0.0436% |
| scrap helmet (`helmet_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| scrap suit (`armor_scrapsuit`) | 0.0062% | 0.0436% | 0.0436% |
| scrap suit (`armor_xs_scrapsuit`) | 0.0062% | 0.0436% | 0.0436% |
| sheet (`sheet`) | 0.0062% | 0.0436% | 0.0436% |
| sheet metal chest guard (`chestguard_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| sheet metal sabatons (pair) (`sabaton_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| sheet metal skirt (`legguard_metal_sheets_hip`) | 0.0062% | 0.0436% | 0.0436% |
| short cordage rope (`rope_makeshift_6`) | 0.0062% | 0.0436% | 0.0436% |
| short vine (`vine_6`) | 0.0062% | 0.0436% | 0.0436% |
| short waist apron (`waist_apron_short`) | 0.0062% | 0.0436% | 0.0436% |
| shorts (`shorts`) | 0.0062% | 0.0436% | 0.0436% |
| simple patchwork scarf (`patchwork_scarf`) | 0.0062% | 0.0436% | 0.0436% |
| sleeping bag (`sleeping_bag`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless canvas gambeson (`gambeson_canvas_vest`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless duster (`sleeveless_duster`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless faux fur duster (`sleeveless_duster_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless faux fur trenchcoat (`sleeveless_trenchcoat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless fur duster (`sleeveless_duster_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless fur trenchcoat (`sleeveless_trenchcoat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless leather duster (`sleeveless_duster_leather`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless leather trenchcoat (`sleeveless_trenchcoat_leather`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless nylon gambeson (`gambeson_nylon_vest`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless survivor duster (`sleeveless_duster_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless survivor trenchcoat (`sleeveless_trenchcoat_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless trenchcoat (`sleeveless_trenchcoat`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless tunic (`sleeveless_tunic`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless underwear top (`long_undertop_sleeveless`) | 0.0062% | 0.0436% | 0.0436% |
| small waterskin (`waterskin`) | 0.0062% | 0.0436% | 0.0436% |
| sneakers (pair) (`sneakers`) | 0.0062% | 0.0436% | 0.0436% |
| socks (pair) (`socks`) | 0.0062% | 0.0436% | 0.0436% |
| stockings (pair) (`stockings`) | 0.0062% | 0.0436% | 0.0436% |
| straw basket (`straw_basket`) | 0.0062% | 0.0436% | 0.0436% |
| straw hat (`straw_hat`) | 0.0062% | 0.0436% | 0.0436% |
| straw sandals (pair) (`straw_sandals`) | 0.0062% | 0.0436% | 0.0436% |
| summer hard hat (`hat_hard_hooded`) | 0.0062% | 0.0436% | 0.0436% |
| sun shield (`sun_shield`) | 0.0062% | 0.0436% | 0.0436% |
| sundress (`sundress`) | 0.0062% | 0.0436% | 0.0436% |
| survivor duster (`duster_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| survivor trenchcoat (`trenchcoat_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| suspenders (`suspenders_cloth`) | 0.0062% | 0.0436% | 0.0436% |
| sustainment pouch (`sustainment_pouch`) | 0.0062% | 0.0436% | 0.0436% |
| swag bag (`swag_bag`) | 0.0062% | 0.0436% | 0.0436% |
| sweater (`sweater`) | 0.0062% | 0.0436% | 0.0436% |
| sweatshirt (`sweatshirt`) | 0.0062% | 0.0436% | 0.0436% |
| t-shirt (`tshirt`) | 0.0062% | 0.0436% | 0.0436% |
| tank top (`tank_top`) | 0.0062% | 0.0436% | 0.0436% |
| tentacle stockings (pair) (`stockings_tent_legs`) | 0.0062% | 0.0436% | 0.0436% |
| thick wool onesie (`wool_suit`) | 0.0062% | 0.0436% | 0.0436% |
| tireplate (`tireplate`) | 0.0062% | 0.0436% | 0.0436% |
| toque (`hat_chef`) | 0.0062% | 0.0436% | 0.0436% |
| towel (`towel`) | 0.0062% | 0.0436% | 0.0436% |
| trapper pack (`trapper_pack`) | 0.0062% | 0.0436% | 0.0436% |
| travelpack (`travelpack`) | 0.0062% | 0.0436% | 0.0436% |
| trenchcoat (`trenchcoat`) | 0.0062% | 0.0436% | 0.0436% |
| tunic (`tunic`) | 0.0062% | 0.0436% | 0.0436% |
| turban (`turban`) | 0.0062% | 0.0436% | 0.0436% |
| turnout boots (pair) (`boots_bunker`) | 0.0062% | 0.0436% | 0.0436% |
| undershirt (`undershirt`) | 0.0062% | 0.0436% | 0.0436% |
| utility vest (`vest`) | 0.0062% | 0.0436% | 0.0436% |
| waterskin (`waterskin2`) | 0.0062% | 0.0436% | 0.0436% |
| windbreaker (`jacket_windbreaker`) | 0.0062% | 0.0436% | 0.0436% |
| wolf skull helmet (`helmet_skull`) | 0.0062% | 0.0436% | 0.0436% |
| wooden canteen (`canteen_wood`) | 0.0062% | 0.0436% | 0.0436% |
| wooden clogs (pair) (`clogs`) | 0.0062% | 0.0436% | 0.0436% |
| wool beret (`beret_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool chestwrap (`chestwrap_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool cloak (`cloak_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool foot wraps (pair) (`footrags_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool loincloth (`loincloth_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool poncho (`poncho`) | 0.0062% | 0.0436% | 0.0436% |
| wool socks (pair) (`socks_wool`) | 0.0062% | 0.0436% | 0.0436% |
| work pants (`technician_pants_gray`) | 0.0062% | 0.0436% | 0.0436% |
| black coffee (`coffee`) | 0.0048% | 0.0391% | 0.0391% |
| black tea (`tea`) | 0.0048% | 0.0391% | 0.0391% |
| cooked rice (`rice_cooked`) | 0.0048% | 0.0391% | 0.0391% |
| cotton boll (`cotton_boll`) | 0.0048% | 0.0391% | 0.0391% |
| dried rice (`dry_rice`) | 0.0048% | 0.0391% | 0.0391% |
| herbal tea (`herbal_tea`) | 0.0048% | 0.0391% | 0.0391% |
| herbal tea bag (`herbal_tea_bag`) | 0.0048% | 0.0391% | 0.0391% |
| Italian seasoning (`seasoning_italian`) | 0.0048% | 0.0391% | 0.0391% |
| popcorn kernels (`kernels`) | 0.0048% | 0.0391% | 0.0391% |
| toast (`toast`) | 0.0048% | 0.0391% | 0.0391% |
| aluminum can (`can_drink`) | 0.0199% | 0.0390% | 0.0390% |
| medium battery (rechargeable) (`medium_battery_cell`) | 0.0182% | 0.0363% | 0.0363% |
| 1 L lead ingot (`1l_lead`) | 0.0254% | 0.0345% | 0.0345% |
| 1 L silver ingot (`1l_silver`) | 0.0254% | 0.0345% | 0.0345% |
| 1 L tin ingot (`1l_tin`) | 0.0254% | 0.0345% | 0.0345% |
| 1L aluminum ingot (`1l_aluminum`) | 0.0254% | 0.0345% | 0.0345% |
| 1L brass ingot (`1l_brass`) | 0.0254% | 0.0345% | 0.0345% |
| 1L bronze ingot (`1l_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| 1L copper ingot (`1l_copper`) | 0.0254% | 0.0345% | 0.0345% |
| 1L zinc ingot (`1l_zinc`) | 0.0254% | 0.0345% | 0.0345% |
| 2-by-sword (`sword_wood`) | 0.0254% | 0.0345% | 0.0345% |
| adhesive bandage (`adhesive_bandages`) | 0.0254% | 0.0345% | 0.0345% |
| adobe mortar (`mortar_adobe`) | 0.0254% | 0.0345% | 0.0345% |
| alien resin chunk (`resin_chunk`) | 0.0254% | 0.0345% | 0.0345% |
| almonds (`almond`) | 0.0254% | 0.0345% | 0.0345% |
| aluminum foil (`aluminum_foil`) | 0.0254% | 0.0345% | 0.0345% |
| back-up beeper (`beeper`) | 0.0254% | 0.0345% | 0.0345% |
| barbed wire bat (`bwirebat`) | 0.0254% | 0.0345% | 0.0345% |
| baseball bat (`bat`) | 0.0254% | 0.0345% | 0.0345% |
| battered glass storybook (`glass_book`) | 0.0254% | 0.0345% | 0.0345% |
| bicycle alternator (`alternator_bicycle`) | 0.0254% | 0.0345% | 0.0345% |
| birchbark funnel (`birchbark_funnel`) | 0.0254% | 0.0345% | 0.0345% |
| bismuth (`bismuth`) | 0.0254% | 0.0345% | 0.0345% |
| bō (`bo`) | 0.0254% | 0.0345% | 0.0345% |
| boiled makeshift bandage (`bandages_makeshift_boiled`) | 0.0254% | 0.0345% | 0.0345% |
| bolt studded bat (`nutboltbat`) | 0.0254% | 0.0345% | 0.0345% |
| bone glue (`bone_glue`) | 0.0254% | 0.0345% | 0.0345% |
| breadboard (`breadboard`) | 0.0254% | 0.0345% | 0.0345% |
| bronze button (`button_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| bronze nail (`bronze_nail`) | 0.0254% | 0.0345% | 0.0345% |
| bronze war dart (`javelin_fletched_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of copper tubing (`bundle_copper_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of cotton patches (`bundle_rag`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of cotton sheets (`bundle_cotton`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of felt (`bundle_wool`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of javelins (`bundle_javelin`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of leather (`bundle_leather`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of pipes (`bundle_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of synthetic fabric (`bundle_nylon`) | 0.0254% | 0.0345% | 0.0345% |
| butter knife (`knife_butter`) | 0.0254% | 0.0345% | 0.0345% |
| butterfly net (`butterfly_net_makeshift`) | 0.0254% | 0.0345% | 0.0345% |
| candle (`candle`) | 0.0254% | 0.0345% | 0.0345% |
| canvas patch (`canvas_patch`) | 0.0254% | 0.0345% | 0.0345% |
| canvas scraps (`scrap_canvas`) | 0.0254% | 0.0345% | 0.0345% |
| canvas sheet (`sheet_canvas`) | 0.0254% | 0.0345% | 0.0345% |
| carding paddles (`carding_paddles`) | 0.0254% | 0.0345% | 0.0345% |
| cast iron chunk (`chunk_cast_iron`) | 0.0254% | 0.0345% | 0.0345% |
| cast iron lump (`lump_cast_iron`) | 0.0254% | 0.0345% | 0.0345% |
| charcoal (`charcoal`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of beeswax (`wax`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of brass (`scrap_brass`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of bronze (`scrap_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of copper (`scrap_copper`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of rubber (`chunk_rubber`) | 0.0254% | 0.0345% | 0.0345% |
| clay flower pot (`clay_pot_flower`) | 0.0254% | 0.0345% | 0.0345% |
| clay oil lamp (off) (`oil_lamp_clay`) | 0.0254% | 0.0345% | 0.0345% |
| copper (`copper`) | 0.0254% | 0.0345% | 0.0345% |
| copper rod (`copper_rod`) | 0.0254% | 0.0345% | 0.0345% |
| copper tubing (`cu_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| cotton balls (`cotton_ball`) | 0.0254% | 0.0345% | 0.0345% |
| cotton scraps (`scrap_cotton`) | 0.0254% | 0.0345% | 0.0345% |
| cotton sheet (`sheet_cotton`) | 0.0254% | 0.0345% | 0.0345% |
| crude bronze nail (`crude_bronze_nail`) | 0.0254% | 0.0345% | 0.0345% |
| crude heating element (`crude_heating_element`) | 0.0254% | 0.0345% | 0.0345% |
| crude lamp oil (`crude_lamp_oil`) | 0.0254% | 0.0345% | 0.0345% |
| crude wooden arrow (`arrow_fire_hardened_fletched`) | 0.0254% | 0.0345% | 0.0345% |
| crude wooden bolt (`bolt_crude`) | 0.0254% | 0.0345% | 0.0345% |
| cudgel (`cudgel`) | 0.0254% | 0.0345% | 0.0345% |
| cured hide (`cured_hide`) | 0.0254% | 0.0345% | 0.0345% |
| cured pelt (`cured_pelt`) | 0.0254% | 0.0345% | 0.0345% |
| cutting board (`cutting_board`) | 0.0254% | 0.0345% | 0.0345% |
| denim patch (`denim_patch`) | 0.0254% | 0.0345% | 0.0345% |
| denim sheet (`sheet_denim`) | 0.0254% | 0.0345% | 0.0345% |
| distaff and spindle (`distaff_spindle`) | 0.0254% | 0.0345% | 0.0345% |
| dog tag (`dog_tag_dog`) | 0.0254% | 0.0345% | 0.0345% |
| down feather (`down_feather`) | 0.0254% | 0.0345% | 0.0345% |
| down-filled pillow (`down_pillow`) | 0.0254% | 0.0345% | 0.0345% |
| draw plate (`draw_plate`) | 0.0254% | 0.0345% | 0.0345% |
| dried seaweed (`dry_seaweed`) | 0.0254% | 0.0345% | 0.0345% |
| electric firestarter (`crude_firestarter`) | 0.0254% | 0.0345% | 0.0345% |
| electronic scrap (`e_scrap`) | 0.0254% | 0.0345% | 0.0345% |
| ember carrier (`tinderbox`) | 0.0254% | 0.0345% | 0.0345% |
| faux fur patch (`faux_fur`) | 0.0254% | 0.0345% | 0.0345% |
| feather (`feather`) | 0.0254% | 0.0345% | 0.0345% |
| felt patch (`felt_patch`) | 0.0254% | 0.0345% | 0.0345% |
| fiber insulation batt (`rock_wool_bat`) | 0.0254% | 0.0345% | 0.0345% |
| field stone (`field_stone`) | 0.0254% | 0.0345% | 0.0345% |
| fishing hook (`fishing_hook_basic`) | 0.0254% | 0.0345% | 0.0345% |
| folded cardboard box (`box_medium_folded`) | 0.0254% | 0.0345% | 0.0345% |
| funnel (`funnel`) | 0.0254% | 0.0345% | 0.0345% |
| fur patch (`fur`) | 0.0254% | 0.0345% | 0.0345% |
| fur rollmat (`fur_rollmat`) | 0.0254% | 0.0345% | 0.0345% |
| fuse (`fuse`) | 0.0254% | 0.0345% | 0.0345% |
| gambeson batting (`gambeson_batting`) | 0.0254% | 0.0345% | 0.0345% |
| garlic press (`garlic_press`) | 0.0254% | 0.0345% | 0.0345% |
| glass bladed macuahuitl (`glass_macuahuitl`) | 0.0254% | 0.0345% | 0.0345% |
| glass bladed tepoztopili (`aztec_spear_glass`) | 0.0254% | 0.0345% | 0.0345% |
| glass prism (`glass_prism`) | 0.0254% | 0.0345% | 0.0345% |
| glass shard (`glass_shard`) | 0.0254% | 0.0345% | 0.0345% |
| gold (`gold_small`) | 0.0254% | 0.0345% | 0.0345% |
| grass yarn (`grass_yarn`) | 0.0254% | 0.0345% | 0.0345% |
| gravel (`material_gravel`) | 0.0254% | 0.0345% | 0.0345% |
| great pipe mace (`mace_pipe_large`) | 0.0254% | 0.0345% | 0.0345% |
| hammock (`hammock`) | 0.0254% | 0.0345% | 0.0345% |
| hand controls (`hand_controls`) | 0.0254% | 0.0345% | 0.0345% |
| handful of leaves (`leaves`) | 0.0254% | 0.0345% | 0.0345% |
| hardened steel chain link (`ch_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| hardened steel wire (`ch_wire`) | 0.0254% | 0.0345% | 0.0345% |
| heating element (`element`) | 0.0254% | 0.0345% | 0.0345% |
| heavy duty thread (`thread_canvas`) | 0.0254% | 0.0345% | 0.0345% |
| heavy wire rack (`heavy_wire_rack`) | 0.0254% | 0.0345% | 0.0345% |
| high steel chain link (`hc_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| high steel wire (`hc_wire`) | 0.0254% | 0.0345% | 0.0345% |
| hinge (`hinge`) | 0.0254% | 0.0345% | 0.0345% |
| hotcut (`hotcut`) | 0.0254% | 0.0345% | 0.0345% |
| improvised fishing hook (`fishing_hook_bone`) | 0.0254% | 0.0345% | 0.0345% |
| kerosene (`lamp_oil`) | 0.0254% | 0.0345% | 0.0345% |
| Kevlar scraps (`scrap_kevlar`) | 0.0254% | 0.0345% | 0.0345% |
| Kevlar sheet (`sheet_kevlar`) | 0.0254% | 0.0345% | 0.0345% |
| kiddie spoon (`plastic_spoon_kids`) | 0.0254% | 0.0345% | 0.0345% |
| large canine skull (`skull_canis`) | 0.0254% | 0.0345% | 0.0345% |
| large folded cardboard box (`box_large_folded`) | 0.0254% | 0.0345% | 0.0345% |
| large wooden club (`club_wooden_large`) | 0.0254% | 0.0345% | 0.0345% |
| lead (`lead`) | 0.0254% | 0.0345% | 0.0345% |
| leather funnel (`leather_funnel`) | 0.0254% | 0.0345% | 0.0345% |
| leather patch (`leather`) | 0.0254% | 0.0345% | 0.0345% |
| leather scraps (`scrap_leather`) | 0.0254% | 0.0345% | 0.0345% |
| leather sheet (`sheet_leather`) | 0.0254% | 0.0345% | 0.0345% |
| light bulb (`light_bulb`) | 0.0254% | 0.0345% | 0.0345% |
| lime mortar (`mortar_lime`) | 0.0254% | 0.0345% | 0.0345% |
| long cordage piece (`cordage_36`) | 0.0254% | 0.0345% | 0.0345% |
| long leather lace (`cordage_36_leather`) | 0.0254% | 0.0345% | 0.0345% |
| long string (`string_36`) | 0.0254% | 0.0345% | 0.0345% |
| Lycra patch (`lycra_patch`) | 0.0254% | 0.0345% | 0.0345% |
| Lycra sheet (`sheet_lycra`) | 0.0254% | 0.0345% | 0.0345% |
| magnifying glass (`magnifying_glass`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift bandage (`bandages_makeshift`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift crutches (`makeshift_crutches`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift funnel (`makeshift_funnel`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift macuahuitl (`aztec_sword_scrap`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift pillow (`makeshift_pillow`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift sap (`makeshift_sap`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift tepoztopili (`aztec_spear_scrap`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift walking cane (`makeshift_cane`) | 0.0254% | 0.0345% | 0.0345% |
| medical gauze (`medical_gauze`) | 0.0254% | 0.0345% | 0.0345% |
| medium steel chain link (`mc_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| medium steel wire (`mc_wire`) | 0.0254% | 0.0345% | 0.0345% |
| mild steel chain link (`lc_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| motorbike alternator (`alternator_motorbike`) | 0.0254% | 0.0345% | 0.0345% |
| nail (`nail`) | 0.0254% | 0.0345% | 0.0345% |
| nail bat (`nailbat`) | 0.0254% | 0.0345% | 0.0345% |
| nailboard (`nailboard`) | 0.0254% | 0.0345% | 0.0345% |
| neoprene patch (`neoprene`) | 0.0254% | 0.0345% | 0.0345% |
| Nomex patch (`nomex`) | 0.0254% | 0.0345% | 0.0345% |
| Nomex sheet (`sheet_nomex`) | 0.0254% | 0.0345% | 0.0345% |
| Nomex thread (`thread_nomex`) | 0.0254% | 0.0345% | 0.0345% |
| nord (`sword_nail`) | 0.0254% | 0.0345% | 0.0345% |
| notched plank (`notched_plank`) | 0.0254% | 0.0345% | 0.0345% |
| notched stick (`notched_stick`) | 0.0254% | 0.0345% | 0.0345% |
| oven control panel (`oven_controls`) | 0.0254% | 0.0345% | 0.0345% |
| paint brush (`paint_brush`) | 0.0254% | 0.0345% | 0.0345% |
| paint chipper (`chipper`) | 0.0254% | 0.0345% | 0.0345% |
| pair of bolt cutters (`boltcutters`) | 0.0254% | 0.0345% | 0.0345% |
| pair of tinted glass lenses (`glass_tinted`) | 0.0254% | 0.0345% | 0.0345% |
| paper (`paper`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork canvas sheet (`sheet_canvas_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork cotton sheet (`sheet_cotton_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork denim sheet (`sheet_denim_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork faux fur sheet (`sheet_faux_fur_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork felt sheet (`sheet_felt_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork fur sheet (`sheet_fur_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork Kevlar sheet (`sheet_kevlar_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork leather sheet (`sheet_leather_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork Lycra sheet (`sheet_lycra_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork neoprene sheet (`sheet_neoprene_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork Nomex sheet (`sheet_nomex_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork synthetic fabric sheet (`sheet_nylon_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| pearl (`pearl`) | 0.0254% | 0.0345% | 0.0345% |
| peasant flail (`2h_flail_wood`) | 0.0254% | 0.0345% | 0.0345% |
| pebble (`pebble`) | 0.0254% | 0.0345% | 0.0345% |
| piece of birchbark (`birchbark`) | 0.0254% | 0.0345% | 0.0345% |
| piece of cardboard (`cardboard`) | 0.0254% | 0.0345% | 0.0345% |
| pig skull (`skull_pig`) | 0.0254% | 0.0345% | 0.0345% |
| pile of dried seaweed (`dry_seaweed_pile`) | 0.0254% | 0.0345% | 0.0345% |
| pillow (`pillow`) | 0.0254% | 0.0345% | 0.0345% |
| pilot light (`pilot_light`) | 0.0254% | 0.0345% | 0.0345% |
| pinecone (`pinecone`) | 0.0254% | 0.0345% | 0.0345% |
| pipe staff (`staff_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| plank (`2x4`) | 0.0254% | 0.0345% | 0.0345% |
| plastic fork (`plastic_fork`) | 0.0254% | 0.0345% | 0.0345% |
| plastic gasket (`gasket_plastic`) | 0.0254% | 0.0345% | 0.0345% |
| plastic shank (`sharp_toothbrush`) | 0.0254% | 0.0345% | 0.0345% |
| plastic sheet (`plastic_sheet_small`) | 0.0254% | 0.0345% | 0.0345% |
| quarterstaff (`q_staff`) | 0.0254% | 0.0345% | 0.0345% |
| rabbit skull (`skull_rabbit`) | 0.0254% | 0.0345% | 0.0345% |
| radio (off) (`radio`) | 0.0254% | 0.0345% | 0.0345% |
| raw copper wire (`copper_wire`) | 0.0254% | 0.0345% | 0.0345% |
| razor blade (`razor_blade`) | 0.0254% | 0.0345% | 0.0345% |
| reading light (`reading_light`) | 0.0254% | 0.0345% | 0.0345% |
| rigid Kevlar plate (`rigid_kevlar_plate`) | 0.0254% | 0.0345% | 0.0345% |
| rodent skull (`skull_rodent`) | 0.0254% | 0.0345% | 0.0345% |
| rolling paper (`rolling_paper`) | 0.0254% | 0.0345% | 0.0345% |
| rollmat (`rollmat`) | 0.0254% | 0.0345% | 0.0345% |
| rubber band (`rubber_band`) | 0.0254% | 0.0345% | 0.0345% |
| rubber cement (`rubber_cement`) | 0.0254% | 0.0345% | 0.0345% |
| sand (`material_sand`) | 0.0254% | 0.0345% | 0.0345% |
| scrap aluminum (`scrap_aluminum`) | 0.0254% | 0.0345% | 0.0345% |
| scrap cast iron (`scrap_cast_iron`) | 0.0254% | 0.0345% | 0.0345% |
| scrap tin (`scrap_tin`) | 0.0254% | 0.0345% | 0.0345% |
| set of pipe fittings (`pipe_fittings`) | 0.0254% | 0.0345% | 0.0345% |
| shaving razor (`razor_shaving`) | 0.0254% | 0.0345% | 0.0345% |
| shelter kit (`shelter_kit`) | 0.0254% | 0.0345% | 0.0345% |
| shillelagh (`shillelagh`) | 0.0254% | 0.0345% | 0.0345% |
| short cordage piece (`cordage_6`) | 0.0254% | 0.0345% | 0.0345% |
| short leather lace (`cordage_6_leather`) | 0.0254% | 0.0345% | 0.0345% |
| short plank (`plank_short`) | 0.0254% | 0.0345% | 0.0345% |
| short string (`string_6`) | 0.0254% | 0.0345% | 0.0345% |
| short wooden post (`wooden_post_short`) | 0.0254% | 0.0345% | 0.0345% |
| shredded rubber (`shredded_rubber`) | 0.0254% | 0.0345% | 0.0345% |
| silver (`silver_small`) | 0.0254% | 0.0345% | 0.0345% |
| simple wooden bolt (`bolt_simple_wood`) | 0.0254% | 0.0345% | 0.0345% |
| simple wooden small game arrow (`arrow_small_game_fletched`) | 0.0254% | 0.0345% | 0.0345% |
| simple wooden small game bolt (`bolt_simple_small_game`) | 0.0254% | 0.0345% | 0.0345% |
| sinew (`sinew`) | 0.0254% | 0.0345% | 0.0345% |
| sling (`sling`) | 0.0254% | 0.0345% | 0.0345% |
| slingshot (`slingshot`) | 0.0254% | 0.0345% | 0.0345% |
| small feline skull (`skull_feline_small`) | 0.0254% | 0.0345% | 0.0345% |
| small folded cardboard box (`box_small_folded`) | 0.0254% | 0.0345% | 0.0345% |
| small high-quality lens (`lens_small`) | 0.0254% | 0.0345% | 0.0345% |
| small lock and key (`lock`) | 0.0254% | 0.0345% | 0.0345% |
| small propane tank (`small_propane_tank`) | 0.0254% | 0.0345% | 0.0345% |
| small storage battery (`small_storage_battery`) | 0.0254% | 0.0345% | 0.0345% |
| small wood block (`wood_block`) | 0.0254% | 0.0345% | 0.0345% |
| spear shaft (`spear_shaft`) | 0.0254% | 0.0345% | 0.0345% |
| spinning wheel (`spinwheelitem`) | 0.0254% | 0.0345% | 0.0345% |
| steel buckle (`buckle_steel`) | 0.0254% | 0.0345% | 0.0345% |
| steel button (`button_steel`) | 0.0254% | 0.0345% | 0.0345% |
| steel wire (`lc_wire`) | 0.0254% | 0.0345% | 0.0345% |
| stone bladed tepoztopili (`aztec_spear_stone`) | 0.0254% | 0.0345% | 0.0345% |
| stone lined macuahuitl (`aztec_sword_stone`) | 0.0254% | 0.0345% | 0.0345% |
| sunflower (`sunflower`) | 0.0254% | 0.0345% | 0.0345% |
| superglue (`super_glue`) | 0.0254% | 0.0345% | 0.0345% |
| survival match (`survival_match`) | 0.0254% | 0.0345% | 0.0345% |
| synthetic fabric patch (`nylon`) | 0.0254% | 0.0345% | 0.0345% |
| synthetic fabric scraps (`scrap_nylon`) | 0.0254% | 0.0345% | 0.0345% |
| tanned hide (`tanned_hide`) | 0.0254% | 0.0345% | 0.0345% |
| tanned pelt (`tanned_pelt`) | 0.0254% | 0.0345% | 0.0345% |
| tempered steel chain link (`qt_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| tempered steel wire (`qt_wire`) | 0.0254% | 0.0345% | 0.0345% |
| thick rubber chunk (`rubber_tire_chunk`) | 0.0254% | 0.0345% | 0.0345% |
| thread (`thread`) | 0.0254% | 0.0345% | 0.0345% |
| throwing stick (`throwing_stick`) | 0.0254% | 0.0345% | 0.0345% |
| tin powder (`tin`) | 0.0254% | 0.0345% | 0.0345% |
| tinder (`tinder`) | 0.0254% | 0.0345% | 0.0345% |
| tiny canine skull (`skull_canis_small`) | 0.0254% | 0.0345% | 0.0345% |
| toaster (`toaster`) | 0.0254% | 0.0345% | 0.0345% |
| torch (`torch`) | 0.0254% | 0.0345% | 0.0345% |
| towel hanger (`towel_hanger`) | 0.0254% | 0.0345% | 0.0345% |
| transponder circuit (`transponder`) | 0.0254% | 0.0345% | 0.0345% |
| walnuts (`walnut`) | 0.0254% | 0.0345% | 0.0345% |
| washboard (`washboard`) | 0.0254% | 0.0345% | 0.0345% |
| washing kit (`wash_kit`) | 0.0254% | 0.0345% | 0.0345% |
| water faucet (`water_faucet`) | 0.0254% | 0.0345% | 0.0345% |
| welding rod (`welding_rod_steel`) | 0.0254% | 0.0345% | 0.0345% |
| withered glass apple (`glass_apple`) | 0.0254% | 0.0345% | 0.0345% |
| wooden bead (`wooden_bead`) | 0.0254% | 0.0345% | 0.0345% |
| wooden block and tackle (`block_and_tackle_wood`) | 0.0254% | 0.0345% | 0.0345% |
| wooden club (`club_wooden`) | 0.0254% | 0.0345% | 0.0345% |
| wooden fishing spear (`fishspear`) | 0.0254% | 0.0345% | 0.0345% |
| wooden shed stick (`shed_stick`) | 0.0254% | 0.0345% | 0.0345% |
| wooden tonfa (`tonfa_wood`) | 0.0254% | 0.0345% | 0.0345% |
| wool staple (`wool_staple`) | 0.0254% | 0.0345% | 0.0345% |
| yarn (`yarn`) | 0.0254% | 0.0345% | 0.0345% |
| zinc (`zinc_metal`) | 0.0254% | 0.0345% | 0.0345% |
| zweitimber (`sword_wood_large`) | 0.0254% | 0.0345% | 0.0345% |
| bleached makeshift bandage (`bandages_makeshift_bleached`) | 0.0000% | 0.0344% | 0.0344% |
| 10.1 ounce squeeze tube (`squeeze_tube`) | 0.0151% | 0.0343% | 0.0343% |
| 2.8 ounce squeeze tube (`squeeze_tube_small`) | 0.0151% | 0.0343% | 0.0343% |
| acetylene cooker (`acetylene_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| adjustable wrench (`wrench`) | 0.0151% | 0.0343% | 0.0343% |
| aluminum bat (`bat_metal`) | 0.0151% | 0.0343% | 0.0343% |
| aluminum frying pan (`aluminum_pan`) | 0.0151% | 0.0343% | 0.0343% |
| aluminum pot (`pot_aluminum`) | 0.0151% | 0.0343% | 0.0343% |
| balloon (`balloon`) | 0.0151% | 0.0343% | 0.0343% |
| basket fish trap (`fish_trap_basket`) | 0.0151% | 0.0343% | 0.0343% |
| bike basket (`bike_basket`) | 0.0151% | 0.0343% | 0.0343% |
| blade (`blade`) | 0.0151% | 0.0343% | 0.0343% |
| bone billet (`billet_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone needle (`needle_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone punch (`punch_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone sewing awl (`awl_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone shiv (`bone_knife`) | 0.0151% | 0.0343% | 0.0343% |
| bone skewer (`skewer_bone`) | 0.0151% | 0.0343% | 0.0343% |
| boulder anvil (`boulder_anvil`) | 0.0151% | 0.0343% | 0.0343% |
| bow fire drill (`fire_drill`) | 0.0151% | 0.0343% | 0.0343% |
| bow saw (`bow_saw`) | 0.0151% | 0.0343% | 0.0343% |
| boxcutter knife (`boxcutter`) | 0.0151% | 0.0343% | 0.0343% |
| brick (`brick`) | 0.0151% | 0.0343% | 0.0343% |
| bronze hammer (`hammer_bronze`) | 0.0151% | 0.0343% | 0.0343% |
| bronze wood saw (`saw_bronze`) | 0.0151% | 0.0343% | 0.0343% |
| bucket (`bucket`) | 0.0151% | 0.0343% | 0.0343% |
| butchering kit (`butchering_kit`) | 0.0151% | 0.0343% | 0.0343% |
| butterfly sword (`butterfly_swords`) | 0.0151% | 0.0343% | 0.0343% |
| canvas bag (`bag_canvas_small`) | 0.0151% | 0.0343% | 0.0343% |
| canvas sack (`bag_canvas`) | 0.0151% | 0.0343% | 0.0343% |
| casserole pot (`casserole`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic bowl (`ceramic_bowl`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic cup (`ceramic_cup`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic plate (`ceramic_plate`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic shard (`ceramic_shard`) | 0.0151% | 0.0343% | 0.0343% |
| chunk of aluminum (`material_aluminium_ingot`) | 0.0151% | 0.0343% | 0.0343% |
| chunk of mild steel (`lc_steel_chunk`) | 0.0151% | 0.0343% | 0.0343% |
| chunk of steel (`steel_chunk`) | 0.0151% | 0.0343% | 0.0343% |
| cigarette pack (`box_cigarette`) | 0.0151% | 0.0343% | 0.0343% |
| clamp (`clamp`) | 0.0151% | 0.0343% | 0.0343% |
| clay bowl (`bowl_clay`) | 0.0151% | 0.0343% | 0.0343% |
| clay canister (`clay_canister`) | 0.0151% | 0.0343% | 0.0343% |
| clay cup (`clay_cup`) | 0.0151% | 0.0343% | 0.0343% |
| clay jug (`jug_clay`) | 0.0151% | 0.0343% | 0.0343% |
| clay pot (`clay_pot`) | 0.0151% | 0.0343% | 0.0343% |
| clay teapot (`clay_teapot`) | 0.0151% | 0.0343% | 0.0343% |
| cleaver (`knife_cleaver`) | 0.0151% | 0.0343% | 0.0343% |
| coal/charcoal cooker (`charcoal_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| coconut bowl (`bowl_coconut`) | 0.0151% | 0.0343% | 0.0343% |
| coffee mug (`ceramic_mug`) | 0.0151% | 0.0343% | 0.0343% |
| coffee pot (`coffeepot`) | 0.0151% | 0.0343% | 0.0343% |
| coffeemaker (`coffeemaker`) | 0.0151% | 0.0343% | 0.0343% |
| condom (`condom`) | 0.0151% | 0.0343% | 0.0343% |
| copper frying pan (`copper_pan`) | 0.0151% | 0.0343% | 0.0343% |
| copper hatchet (`copper_ax`) | 0.0151% | 0.0343% | 0.0343% |
| copper knife (`copper_knife`) | 0.0151% | 0.0343% | 0.0343% |
| copper pot (`pot_copper`) | 0.0151% | 0.0343% | 0.0343% |
| cotton patch (`cotton_patchwork`) | 0.0151% | 0.0343% | 0.0343% |
| crucible (`crucible`) | 0.0151% | 0.0343% | 0.0343% |
| curved needle (`needle_curved`) | 0.0151% | 0.0343% | 0.0343% |
| digging stick (`digging_stick`) | 0.0151% | 0.0343% | 0.0343% |
| drinking glass (`glass`) | 0.0151% | 0.0343% | 0.0343% |
| duct tape wallet (`wallet_duct_tape`) | 0.0151% | 0.0343% | 0.0343% |
| electrohack (`electrohack`) | 0.0151% | 0.0343% | 0.0343% |
| empty canister (`canister_empty`) | 0.0151% | 0.0343% | 0.0343% |
| fiber mat (`fiber_mat`) | 0.0151% | 0.0343% | 0.0343% |
| fire brick (`fire_brick`) | 0.0151% | 0.0343% | 0.0343% |
| fire-hardened wooden spear (`spear_wood`) | 0.0151% | 0.0343% | 0.0343% |
| foil cup (`cup_foil`) | 0.0151% | 0.0343% | 0.0343% |
| foil wrapper (`wrapper_foil`) | 0.0151% | 0.0343% | 0.0343% |
| foldable plastic bottle (`bottle_folding`) | 0.0151% | 0.0343% | 0.0343% |
| garbage bag (`bag_garbage`) | 0.0151% | 0.0343% | 0.0343% |
| gasoline cooker (`gasoline_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| glass bowl (`glass_bowl`) | 0.0151% | 0.0343% | 0.0343% |
| glass plate (`glass_plate`) | 0.0151% | 0.0343% | 0.0343% |
| glass seasoning bottle (`bottle_glass_seasoning`) | 0.0151% | 0.0343% | 0.0343% |
| glass shiv (`glass_shiv`) | 0.0151% | 0.0343% | 0.0343% |
| grip hook (`grip_hook`) | 0.0151% | 0.0343% | 0.0343% |
| hacksaw (`hacksaw`) | 0.0151% | 0.0343% | 0.0343% |
| hammer (`hammer`) | 0.0151% | 0.0343% | 0.0343% |
| hand drill (`hand_drill`) | 0.0151% | 0.0343% | 0.0343% |
| hand pump (`hand_pump`) | 0.0151% | 0.0343% | 0.0343% |
| handheld glass cutter (`glass_cutter`) | 0.0151% | 0.0343% | 0.0343% |
| hatchet (`hatchet`) | 0.0151% | 0.0343% | 0.0343% |
| hexamine stove (`esbit_stove`) | 0.0151% | 0.0343% | 0.0343% |
| hobo stove (`hobo_stove`) | 0.0151% | 0.0343% | 0.0343% |
| huge kitchen knife (`knife_huge`) | 0.0151% | 0.0343% | 0.0343% |
| improvised lockpick (`crude_picklock`) | 0.0151% | 0.0343% | 0.0343% |
| IV bag (`bag_iv`) | 0.0151% | 0.0343% | 0.0343% |
| kettle (`kettle`) | 0.0151% | 0.0343% | 0.0343% |
| kiddie bowl (`plastic_bowl_kids`) | 0.0151% | 0.0343% | 0.0343% |
| large kitchen knife (`knife_large`) | 0.0151% | 0.0343% | 0.0343% |
| large rifle conversion kit (`box_retool_large`) | 0.0151% | 0.0343% | 0.0343% |
| large sealed stomach (`large_stomach_sealed`) | 0.0151% | 0.0343% | 0.0343% |
| large tin can (`can_food_big`) | 0.0151% | 0.0343% | 0.0343% |
| large wooden bowl (`bowl_wood_large`) | 0.0151% | 0.0343% | 0.0343% |
| leather bellow (`leather_bellow`) | 0.0151% | 0.0343% | 0.0343% |
| leather wallet (`wallet_leather`) | 0.0151% | 0.0343% | 0.0343% |
| locking pliers (`pliers_locking`) | 0.0151% | 0.0343% | 0.0343% |
| lump of steel (`steel_lump`) | 0.0151% | 0.0343% | 0.0343% |
| lunchbox (`lunchbox`) | 0.0151% | 0.0343% | 0.0343% |
| machete (`machete`) | 0.0151% | 0.0343% | 0.0343% |
| maker kit box (`maker_kit_box`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift brazier (`makeshift_brazier`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift copper pot (`pot_makeshift_copper`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift crowbar (`makeshift_crowbar`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift hammer (`makeshift_hammer`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift hand drill (`makeshift_hand_drill`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift knife (`makeshift_knife`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift machete (`makeshift_machete`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift sieve (`sieve_steel_makeshift`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift tree spile (`makeshift_tree_spile`) | 0.0151% | 0.0343% | 0.0343% |
| mess kit (`mess_kit`) | 0.0151% | 0.0343% | 0.0343% |
| metal axe head (`makeshift_axe`) | 0.0151% | 0.0343% | 0.0343% |
| metal fileset (`metal_file`) | 0.0151% | 0.0343% | 0.0343% |
| metal paint can (`paint_can_steel`) | 0.0151% | 0.0343% | 0.0343% |
| metal tank (2 L) (`metal_tank_little`) | 0.0151% | 0.0343% | 0.0343% |
| metalworking chisel (`chisel`) | 0.0151% | 0.0343% | 0.0343% |
| micro-carbine conversion kit (`box_retool_sbr_micro`) | 0.0151% | 0.0343% | 0.0343% |
| milk carton (`carton_milk`) | 0.0151% | 0.0343% | 0.0343% |
| mop (`mop`) | 0.0151% | 0.0343% | 0.0343% |
| MRE bag (`mre_bag`) | 0.0151% | 0.0343% | 0.0343% |
| MRE dessert bag (`mre_bag_dessert`) | 0.0151% | 0.0343% | 0.0343% |
| MRE jam bag (`mre_bag_jam`) | 0.0151% | 0.0343% | 0.0343% |
| MRE package (`mre_package`) | 0.0151% | 0.0343% | 0.0343% |
| MRE spread bag (`mre_bag_spread`) | 0.0151% | 0.0343% | 0.0343% |
| nail punch (`punch_nail`) | 0.0151% | 0.0343% | 0.0343% |
| needle (`needle_steel`) | 0.0151% | 0.0343% | 0.0343% |
| pair of flatjaw tongs (`metalworking_tongs`) | 0.0151% | 0.0343% | 0.0343% |
| pair of kitchen tongs (`tongs`) | 0.0151% | 0.0343% | 0.0343% |
| pair of knitting needles (`knitting_needles`) | 0.0151% | 0.0343% | 0.0343% |
| pair of office scissors (`scissors`) | 0.0151% | 0.0343% | 0.0343% |
| paper wrapper (`wrapper`) | 0.0151% | 0.0343% | 0.0343% |
| pewter bowl (`bowl_pewter`) | 0.0151% | 0.0343% | 0.0343% |
| pipe mace (`mace_pipe`) | 0.0151% | 0.0343% | 0.0343% |
| plastic bag (`bag_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| plastic fish trap (`fish_trap`) | 0.0151% | 0.0343% | 0.0343% |
| plastic hand fishing reel (`plastichoboreel`) | 0.0151% | 0.0343% | 0.0343% |
| plastic painkiller bottle (`bottle_plastic_pill_painkiller`) | 0.0151% | 0.0343% | 0.0343% |
| plastic paint can (`paint_can_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| plastic plate (`plastic_plate`) | 0.0151% | 0.0343% | 0.0343% |
| plastic prescription bottle (`bottle_plastic_pill_prescription`) | 0.0151% | 0.0343% | 0.0343% |
| plastic tumbler (`tumbler_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| plastic tupperware (`bowl_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| pliers (`pliers`) | 0.0151% | 0.0343% | 0.0343% |
| pointy stick (`pointy_stick`) | 0.0151% | 0.0343% | 0.0343% |
| pot (`pot`) | 0.0151% | 0.0343% | 0.0343% |
| primitive rock drill (`drill_rock_primitive`) | 0.0151% | 0.0343% | 0.0343% |
| pro fishing rod (`fishing_rod_professional`) | 0.0151% | 0.0343% | 0.0343% |
| propane cooker (`propane_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| pump fire drill (`fire_drill_large`) | 0.0151% | 0.0343% | 0.0343% |
| reinforced garbage bag (`bag_garbage_reinforced`) | 0.0151% | 0.0343% | 0.0343% |
| rock in a sock (`rock_sock`) | 0.0151% | 0.0343% | 0.0343% |
| rubber hose (`hose`) | 0.0151% | 0.0343% | 0.0343% |
| rudimentary lockpick (`emergency_lockpick`) | 0.0151% | 0.0343% | 0.0343% |
| sandleather (`leather_filing`) | 0.0151% | 0.0343% | 0.0343% |
| SBR conversion kit (`box_retool_sbr`) | 0.0151% | 0.0343% | 0.0343% |
| scrap sword (`sword_crude`) | 0.0151% | 0.0343% | 0.0343% |
| screwdriver (`screwdriver`) | 0.0151% | 0.0343% | 0.0343% |
| screwdriver set (`screwdriver_set`) | 0.0151% | 0.0343% | 0.0343% |
| scythe blade (`blade_scythe`) | 0.0151% | 0.0343% | 0.0343% |
| sealed stomach (`stomach_sealed`) | 0.0151% | 0.0343% | 0.0343% |
| set of clothes (`outfit_storage`) | 0.0151% | 0.0343% | 0.0343% |
| sewing kit (`sewing_kit`) | 0.0151% | 0.0343% | 0.0343% |
| sharp rock (`sharp_rock`) | 0.0151% | 0.0343% | 0.0343% |
| sharpened pipe (`sharpened_pipe`) | 0.0151% | 0.0343% | 0.0343% |
| simple mace (`mace_simple`) | 0.0151% | 0.0343% | 0.0343% |
| sippy cup (`sippy_cup`) | 0.0151% | 0.0343% | 0.0343% |
| skull bowl (`bowl_skull`) | 0.0151% | 0.0343% | 0.0343% |
| small adjustable wrench (`wrench_small`) | 0.0151% | 0.0343% | 0.0343% |
| small biogas tank (`small_biogas_tank`) | 0.0151% | 0.0343% | 0.0343% |
| small cardboard box (`box_small`) | 0.0151% | 0.0343% | 0.0343% |
| small glass tube (`glass_tube_small`) | 0.0151% | 0.0343% | 0.0343% |
| small kitchen knife (`knife_small`) | 0.0151% | 0.0343% | 0.0343% |
| small metal box (`box_small_metal`) | 0.0151% | 0.0343% | 0.0343% |
| small plastic bag (`bag_plastic_small`) | 0.0151% | 0.0343% | 0.0343% |
| small plastic seasoning bottle (`bottle_plastic_seasoning_small`) | 0.0151% | 0.0343% | 0.0343% |
| small tin can (`can_food`) | 0.0151% | 0.0343% | 0.0343% |
| small wooden box (`box_small_wood`) | 0.0151% | 0.0343% | 0.0343% |
| spike (`spike`) | 0.0151% | 0.0343% | 0.0343% |
| splintered wood (`splinter`) | 0.0151% | 0.0343% | 0.0343% |
| steel bottle (`bottle_metal`) | 0.0151% | 0.0343% | 0.0343% |
| steel frying pan (`steel_pan`) | 0.0151% | 0.0343% | 0.0343% |
| steel sewing awl (`awl_steel`) | 0.0151% | 0.0343% | 0.0343% |
| steel tankard (`tankard_metal`) | 0.0151% | 0.0343% | 0.0343% |
| stone adze (`primitive_adze`) | 0.0151% | 0.0343% | 0.0343% |
| stone axe (`primitive_axe`) | 0.0151% | 0.0343% | 0.0343% |
| stone axe head (`hand_axe`) | 0.0151% | 0.0343% | 0.0343% |
| stone chisel (`stone_chisel`) | 0.0151% | 0.0343% | 0.0343% |
| stone chopper (`stone_chopper`) | 0.0151% | 0.0343% | 0.0343% |
| stone hammer (`primitive_hammer`) | 0.0151% | 0.0343% | 0.0343% |
| stone knife (`primitive_knife`) | 0.0151% | 0.0343% | 0.0343% |
| stone sickle (`sickle_stone`) | 0.0151% | 0.0343% | 0.0343% |
| storage line (`storage_line`) | 0.0151% | 0.0343% | 0.0343% |
| superalloy sheet (`alloy_sheet`) | 0.0151% | 0.0343% | 0.0343% |
| survival kit box (`survival_kit_box`) | 0.0151% | 0.0343% | 0.0343% |
| survival knife (`knife_rambo`) | 0.0151% | 0.0343% | 0.0343% |
| tailor's kit (`tailors_kit`) | 0.0151% | 0.0343% | 0.0343% |
| teapot (`teapot`) | 0.0151% | 0.0343% | 0.0343% |
| telescoping fishing rod (`fishing_rod_tele`) | 0.0151% | 0.0343% | 0.0343% |
| tiger claws (`bagh_nakha`) | 0.0151% | 0.0343% | 0.0343% |
| tin cup (`tin_cup`) | 0.0151% | 0.0343% | 0.0343% |
| tin plate (`tin_plate`) | 0.0151% | 0.0343% | 0.0343% |
| tin snips (`tin_snips`) | 0.0151% | 0.0343% | 0.0343% |
| tiny plastic bottle (`bottle_plastic_tiny`) | 0.0151% | 0.0343% | 0.0343% |
| tobacco pipe (`pipe_tobacco`) | 0.0151% | 0.0343% | 0.0343% |
| tongue-and-groove pliers (`big_pliers`) | 0.0151% | 0.0343% | 0.0343% |
| trench mace (`mace_trench`) | 0.0151% | 0.0343% | 0.0343% |
| two-piece fishing rod (`fishing_rod_2pc`) | 0.0151% | 0.0343% | 0.0343% |
| vacuum-packed bag (`plastic_bag_vac`) | 0.0151% | 0.0343% | 0.0343% |
| water pipe (`pipe_water`) | 0.0151% | 0.0343% | 0.0343% |
| wicker sieve (`sieve_primitive`) | 0.0151% | 0.0343% | 0.0343% |
| wine glass (`wine_glass`) | 0.0151% | 0.0343% | 0.0343% |
| wood saw (`saw`) | 0.0151% | 0.0343% | 0.0343% |
| wooden billet (`billet_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden bowl (`bowl_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden bucket (`bucket_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden hand fishing reel (`hoboreel`) | 0.0151% | 0.0343% | 0.0343% |
| wooden needle (`needle_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden tankard (`tankard_wooden`) | 0.0151% | 0.0343% | 0.0343% |
| zipper bag (`bag_zipper`) | 0.0151% | 0.0343% | 0.0343% |
| 101 Crafts for Beginners (`manual_fabrication`) | 0.0295% | 0.0295% | 0.0295% |
| Advanced Electronics (`advanced_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| Amateur Home Radio for Enthusiasts (`radio_book`) | 0.0295% | 0.0295% | 0.0295% |
| Chemistry for Kids: Awesome Science Experiments that Really Work (`basic_chemistry`) | 0.0295% | 0.0295% | 0.0295% |
| chemistry textbook (`textbook_chemistry`) | 0.0295% | 0.0295% | 0.0295% |
| Close Quarter Fighting Manual (`manual_melee`) | 0.0295% | 0.0295% | 0.0295% |
| Cooking on a Budget (`cookbook`) | 0.0295% | 0.0295% | 0.0295% |
| durable plastic sack, cement (`bag_durasack_cement`) | 0.0295% | 0.0295% | 0.0295% |
| Electronic Circuit Theory (`textbook_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| Ham Radio Illustrated (`mag_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| Historic Warfare: The Bronze Age (`bronze_mag`) | 0.0295% | 0.0295% | 0.0295% |
| Pitching a Tent (`manual_survival`) | 0.0295% | 0.0295% | 0.0295% |
| Pocket Survival Guide (`pocket_survival`) | 0.0295% | 0.0295% | 0.0295% |
| robotics kit instructions (`manual_robotics_kit`) | 0.0295% | 0.0295% | 0.0295% |
| Sew What? Clothing! (`manual_tailor`) | 0.0295% | 0.0295% | 0.0295% |
| Stirling engine kit instructions (`manual_engine_kit`) | 0.0295% | 0.0295% | 0.0295% |
| Studies in Historic Armorsmithing (`textbook_armwest`) | 0.0295% | 0.0295% | 0.0295% |
| The Big Book of First Aid (`manual_first_aid`) | 0.0295% | 0.0295% | 0.0295% |
| The Book of Dances (`manual_dodge`) | 0.0295% | 0.0295% | 0.0295% |
| The Essential Oil Enthusiasts Handbook (`textbook_extraction`) | 0.0295% | 0.0295% | 0.0295% |
| Under the Hood (`manual_mechanics`) | 0.0295% | 0.0295% | 0.0295% |
| What's a Transistor? (`manual_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| cot (`cot`) | 0.0254% | 0.0254% | 0.0254% |
| electric spinwheel (`electric_spinwheel`) | 0.0254% | 0.0254% | 0.0254% |
| frame loom (`loom_frame`) | 0.0254% | 0.0254% | 0.0254% |
| hand press (`press`) | 0.0254% | 0.0254% | 0.0254% |
| long plank (`plank_long`) | 0.0254% | 0.0254% | 0.0254% |
| long stick (`stick_long`) | 0.0254% | 0.0254% | 0.0254% |
| makerspace kit for STEM (`engineering_makerspace_kit`) | 0.0254% | 0.0254% | 0.0254% |
| rubber tire strip (`rubber_tire_strip`) | 0.0254% | 0.0254% | 0.0254% |
| small sandcasting mold (`casting_mold_small`) | 0.0254% | 0.0254% | 0.0254% |
| wooden armor kit (`wood_plate`) | 0.0254% | 0.0254% | 0.0254% |
| wooden post (`wooden_post`) | 0.0254% | 0.0254% | 0.0254% |
| wooden stool (`stool_wood`) | 0.0254% | 0.0254% | 0.0254% |
| yellow carpet (`y_carpet`) | 0.0254% | 0.0254% | 0.0254% |
| adobe brick (`adobe_brick`) | 0.0151% | 0.0242% | 0.0242% |
| basic fishing rod (`fishing_rod_basic`) | 0.0151% | 0.0242% | 0.0242% |
| basic pipe spear (`simple_spear_pipe`) | 0.0151% | 0.0242% | 0.0242% |
| battle axe (`battleaxe`) | 0.0151% | 0.0242% | 0.0242% |
| bill (`brush_axe`) | 0.0151% | 0.0242% | 0.0242% |
| body bag (`bag_body_bag`) | 0.0151% | 0.0242% | 0.0242% |
| bolted battle axe (`ax_sheets_bolted`) | 0.0151% | 0.0242% | 0.0242% |
| cast-iron frying pan (`pan`) | 0.0151% | 0.0242% | 0.0242% |
| cast-iron pot (`iron_pot`) | 0.0151% | 0.0242% | 0.0242% |
| chunk of budget steel (`budget_steel_chunk`) | 0.0151% | 0.0242% | 0.0242% |
| clay crucible (`crucible_clay`) | 0.0151% | 0.0242% | 0.0242% |
| clay hydria (`clay_hydria`) | 0.0151% | 0.0242% | 0.0242% |
| clay urn (`clay_urn`) | 0.0151% | 0.0242% | 0.0242% |
| coin wrapper (`coin_wrapper`) | 0.0151% | 0.0242% | 0.0242% |
| cordless drill (`cordless_drill`) | 0.0151% | 0.0242% | 0.0242% |
| cordless impact wrench (`cordless_impact_wrench`) | 0.0151% | 0.0242% | 0.0242% |
| crude steel spear (`spear_steel_crude`) | 0.0151% | 0.0242% | 0.0242% |
| damaged shelter kit (`damaged_shelter_kit`) | 0.0151% | 0.0242% | 0.0242% |
| engineer's hammer (`hammer_sledge_engineer`) | 0.0151% | 0.0242% | 0.0242% |
| homemade polehammer (`homemade_polehammer`) | 0.0151% | 0.0242% | 0.0242% |
| improvised oven (`improvised_oven`) | 0.0151% | 0.0242% | 0.0242% |
| ironshod quarterstaff (`i_staff`) | 0.0151% | 0.0242% | 0.0242% |
| knife spear (`spear_knife_proper`) | 0.0151% | 0.0242% | 0.0242% |
| large adjustable wrench (`wrench_large`) | 0.0151% | 0.0242% | 0.0242% |
| leather tarp (`leather_tarp`) | 0.0151% | 0.0242% | 0.0242% |
| long pointy stick (`pointy_stick_long`) | 0.0151% | 0.0242% | 0.0242% |
| long pole (`long_pole`) | 0.0151% | 0.0242% | 0.0242% |
| lump of budget steel (`budget_steel_lump`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift glaive (`makeshift_glaive`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift homemade polehammer (`homemade_polehammer_makeshift`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift knife spear (`spear_knife_superior`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift pressure cooker (`makeshift_pressure_cooker`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift stethoscope (`makeshift_stethoscope`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift welding blanket (`makeshift_welding_blanket`) | 0.0151% | 0.0242% | 0.0242% |
| miscellaneous repair kit (`misc_repairkit`) | 0.0151% | 0.0242% | 0.0242% |
| mortar and pestle (`mortar_pestle`) | 0.0151% | 0.0242% | 0.0242% |
| plastic gasket set (`gasket_plastic_set`) | 0.0151% | 0.0242% | 0.0242% |
| plastic jerrycan (`jerrycan`) | 0.0151% | 0.0242% | 0.0242% |
| rebar (`rebar`) | 0.0151% | 0.0242% | 0.0242% |
| scrap greatsword (`sword_crude_large`) | 0.0151% | 0.0242% | 0.0242% |
| simple knife spear (`spear_knife`) | 0.0151% | 0.0242% | 0.0242% |
| simple makeshift glaive (`makeshift_halberd`) | 0.0151% | 0.0242% | 0.0242% |
| spike on a stick (`spear_spike`) | 0.0151% | 0.0242% | 0.0242% |
| stock pot (`stock_pot`) | 0.0151% | 0.0242% | 0.0242% |
| stone spear (`spear_stone`) | 0.0151% | 0.0242% | 0.0242% |
| survivor mess kit (`survivor_mess_kit`) | 0.0151% | 0.0242% | 0.0242% |
| swage and die set (`swage`) | 0.0151% | 0.0242% | 0.0242% |
| thread cutting set (`thread_cutting_set`) | 0.0151% | 0.0242% | 0.0242% |
| toolbox (`toolbox_empty`) | 0.0151% | 0.0242% | 0.0242% |
| welded battle axe (`ax_sheets_welded`) | 0.0151% | 0.0242% | 0.0242% |
| wood axe (`ax`) | 0.0151% | 0.0242% | 0.0242% |
| wooden javelin (`javelin`) | 0.0151% | 0.0242% | 0.0242% |
| wooden shovel (`primitive_shovel`) | 0.0151% | 0.0242% | 0.0242% |
| wooden smoother (`wood_smoother`) | 0.0151% | 0.0242% | 0.0242% |
| X-Acto knife (`xacto`) | 0.0151% | 0.0242% | 0.0242% |
| amplifier circuit (`amplifier`) | 0.0000% | 0.0181% | 0.0181% |
| antenna (`antenna`) | 0.0000% | 0.0181% | 0.0181% |
| barbed wire (`wire_barbed`) | 0.0000% | 0.0181% | 0.0181% |
| battery charger (`battery_charger`) | 0.0000% | 0.0181% | 0.0181% |
| big tool battery (`heavy_plus_battery_cell`) | 0.0000% | 0.0181% | 0.0181% |
| carbon electrode rod (`carbon_electrode`) | 0.0000% | 0.0181% | 0.0181% |
| circuit board (`circuit`) | 0.0000% | 0.0181% | 0.0181% |
| copper wire (`cable`) | 0.0000% | 0.0181% | 0.0181% |
| electric lantern (off) (`electric_lantern`) | 0.0000% | 0.0181% | 0.0181% |
| electrolysis kit (`electrolysis_kit`) | 0.0000% | 0.0181% | 0.0181% |
| electronics control unit (`electronics_controls`) | 0.0000% | 0.0181% | 0.0181% |
| flashlight (off) (`flashlight`) | 0.0000% | 0.0181% | 0.0181% |
| hand-crank charger (`hand_crank_charger`) | 0.0000% | 0.0181% | 0.0181% |
| hotplate (`hotplate`) | 0.0000% | 0.0181% | 0.0181% |
| instrument cable (`cable_instrument`) | 0.0000% | 0.0181% | 0.0181% |
| makeshift arc welder (`welder_crude`) | 0.0000% | 0.0181% | 0.0181% |
| micro electric motor (`motor_micro`) | 0.0000% | 0.0181% | 0.0181% |
| motorbike battery (`battery_motorbike`) | 0.0000% | 0.0181% | 0.0181% |
| motorcycle police boots (pair) (`motor_police_boots`) | 0.0000% | 0.0181% | 0.0181% |
| multimeter (`multimeter`) | 0.0000% | 0.0181% | 0.0181% |
| portable soldering iron (`soldering_iron_portable`) | 0.0000% | 0.0181% | 0.0181% |
| power converter (`power_supply`) | 0.0000% | 0.0181% | 0.0181% |
| signal receiver (`receiver`) | 0.0000% | 0.0181% | 0.0181% |
| small electric motor (`motor_small`) | 0.0000% | 0.0181% | 0.0181% |
| small motorbike battery (`battery_motorbike_small`) | 0.0000% | 0.0181% | 0.0181% |
| solar panel (`solar_panel`) | 0.0000% | 0.0181% | 0.0181% |
| solder (`solder_wire`) | 0.0000% | 0.0181% | 0.0181% |
| soldering iron (`soldering_iron`) | 0.0000% | 0.0181% | 0.0181% |
| speaker cable (`cable_speaker`) | 0.0000% | 0.0181% | 0.0181% |
| steel mesh (`wire_mesh`) | 0.0000% | 0.0181% | 0.0181% |
| tiny electric motor (`motor_tiny`) | 0.0000% | 0.0181% | 0.0181% |
| ultra-light battery (rechargeable) (`light_minus_battery_cell`) | 0.0000% | 0.0181% | 0.0181% |
| wire (`wire`) | 0.0000% | 0.0181% | 0.0181% |
| XLR cable (`cable_xlr`) | 0.0000% | 0.0181% | 0.0181% |
| bench vise (`bench_vise`) | 0.0151% | 0.0151% | 0.0151% |
| cast-iron dutch oven (`dutch_oven`) | 0.0151% | 0.0151% | 0.0151% |
| heavy sledge hammer (`hammer_sledge_heavy`) | 0.0151% | 0.0151% | 0.0151% |
| homewrecker (`homewrecker`) | 0.0151% | 0.0151% | 0.0151% |
| makeshift pot (`pot_makeshift`) | 0.0151% | 0.0151% | 0.0151% |
| makeshift war scythe (`makeshift_scythe_war`) | 0.0151% | 0.0151% | 0.0151% |
| muffler (`muffler`) | 0.0151% | 0.0151% | 0.0151% |
| polishing stone (`stone_polishing`) | 0.0151% | 0.0151% | 0.0151% |
| pressure cooker (`pressure_cooker`) | 0.0151% | 0.0151% | 0.0151% |
| short sledge hammer (`hammer_sledge_short`) | 0.0151% | 0.0151% | 0.0151% |
| sledge hammer (`hammer_sledge`) | 0.0151% | 0.0151% | 0.0151% |
| still (`still`) | 0.0151% | 0.0151% | 0.0151% |
| superalloy plating (`alloy_plate`) | 0.0151% | 0.0151% | 0.0151% |
| the Disorder (`pulverizer`) | 0.0151% | 0.0151% | 0.0151% |
| large tactical backpack (`backpack_tactical_large`) | 0.0021% | 0.0146% | 0.0146% |
| leather backpack (`backpack_leather`) | 0.0021% | 0.0146% | 0.0146% |
| net backpack (`net_backpack`) | 0.0021% | 0.0146% | 0.0146% |
| wicker backpack (`wicker_backpack`) | 0.0021% | 0.0146% | 0.0146% |
| arc welder (`welder`) | 0.0000% | 0.0091% | 0.0091% |
| circular saw (off) (`circsaw_off`) | 0.0000% | 0.0091% | 0.0091% |
| electric forge (`forge`) | 0.0000% | 0.0091% | 0.0091% |
| headlamp (`wearable_light`) | 0.0000% | 0.0091% | 0.0091% |
| heavy-duty flashlight (off) (`heavy_flashlight`) | 0.0000% | 0.0091% | 0.0091% |
| heavy-duty headlamp (`wearable_big_light`) | 0.0000% | 0.0091% | 0.0091% |
| high-temperature welding kit (`welding_kit`) | 0.0000% | 0.0091% | 0.0091% |
| manual oil press (`oil_press_manual`) | 0.0000% | 0.0091% | 0.0091% |
| bacon (`bacon`) | 0.0048% | 0.0048% | 0.0048% |
| banana (`banana`) | 0.0048% | 0.0048% | 0.0048% |
| batter fried fish (`fish_fried`) | 0.0048% | 0.0048% | 0.0048% |
| beans and rice (`beansnrice`) | 0.0048% | 0.0048% | 0.0048% |
| black pepper (`pepper`) | 0.0048% | 0.0048% | 0.0048% |
| BLT (`blt`) | 0.0048% | 0.0048% | 0.0048% |
| boiled stomach (`small_stomach_boiled`) | 0.0048% | 0.0048% | 0.0048% |
| bone meal (`meal_bone`) | 0.0048% | 0.0048% | 0.0048% |
| boring sandwich (`sandwich_sauce`) | 0.0048% | 0.0048% | 0.0048% |
| bottle gourd seeds (`seed_bottle_gourd`) | 0.0048% | 0.0048% | 0.0048% |
| buttercream icing (`buttercream`) | 0.0048% | 0.0048% | 0.0048% |
| buttermilk (`buttermilk`) | 0.0048% | 0.0048% | 0.0048% |
| campfire hot dog (`hotdogs_campfire`) | 0.0048% | 0.0048% | 0.0048% |
| canned corn (`can_corn`) | 0.0048% | 0.0048% | 0.0048% |
| canned sardine (`can_sardine`) | 0.0048% | 0.0048% | 0.0048% |
| canned tuna fish (`can_tuna`) | 0.0048% | 0.0048% | 0.0048% |
| carrot pound cake (`mre_carrot_cake`) | 0.0048% | 0.0048% | 0.0048% |
| chaff (`chaff`) | 0.0048% | 0.0048% | 0.0048% |
| cheese (`cheese`) | 0.0048% | 0.0048% | 0.0048% |
| cheese fries (`cheese_fries`) | 0.0048% | 0.0048% | 0.0048% |
| cheese grits (`cheese_grits`) | 0.0048% | 0.0048% | 0.0048% |
| cheese nachos (`nachosc`) | 0.0048% | 0.0048% | 0.0048% |
| cheese sandwich (`sandwich_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| cheeseburger (`cheeseburger`) | 0.0048% | 0.0048% | 0.0048% |
| chicory seeds (`seed_chicory`) | 0.0048% | 0.0048% | 0.0048% |
| chocolate bar (`chocolate`) | 0.0048% | 0.0048% | 0.0048% |
| chocolate milk (`milk_choc`) | 0.0048% | 0.0048% | 0.0048% |
| chocolate milkshake (`milkshake_choc`) | 0.0048% | 0.0048% | 0.0048% |
| cocoa powder (`cocoa_powder`) | 0.0048% | 0.0048% | 0.0048% |
| coffee substitute (`coffee_substitute`) | 0.0048% | 0.0048% | 0.0048% |
| coffee substitute with milk (`milk_coffee_substitute`) | 0.0048% | 0.0048% | 0.0048% |
| condensed milk (`con_milk`) | 0.0048% | 0.0048% | 0.0048% |
| cooked bell pepper (`cooked_bell_pepper`) | 0.0048% | 0.0048% | 0.0048% |
| cooked corn dog (`corndogs_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper fatty meat (`pepperfat`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper meat (`peppermeat`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper poultry (`poultry_pepper`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper scrap of meat (`pepperscrap`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper scrap of poultry (`poultry_scrap_pepper`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of brain (`brain_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of heart (`heart_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of kidney (`kidney_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of liver (`liver_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of lung (`lung_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of sweetbread (`sweetbread_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked scrap of meat (`meat_scrap_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked scrap of poultry (`poultry_scrap_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked TV dinner (`cooked_dinner`) | 0.0048% | 0.0048% | 0.0048% |
| cooked wild rice (`wild_rice_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked wild vegetables (`veggy_wild_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cornmeal (`cornmeal`) | 0.0048% | 0.0048% | 0.0048% |
| cracklins (`cracklins`) | 0.0048% | 0.0048% | 0.0048% |
| cucumber sandwich (`sandwich_cucumber`) | 0.0048% | 0.0048% | 0.0048% |
| dandelion tea (`dandelion_tea`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated chicken (`dry_poultry`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated chili pepper (`dry_chili`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated fish (`dry_fish`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated fruit (`dry_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated garlic clove (`dry_garlic`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated lobster (`dry_lobster`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated mollusk (`dry_mollusk`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated vegetable (`dry_veggy`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe beans and rice (`deluxe_beansnrice`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe chocolate milkshake (`milkshake_deluxe_choc`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe cooked oatmeal (`oatmeal_deluxe`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe milkshake (`milkshake_deluxe`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe vegetarian beans and rice (`deluxe_veggy_beansnrice`) | 0.0048% | 0.0048% | 0.0048% |
| dried bottle gourd (`dry_bottle_gourd`) | 0.0048% | 0.0048% | 0.0048% |
| dried mushroom (`dry_mushroom`) | 0.0048% | 0.0048% | 0.0048% |
| dried salad (`dried_salad`) | 0.0048% | 0.0048% | 0.0048% |
| dry wild rice (`dry_wild_rice`) | 0.0048% | 0.0048% | 0.0048% |
| egg salad (`egg_salad`) | 0.0048% | 0.0048% | 0.0048% |
| egg salad sandwich (`sandwich_egg_salad`) | 0.0048% | 0.0048% | 0.0048% |
| fast-food French fries (`fries`) | 0.0048% | 0.0048% | 0.0048% |
| fish and spinach bagel (`fish_bagel`) | 0.0048% | 0.0048% | 0.0048% |
| fish sandwich (`fish_sandwich`) | 0.0048% | 0.0048% | 0.0048% |
| fish soup (`soup_fish`) | 0.0048% | 0.0048% | 0.0048% |
| flatbread (`flatbread`) | 0.0048% | 0.0048% | 0.0048% |
| flour tortilla (`tortilla_flour`) | 0.0048% | 0.0048% | 0.0048% |
| Fluffernutter sandwich (`sandwich_pbf`) | 0.0048% | 0.0048% | 0.0048% |
| forest honey (`honey_bottled`) | 0.0048% | 0.0048% | 0.0048% |
| fortified milk (`milk_fortified`) | 0.0048% | 0.0048% | 0.0048% |
| fried chicken (`chicken_fried`) | 0.0048% | 0.0048% | 0.0048% |
| fried dandelions (`dandelion_fried`) | 0.0048% | 0.0048% | 0.0048% |
| fried meat (`meat_fried`) | 0.0048% | 0.0048% | 0.0048% |
| fried rice (`deluxe_veggy_rice`) | 0.0048% | 0.0048% | 0.0048% |
| fruit jam (`jam_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| fruit juice (`juice`) | 0.0048% | 0.0048% | 0.0048% |
| fruit tea (`tea_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| fruit tea bag (`tea_fruit_bag`) | 0.0048% | 0.0048% | 0.0048% |
| frybread (`frybread`) | 0.0048% | 0.0048% | 0.0048% |
| garlic clove (`garlic_clove`) | 0.0048% | 0.0048% | 0.0048% |
| glazed carrot (`carrot_glazed`) | 0.0048% | 0.0048% | 0.0048% |
| grapeade (`grapeade`) | 0.0048% | 0.0048% | 0.0048% |
| grapeade drink mix (`grapeade_powder`) | 0.0048% | 0.0048% | 0.0048% |
| grenadine syrup (`grenadine_syrup`) | 0.0048% | 0.0048% | 0.0048% |
| grilled cheese sandwich (`sandwich_cheese_grilled`) | 0.0048% | 0.0048% | 0.0048% |
| grits (`grits`) | 0.0048% | 0.0048% | 0.0048% |
| hamburger (`hamburger`) | 0.0048% | 0.0048% | 0.0048% |
| hamburger helper (`macaroni_helper`) | 0.0048% | 0.0048% | 0.0048% |
| hardtack (`hardtack`) | 0.0048% | 0.0048% | 0.0048% |
| hide bag (`hide_bag`) | 0.0048% | 0.0048% | 0.0048% |
| homemade toast-em (`toastem4`) | 0.0048% | 0.0048% | 0.0048% |
| honey sandwich (`sandwich_honey`) | 0.0048% | 0.0048% | 0.0048% |
| hot chocolate (`hot_chocolate`) | 0.0048% | 0.0048% | 0.0048% |
| insta-salad (`insta_salad`) | 0.0048% | 0.0048% | 0.0048% |
| instant chicken noodle soup (`soup_instant_chicken_noodle_prepared`) | 0.0048% | 0.0048% | 0.0048% |
| instant chicken noodle soup powder (`soup_instant_chicken_noodle_powder`) | 0.0048% | 0.0048% | 0.0048% |
| instant cocoa (`cocoa_powder_milk`) | 0.0048% | 0.0048% | 0.0048% |
| instant coffee mix (`instant_coffee`) | 0.0048% | 0.0048% | 0.0048% |
| instant spring vegetable soup (`soup_instant_vegetable_prepared`) | 0.0048% | 0.0048% | 0.0048% |
| instant spring vegetable soup powder (`soup_instant_vegetable_powder`) | 0.0048% | 0.0048% | 0.0048% |
| jam and butter sandwich (`sandwich_jam_butter`) | 0.0048% | 0.0048% | 0.0048% |
| jam and cheese sandwich (`sandwich_jam_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| jam sandwich (`sandwich_jam`) | 0.0048% | 0.0048% | 0.0048% |
| Japanese knotweed stems (`seed_japanese_knotweed`) | 0.0048% | 0.0048% | 0.0048% |
| lard (`lard`) | 0.0048% | 0.0048% | 0.0048% |
| large boiled stomach (`stomach_boiled`) | 0.0048% | 0.0048% | 0.0048% |
| lemon-lime soda (`lemonlime`) | 0.0048% | 0.0048% | 0.0048% |
| lemonade (`lemonade`) | 0.0048% | 0.0048% | 0.0048% |
| lemonade drink mix (`lemonade_powder`) | 0.0048% | 0.0048% | 0.0048% |
| maple syrup (`syrup`) | 0.0048% | 0.0048% | 0.0048% |
| marshmallow fluff (`marshmallow_fluff`) | 0.0048% | 0.0048% | 0.0048% |
| meat broth (`broth_meat`) | 0.0048% | 0.0048% | 0.0048% |
| meat nachos (`nachosm`) | 0.0048% | 0.0048% | 0.0048% |
| meat nachos with cheese (`nachosmc`) | 0.0048% | 0.0048% | 0.0048% |
| meat sandwich (`sandwich_t`) | 0.0048% | 0.0048% | 0.0048% |
| meat soup (`soup_meat`) | 0.0048% | 0.0048% | 0.0048% |
| milk (`milk`) | 0.0048% | 0.0048% | 0.0048% |
| mushroom ketchup (`mushroom_ketchup`) | 0.0048% | 0.0048% | 0.0048% |
| mushroom soup (`soup_mushroom`) | 0.0048% | 0.0048% | 0.0048% |
| nut butter (`peanutbutter`) | 0.0048% | 0.0048% | 0.0048% |
| nut paste (`paste_nut`) | 0.0048% | 0.0048% | 0.0048% |
| orangeade (`orangeade`) | 0.0048% | 0.0048% | 0.0048% |
| orangeade drink mix (`orangeade_powder`) | 0.0048% | 0.0048% | 0.0048% |
| pair of dehydrated frog legs (`dry_froglegs`) | 0.0048% | 0.0048% | 0.0048% |
| pan roasted corn (`pan_roasted_corn`) | 0.0048% | 0.0048% | 0.0048% |
| PB&H sandwich (`sandwich_pbh`) | 0.0048% | 0.0048% | 0.0048% |
| PB&J sandwich (`sandwich_pbj`) | 0.0048% | 0.0048% | 0.0048% |
| PB&M sandwich (`sandwich_pbm`) | 0.0048% | 0.0048% | 0.0048% |
| peach (`peach`) | 0.0048% | 0.0048% | 0.0048% |
| peanut butter sandwich (`sandwich_pb`) | 0.0048% | 0.0048% | 0.0048% |
| pear (`pear`) | 0.0048% | 0.0048% | 0.0048% |
| pelmeni (`pelmeni`) | 0.0048% | 0.0048% | 0.0048% |
| pesto (`sauce_pesto`) | 0.0048% | 0.0048% | 0.0048% |
| pickled fish (`fish_pickled`) | 0.0048% | 0.0048% | 0.0048% |
| pile of seaweed (`seaweed_pile`) | 0.0048% | 0.0048% | 0.0048% |
| pine needle tea (`pine_tea`) | 0.0048% | 0.0048% | 0.0048% |
| plum (`plums`) | 0.0048% | 0.0048% | 0.0048% |
| powdered cheese (`cheese_powder`) | 0.0048% | 0.0048% | 0.0048% |
| powdered egg (`powder_eggs`) | 0.0048% | 0.0048% | 0.0048% |
| powdered milk (`milk_powder`) | 0.0048% | 0.0048% | 0.0048% |
| press cake (`press_cake`) | 0.0048% | 0.0048% | 0.0048% |
| protein drink (`protein_drink`) | 0.0048% | 0.0048% | 0.0048% |
| protein powder (`protein_powder`) | 0.0048% | 0.0048% | 0.0048% |
| protein shake (`protein_shake`) | 0.0048% | 0.0048% | 0.0048% |
| protein smoothie (`protein_smoothie`) | 0.0048% | 0.0048% | 0.0048% |
| quesadilla (`quesadilla_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| ratatouille entree (`mre_ratatouille`) | 0.0048% | 0.0048% | 0.0048% |
| ravioli (`ravioli`) | 0.0048% | 0.0048% | 0.0048% |
| raw butter (`raw_butter`) | 0.0048% | 0.0048% | 0.0048% |
| raw hide (`raw_leather`) | 0.0048% | 0.0048% | 0.0048% |
| raw human skin (`raw_hleather`) | 0.0048% | 0.0048% | 0.0048% |
| raw pelt (`raw_fur`) | 0.0048% | 0.0048% | 0.0048% |
| raw popcorn (`popcorn_raw`) | 0.0048% | 0.0048% | 0.0048% |
| reconstituted milk (`milk_reconstituted`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated cheese (`cheese_rehydrated`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated chili pepper (`rehydrated_chili`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated egg (`rehydrated_eggs`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated fish (`rehydrated_fish`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated frog leg (`rehydrated_froglegs`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated fruit (`rehydrated_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated garlic clove (`rehydrated_garlic`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated lobster (`rehydrated_lobster`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated meat (`rehydrated_meat`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated mollusk (`rehydrated_mollusk`) | 0.0048% | 0.0048% | 0.0048% |
| roasted carrot (`carrot_roasted`) | 0.0048% | 0.0048% | 0.0048% |
| roasted cattail rhizome (`roasted_cattail_rhizome`) | 0.0048% | 0.0048% | 0.0048% |
| roasted coffee beans (`roasted_coffee_bean`) | 0.0048% | 0.0048% | 0.0048% |
| roasted pepper bone marrow (`pepperbone`) | 0.0048% | 0.0048% | 0.0048% |
| roasted pistachios (`pistachio_roasted`) | 0.0048% | 0.0048% | 0.0048% |
| salsa (`salsa`) | 0.0048% | 0.0048% | 0.0048% |
| salsify seeds (`seed_salsify_raw`) | 0.0048% | 0.0048% | 0.0048% |
| salt (`salt`) | 0.0048% | 0.0048% | 0.0048% |
| salted meat slice (`meat_salted`) | 0.0048% | 0.0048% | 0.0048% |
| salted popcorn (`popcorn2`) | 0.0048% | 0.0048% | 0.0048% |
| sausage gravy (`sausagegravy`) | 0.0048% | 0.0048% | 0.0048% |
| seasoned salt (`seasoning_salt`) | 0.0048% | 0.0048% | 0.0048% |
| seaweed (`seaweed`) | 0.0048% | 0.0048% | 0.0048% |
| seed popcorn (`seed_popcorn`) | 0.0048% | 0.0048% | 0.0048% |
| serving of candy ice cream (`icecream_candy`) | 0.0048% | 0.0048% | 0.0048% |
| serving of fruity ice cream (`icecream_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| serving of ice cream (`icecream`) | 0.0048% | 0.0048% | 0.0048% |
| Shirley Temple drink (`drink_shirleytemple`) | 0.0048% | 0.0048% | 0.0048% |
| soggy hardtack (`soggy_hardtack`) | 0.0048% | 0.0048% | 0.0048% |
| SPAM (`can_spam`) | 0.0048% | 0.0048% | 0.0048% |
| starch (`starch`) | 0.0048% | 0.0048% | 0.0048% |
| sugar (`sugar`) | 0.0048% | 0.0048% | 0.0048% |
| sugar beet (`sugar_beet`) | 0.0048% | 0.0048% | 0.0048% |
| sugar beet seeds (`seed_sugar_beet`) | 0.0048% | 0.0048% | 0.0048% |
| sweet water (`sweet_water`) | 0.0048% | 0.0048% | 0.0048% |
| sweetened coffee substitute with milk (`milk_coffee_substitute_sweetened`) | 0.0048% | 0.0048% | 0.0048% |
| sweetened fortified milk (`sweet_milk_fortified`) | 0.0048% | 0.0048% | 0.0048% |
| sweetened milk (`sweet_milk`) | 0.0048% | 0.0048% | 0.0048% |
| tallow (`tallow`) | 0.0048% | 0.0048% | 0.0048% |
| threshed barley (`threshed_barley`) | 0.0048% | 0.0048% | 0.0048% |
| threshed buckwheat (`threshed_buckwheat`) | 0.0048% | 0.0048% | 0.0048% |
| threshed canola (`threshed_canola`) | 0.0048% | 0.0048% | 0.0048% |
| threshed lentils (`threshed_lentils`) | 0.0048% | 0.0048% | 0.0048% |
| threshed oats (`threshed_oats`) | 0.0048% | 0.0048% | 0.0048% |
| threshed wheat (`threshed_wheat`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry (`homemade_toasterpastry`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry (`toasterpastry`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry (uncooked) (`toasterpastryfrozen`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry with buttercream (`homemade_toasterpastry2`) | 0.0048% | 0.0048% | 0.0048% |
| tomato sauce (`sauce_red`) | 0.0048% | 0.0048% | 0.0048% |
| tortilla chips (`nachos`) | 0.0048% | 0.0048% | 0.0048% |
| uncooked corn dog (`corndogs_frozen`) | 0.0048% | 0.0048% | 0.0048% |
| uncooked hot dog (`hotdogs_frozen`) | 0.0048% | 0.0048% | 0.0048% |
| uncooked TV dinner (`frozen_dinner`) | 0.0048% | 0.0048% | 0.0048% |
| Valencian paella (`paella_valenciana`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable broth (`broth`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable salad (`veggy_salad`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable sandwich (`sandwich_veggy`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable sandwich with cheese (`sandwich_veggy_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable soup (`soup_veggy`) | 0.0048% | 0.0048% | 0.0048% |
| vegetarian nachos (`nachosv`) | 0.0048% | 0.0048% | 0.0048% |
| vegetarian nachos with cheese (`nachosvc`) | 0.0048% | 0.0048% | 0.0048% |
| wastebread (`wastebread`) | 0.0048% | 0.0048% | 0.0048% |
| wild rice seeds (`seed_wild_rice`) | 0.0048% | 0.0048% | 0.0048% |
| wild root seeds (`seed_wildcarrot`) | 0.0048% | 0.0048% | 0.0048% |
| woods meat soup (`soup_woods`) | 0.0048% | 0.0048% | 0.0048% |
| yeast (`yeast`) | 0.0048% | 0.0048% | 0.0048% |
| cattail rhizome (`cattail_rhizome`) | 0.0000% | 0.0000% | 100.00% |
| cattail stalk (`cattail_stalk`) | 0.0000% | 0.0000% | 100.00% |

## Hills

### Objects

| Object | Chance on tile | Counts when generated | Contents table |
|---|---:|---|---|
| Rock outcrop | 100.00% | 1–3 | gather |
| Dead tree | 50.00% | 0–1 | gather |
| Underbrush | 100.00% | 1–2 | gather |
| Weathered traveller remains (bonus) | 3.00% | 1 | discovery_remains |
| Abandoned suitcase (bonus) | 1.80% | 1 | discovery_luggage |
| Discarded toolbox (bonus) | 2.00% | 1 | discovery_workshop |
| Abandoned backpack (bonus) | 0.10% | 1 | discovery_backpack |

### Every item

| Item | First exploration | Fully looted inland | Fully looted shoreline |
|---|---:|---:|---:|
| flaking rock (`rock_flaking`) | 41.38% | 100.00% | 100.00% |
| rock (`rock`) | 57.65% | 100.00% | 100.00% |
| withered plant (`withered`) | 23.46% | 100.00% | 100.00% |
| wild vegetables (`veggy_wild`) | 3.25% | 97.46% | 97.46% |
| stick (`stick`) | 23.46% | 91.50% | 91.50% |
| flint (`flint`) | 22.45% | 60.38% | 60.38% |
| handful of young leaves (`young_leaves`) | 3.25% | 53.56% | 53.56% |
| splintered wood (`splinter`) | 0.0151% | 50.02% | 50.02% |
| long stick (`stick_long`) | 0.0254% | 50.01% | 50.01% |
| large rock (`rock_large`) | 22.43% | 49.53% | 49.53% |
| dogbane (`dogbane`) | 1.30% | 47.07% | 47.07% |
| wild garlic (`wild_garlic`) | 3.25% | 36.51% | 36.51% |
| burdock (`raw_burdock`) | 3.25% | 30.34% | 30.34% |
| handful of ground nuts (`groundnut`) | 3.25% | 30.34% | 30.34% |
| chicken egg (`egg_chicken`) | 3.25% | 23.93% | 23.93% |
| rhubarb (`rhubarb`) | 3.25% | 23.93% | 23.93% |
| spurge flowers (`spurge`) | 1.33% | 22.42% | 22.42% |
| pinecone (`pinecone`) | 11.69% | 11.70% | 11.70% |
| sand (`material_sand`) | 7.14% | 7.15% | 7.15% |
| large clay pot (`clay_watercont`) | 7.11% | 7.11% | 7.11% |
| chunk of sulfur (`chunk_sulfur`) | 3.68% | 3.68% | 3.68% |
| soil (`material_soil`) | 3.68% | 3.68% | 3.68% |
| suitcase (`suitcase_m`) | 0.0000% | 1.80% | 1.80% |
| bee stinger (`bee_sting`) | 1.33% | 1.33% | 1.33% |
| butternut husks (`butternut_husk`) | 1.33% | 1.33% | 1.33% |
| lump of clay (`clay_lump`) | 1.33% | 1.33% | 1.33% |
| pine bough (`pine_bough`) | 1.33% | 1.33% | 1.33% |
| plant fiber (`plant_fibre`) | 1.33% | 1.33% | 1.33% |
| rock salt (`material_rocksalt`) | 1.33% | 1.33% | 1.33% |
| wasp stinger (`wasp_sting`) | 1.33% | 1.33% | 1.33% |
| hickory root (`hickory_root`) | 1.30% | 1.30% | 1.30% |
| limestone shard (`material_shrd_limestone`) | 1.30% | 1.30% | 1.30% |
| piece of willowbark (`willowbark`) | 1.30% | 1.30% | 1.30% |
| pine resin (`pine_resin`) | 1.30% | 1.30% | 1.30% |
| wild herbs (`wild_herbs`) | 1.30% | 1.30% | 1.30% |
| zincite (`material_zincite`) | 1.30% | 1.30% | 1.30% |
| plastic bottle (`bottle_plastic`) | 0.24% | 0.51% | 0.51% |
| backpack (`backpack`) | 0.0021% | 0.11% | 0.11% |
| pocket knife (`pockknife`) | 0.0151% | 0.11% | 0.11% |
| briefcase (`briefcase`) | 0.0062% | 0.11% | 0.11% |
| light battery (`light_battery_cell`) | 0.0229% | 0.11% | 0.11% |
| 3 L glass jar (`jar_3l_glass_sealed`) | 0.0246% | 0.0957% | 0.0957% |
| medium tin can (`can_medium`) | 0.0580% | 0.0771% | 0.0771% |
| small tool battery (`heavy_battery_cell`) | 0.0433% | 0.0614% | 0.0614% |
| apple (`apple`) | 0.0048% | 0.0567% | 0.0567% |
| bread (`bread`) | 0.0048% | 0.0567% | 0.0567% |
| canned beans (`can_beans`) | 0.0048% | 0.0567% | 0.0567% |
| clean water (`water_clean`) | 0.0048% | 0.0567% | 0.0567% |
| cooked fatty meat (`meat_fatty_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked fish (`fish_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked fruit (`fruit_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked meat (`meat_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked mushroom (`mushroom_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked plant marrow (`veggy_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cooked poultry (`poultry_cooked`) | 0.0048% | 0.0567% | 0.0567% |
| cookie (`cookies`) | 0.0048% | 0.0567% | 0.0567% |
| dehydrated meat (`dry_meat`) | 0.0048% | 0.0567% | 0.0567% |
| handful of blackberries (`blackberries`) | 0.0048% | 0.0567% | 0.0567% |
| handful of blueberries (`blueberries`) | 0.0048% | 0.0567% | 0.0567% |
| handful of raspberries (`raspberries`) | 0.0048% | 0.0567% | 0.0567% |
| handful of strawberries (`strawberries`) | 0.0048% | 0.0567% | 0.0567% |
| hardtack cracker (`hardtack_cracker`) | 0.0048% | 0.0567% | 0.0567% |
| meat jerky (`jerky`) | 0.0048% | 0.0567% | 0.0567% |
| peanut butter candy (`candy`) | 0.0048% | 0.0567% | 0.0567% |
| pile of straw (`straw_pile`) | 0.0048% | 0.0567% | 0.0567% |
| potato chips (`chips`) | 0.0048% | 0.0567% | 0.0567% |
| protein ration (`protein_bar_evac`) | 0.0048% | 0.0567% | 0.0567% |
| roasted bone marrow (`cooked_marrow`) | 0.0048% | 0.0567% | 0.0567% |
| smoked meat (`meat_smoked`) | 0.0048% | 0.0567% | 0.0567% |
| short rope (`rope_6`) | 0.0062% | 0.0548% | 0.0548% |
| gallon jug (`jug_plastic`) | 0.0342% | 0.0533% | 0.0533% |
| glass bottle (`bottle_glass`) | 0.0342% | 0.0533% | 0.0533% |
| cooked beans (`beans_cooked`) | 0.0048% | 0.0492% | 0.0492% |
| cooked lentils (`lentils_cooked`) | 0.0048% | 0.0492% | 0.0492% |
| cooked oatmeal (`oatmeal_cooked`) | 0.0048% | 0.0492% | 0.0492% |
| corn on the cob (`corn_on_cob`) | 0.0048% | 0.0492% | 0.0492% |
| popcorn (`popcorn`) | 0.0048% | 0.0492% | 0.0492% |
| 0.5 L glass jar (`jar_glass_sealed`) | 0.0294% | 0.0486% | 0.0486% |
| bandage (`bandages`) | 0.0254% | 0.0456% | 0.0456% |
| matchbook (`matches`) | 0.0254% | 0.0456% | 0.0456% |
| abaya (`abaya`) | 0.0062% | 0.0436% | 0.0436% |
| ankle sheath (`bootsheath`) | 0.0062% | 0.0436% | 0.0436% |
| ankle socks (pair) (`socks_ankle`) | 0.0062% | 0.0436% | 0.0436% |
| ankle wallet pouch (`ankle_wallet_pouch`) | 0.0062% | 0.0436% | 0.0436% |
| arm splint (`arm_splint`) | 0.0062% | 0.0436% | 0.0436% |
| armored jean jacket (`jacket_jean_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored jean vest (`vest_jean_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored jeans (`jeans_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored leather vest (`vest_leather_mod`) | 0.0062% | 0.0436% | 0.0436% |
| armored motorcycle jacket (`jacket_leather_mod`) | 0.0062% | 0.0436% | 0.0436% |
| bag socks (pair) (`socks_bag`) | 0.0062% | 0.0436% | 0.0436% |
| balaclava (`balclava`) | 0.0062% | 0.0436% | 0.0436% |
| bandana (`bandana`) | 0.0062% | 0.0436% | 0.0436% |
| baseball cap (`hat_ball`) | 0.0062% | 0.0436% | 0.0436% |
| bathrobe (`house_coat`) | 0.0062% | 0.0436% | 0.0436% |
| belly band (`bellyband`) | 0.0062% | 0.0436% | 0.0436% |
| belly wrap (`bellywrap`) | 0.0062% | 0.0436% | 0.0436% |
| bindle (`bindle`) | 0.0062% | 0.0436% | 0.0436% |
| birchbark ankle sheath (`bootsheath_birchbark`) | 0.0062% | 0.0436% | 0.0436% |
| birchbark shoes (pair) (`shoes_birchbark`) | 0.0062% | 0.0436% | 0.0436% |
| blanket (`blanket`) | 0.0062% | 0.0436% | 0.0436% |
| blindfold (`blindfold`) | 0.0062% | 0.0436% | 0.0436% |
| bookplate (`bookplate`) | 0.0062% | 0.0436% | 0.0436% |
| bookstrap (`bookstrap`) | 0.0062% | 0.0436% | 0.0436% |
| boonie hat (`hat_boonie`) | 0.0062% | 0.0436% | 0.0436% |
| boots (pair) (`boots`) | 0.0062% | 0.0436% | 0.0436% |
| bottle gourd (`bottle_gourd`) | 0.0062% | 0.0436% | 0.0436% |
| box backpack (`boxpack`) | 0.0062% | 0.0436% | 0.0436% |
| boxer briefs (`boxer_briefs`) | 0.0062% | 0.0436% | 0.0436% |
| boxer shorts (`boxer_shorts`) | 0.0062% | 0.0436% | 0.0436% |
| briefs (`briefs`) | 0.0062% | 0.0436% | 0.0436% |
| canvas aketon vest (`aketon_canvas_vest`) | 0.0062% | 0.0436% | 0.0436% |
| canvas heavy arming pants (`gambeson_pants_canvas`) | 0.0062% | 0.0436% | 0.0436% |
| canvas throat guard (`throat_guard_canvas`) | 0.0062% | 0.0436% | 0.0436% |
| cargo pants (`pants_cargo`) | 0.0062% | 0.0436% | 0.0436% |
| cargo shorts (`shorts_cargo`) | 0.0062% | 0.0436% | 0.0436% |
| carpet cuirass (`carpet_cuirass`) | 0.0062% | 0.0436% | 0.0436% |
| chestwrap (`chestwrap`) | 0.0062% | 0.0436% | 0.0436% |
| chitinous boots (pair) (`boots_chitin`) | 0.0062% | 0.0436% | 0.0436% |
| cloak (`cloak`) | 0.0062% | 0.0436% | 0.0436% |
| cloth-padded pants (`canvas_pants_padded`) | 0.0062% | 0.0436% | 0.0436% |
| cloth-padded shirt (`cloth_shirt_padded`) | 0.0062% | 0.0436% | 0.0436% |
| cloth-padded sleeveless shirt (`cloth_vest_padded`) | 0.0062% | 0.0436% | 0.0436% |
| combat boots (pair) (`boots_combat`) | 0.0062% | 0.0436% | 0.0436% |
| cord sandals (pair) (`bastsandals`) | 0.0062% | 0.0436% | 0.0436% |
| cotton apron (`apron_cotton`) | 0.0062% | 0.0436% | 0.0436% |
| cotton hat (`hat_cotton`) | 0.0062% | 0.0436% | 0.0436% |
| cowboy hat (`cowboy_hat`) | 0.0062% | 0.0436% | 0.0436% |
| crop top (`tshirt_cropped`) | 0.0062% | 0.0436% | 0.0436% |
| cropped hoodie (`hoodie_cropped`) | 0.0062% | 0.0436% | 0.0436% |
| deployment bag (`deployment_bag`) | 0.0062% | 0.0436% | 0.0436% |
| drop leg bag (`leg_bag`) | 0.0062% | 0.0436% | 0.0436% |
| duffel bag (`duffelbag`) | 0.0062% | 0.0436% | 0.0436% |
| duster (`duster`) | 0.0062% | 0.0436% | 0.0436% |
| eight point cap (`hat_navy`) | 0.0062% | 0.0436% | 0.0436% |
| espadrilles (`espadrilles`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur coat (`coat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur duster (`duster_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur hat (`hat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| faux fur trenchcoat (`trenchcoat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| flame-resistant socks (pair) (`nomex_socks`) | 0.0062% | 0.0436% | 0.0436% |
| foot rags (pair) (`footrags`) | 0.0062% | 0.0436% | 0.0436% |
| fur belly wrap (`bellywrap_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur chestwrap (`chestwrap_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur cloak (`cloak_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur coat (`coat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur duster (`duster_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur foot wraps (pair) (`footrags_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur hat (`hat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur loincloth (`loincloth_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur pants (`pants_fur`) | 0.0062% | 0.0436% | 0.0436% |
| fur trenchcoat (`trenchcoat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| garter belt (`garter_belt`) | 0.0062% | 0.0436% | 0.0436% |
| golf cap (`hat_golf`) | 0.0062% | 0.0436% | 0.0436% |
| grappling hook (`grapnel`) | 0.0062% | 0.0436% | 0.0436% |
| grass blanket (`grass_blanket`) | 0.0062% | 0.0436% | 0.0436% |
| grass cloak (`grass_cloak`) | 0.0062% | 0.0436% | 0.0436% |
| grass keffiyeh (`grass_keffiyeh`) | 0.0062% | 0.0436% | 0.0436% |
| grass sheet (`grass_sheet`) | 0.0062% | 0.0436% | 0.0436% |
| grass shirt (`shirt_straw`) | 0.0062% | 0.0436% | 0.0436% |
| grass skirt (`skirt_grass`) | 0.0062% | 0.0436% | 0.0436% |
| hairpin (`hairpin`) | 0.0062% | 0.0436% | 0.0436% |
| hard hat (`hat_hard`) | 0.0062% | 0.0436% | 0.0436% |
| headscarf (`headscarf`) | 0.0062% | 0.0436% | 0.0436% |
| hijab (`hijab`) | 0.0062% | 0.0436% | 0.0436% |
| hoodie (`hoodie`) | 0.0062% | 0.0436% | 0.0436% |
| hunting cap (`hat_hunting`) | 0.0062% | 0.0436% | 0.0436% |
| jean jacket (`jacket_jean`) | 0.0062% | 0.0436% | 0.0436% |
| jean vest (`vest_jean`) | 0.0062% | 0.0436% | 0.0436% |
| jeans (`jeans`) | 0.0062% | 0.0436% | 0.0436% |
| jerrypack (`jerrypack`) | 0.0062% | 0.0436% | 0.0436% |
| jorts (`shorts_denim`) | 0.0062% | 0.0436% | 0.0436% |
| keffiyeh (`keffiyeh`) | 0.0062% | 0.0436% | 0.0436% |
| Kevlar dog harness (`kevlar_harness`) | 0.0062% | 0.0436% | 0.0436% |
| knit cowl (`cowl_wool`) | 0.0062% | 0.0436% | 0.0436% |
| knit hat (`hat_knit`) | 0.0062% | 0.0436% | 0.0436% |
| large belt loop (`belt_loop_large`) | 0.0062% | 0.0436% | 0.0436% |
| large waterskin (`waterskin3`) | 0.0062% | 0.0436% | 0.0436% |
| leather apron (`apron_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather armor boots (pair) (`boots_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| leather armor cuirass (`armor_larmor_chest`) | 0.0062% | 0.0436% | 0.0436% |
| leather armor helmet (`helmet_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| leather belly wrap (`bellywrap_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather belt (`leather_belt`) | 0.0062% | 0.0436% | 0.0436% |
| leather body armor (`armor_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| leather chestwrap (`chestwrap_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather cloak (`cloak_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather dog harness (`leather_harness_dog`) | 0.0062% | 0.0436% | 0.0436% |
| leather duster (`duster_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather eyepatch (`eyepatch_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather foot wraps (pair) (`footrags_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather loincloth (`loincloth_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather pants (`pants_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather pouch (`leather_pouch`) | 0.0062% | 0.0436% | 0.0436% |
| leather sandals (pair) (`leathersandals`) | 0.0062% | 0.0436% | 0.0436% |
| leather suspenders (`suspenders_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather trenchcoat (`trenchcoat_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather vest (`vest_leather`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded pants (`survivor_adhoc_leather_pants`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded shirt (`survivor_adhoc_leather_shirt`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded sleeveless shirt (`survivor_adhoc_leather_torso`) | 0.0062% | 0.0436% | 0.0436% |
| leather-padded sleeves (`survivor_adhoc_leather_sleeves`) | 0.0062% | 0.0436% | 0.0436% |
| leg splint (`leg_splint`) | 0.0062% | 0.0436% | 0.0436% |
| light jacket (`jacket_light`) | 0.0062% | 0.0436% | 0.0436% |
| light sheet metal chest guard (`chestguard_metal_sheets_light`) | 0.0062% | 0.0436% | 0.0436% |
| loincloth (`loincloth`) | 0.0062% | 0.0436% | 0.0436% |
| long cordage rope (`rope_makeshift_30`) | 0.0062% | 0.0436% | 0.0436% |
| long patchwork scarf (`long_patchwork_scarf`) | 0.0062% | 0.0436% | 0.0436% |
| long rope (`rope_30`) | 0.0062% | 0.0436% | 0.0436% |
| long underwear bottom (`long_underpants`) | 0.0062% | 0.0436% | 0.0436% |
| long underwear top (`long_undertop`) | 0.0062% | 0.0436% | 0.0436% |
| long vine (`vine_30`) | 0.0062% | 0.0436% | 0.0436% |
| long waist apron (`waist_apron_long`) | 0.0062% | 0.0436% | 0.0436% |
| long-sleeved shirt (`longshirt`) | 0.0062% | 0.0436% | 0.0436% |
| longarm bag (`long_duffelbag`) | 0.0062% | 0.0436% | 0.0436% |
| loop of rope (`rope_loop`) | 0.0062% | 0.0436% | 0.0436% |
| makeshift knapsack (`makeshift_knapsack`) | 0.0062% | 0.0436% | 0.0436% |
| makeshift poncho (`poncho_makeshift`) | 0.0062% | 0.0436% | 0.0436% |
| makeshift sling (`makeshift_sling`) | 0.0062% | 0.0436% | 0.0436% |
| medium belt loop (`belt_loop_medium`) | 0.0062% | 0.0436% | 0.0436% |
| moccasins (pair) (`mocassins`) | 0.0062% | 0.0436% | 0.0436% |
| motorcycle jacket (`leather_police_jacket`) | 0.0062% | 0.0436% | 0.0436% |
| niqab (`niqab`) | 0.0062% | 0.0436% | 0.0436% |
| noise canceling headgear (`hat_noise_cancelling`) | 0.0062% | 0.0436% | 0.0436% |
| nylon heavy arming pants (`gambeson_pants_nylon`) | 0.0062% | 0.0436% | 0.0436% |
| nylon throat guard (`throat_guard_nylon`) | 0.0062% | 0.0436% | 0.0436% |
| pack frame (`frame_pack`) | 0.0062% | 0.0436% | 0.0436% |
| pair of 2-by-arm guards (`2byarm_guard`) | 0.0062% | 0.0436% | 0.0436% |
| pair of 2-by-shin guards (`2byshin_guard`) | 0.0062% | 0.0436% | 0.0436% |
| pair of arm warmers (`arm_warmers`) | 0.0062% | 0.0436% | 0.0436% |
| pair of armored fingerless leather gloves (`gloves_fingerless_mod`) | 0.0062% | 0.0436% | 0.0436% |
| pair of armored gauntlets (`gloves_plate`) | 0.0062% | 0.0436% | 0.0436% |
| pair of bag gloves (`gloves_bag`) | 0.0062% | 0.0436% | 0.0436% |
| pair of black gloves (`gloves_black`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet arm guards (`carpet_armguards`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet bracers (`carpet_bracers`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet greaves (`carpet_greaves`) | 0.0062% | 0.0436% | 0.0436% |
| pair of carpet leg guards (`carpet_legguards`) | 0.0062% | 0.0436% | 0.0436% |
| pair of claw gloves (`gloves_claws`) | 0.0062% | 0.0436% | 0.0436% |
| pair of copper earrings (`copper_ear`) | 0.0062% | 0.0436% | 0.0436% |
| pair of denim gloves (`gloves_denim`) | 0.0062% | 0.0436% | 0.0436% |
| pair of EOD overhand protectors (`gloves_eod`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless denim gloves (`gloves_denim_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless leather gloves (`gloves_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless light survivor gloves (`gloves_lsurvivor_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless survivor gloves (`gloves_survivor_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fingerless wool gloves (`gloves_wool_fingerless`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fur gloves (`gloves_fur`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fur hand wraps (`gloves_wraps_fur`) | 0.0062% | 0.0436% | 0.0436% |
| pair of fur leggings (`leg_warmers_f`) | 0.0062% | 0.0436% | 0.0436% |
| pair of glass goggles (`glass_goggles`) | 0.0062% | 0.0436% | 0.0436% |
| pair of glove liners (`gloves_liner`) | 0.0062% | 0.0436% | 0.0436% |
| pair of golfing gloves (`gloves_golf`) | 0.0062% | 0.0436% | 0.0436% |
| pair of hand wraps (`gloves_wraps`) | 0.0062% | 0.0436% | 0.0436% |
| pair of knee pads (`knee_pads`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather arm guards (`armguard_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather armor gauntlets (`gauntlets_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather gloves (`gloves_leather`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather hand wraps (`gloves_wraps_leather`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather leg guards (`legguard_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leather vambraces (`vambrace_larmor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of leg warmers (`leg_warmers`) | 0.0062% | 0.0436% | 0.0436% |
| pair of light gloves (`gloves_light`) | 0.0062% | 0.0436% | 0.0436% |
| pair of light survivor boots (`boots_lsurvivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of light survivor gloves (`gloves_lsurvivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of medical gloves (`gloves_medical`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mild steel sheet metal bracers (`armguard_metal_sheets_bracer`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mild steel sheet metal elbow guards (`armguard_metal_sheets_elbows`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mild steel sheet metal pauldrons (`armguard_metal_sheets_shoulders`) | 0.0062% | 0.0436% | 0.0436% |
| pair of mittens (`mittens`) | 0.0062% | 0.0436% | 0.0436% |
| pair of nail knuckles (`knuckle_nail`) | 0.0062% | 0.0436% | 0.0436% |
| pair of neoprene arm sleeves (`armguard_soft`) | 0.0062% | 0.0436% | 0.0436% |
| pair of Nomex sock mitts (`nomex_sockmitts`) | 0.0062% | 0.0436% | 0.0436% |
| pair of paper arm guards (`armguard_paper`) | 0.0062% | 0.0436% | 0.0436% |
| pair of paper leg guards (`legguard_paper`) | 0.0062% | 0.0436% | 0.0436% |
| pair of rubber gloves (`gloves_rubber`) | 0.0062% | 0.0436% | 0.0436% |
| pair of safety glasses (`glasses_safety`) | 0.0062% | 0.0436% | 0.0436% |
| pair of scrap arm guards (`armguard_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| pair of scrap knuckles (`knuckle_steel`) | 0.0062% | 0.0436% | 0.0436% |
| pair of scrap leg guards (`legguard_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal arm guards (`armguard_metal`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal gauntlets (`mitten_gaunt_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal greaves (`legguard_metal_sheets_greaves`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal knee guards (`legguard_metal_sheets_knees`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sheet metal leg guards (`legguard_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| pair of snow goggles (`iggaak`) | 0.0062% | 0.0436% | 0.0436% |
| pair of sock mitts (`sockmitts`) | 0.0062% | 0.0436% | 0.0436% |
| pair of studded gloves (`gloves_studded`) | 0.0062% | 0.0436% | 0.0436% |
| pair of survivor firegloves (`gloves_fsurvivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of survivor gloves (`gloves_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| pair of tentacle sleeves (`stockings_tent_arms`) | 0.0062% | 0.0436% | 0.0436% |
| pair of welding goggles (`goggles_welding`) | 0.0062% | 0.0436% | 0.0436% |
| pair of white gloves (`gloves_white`) | 0.0062% | 0.0436% | 0.0436% |
| pair of wool gloves (`gloves_wool`) | 0.0062% | 0.0436% | 0.0436% |
| pair of wool hand wraps (`gloves_wraps_wool`) | 0.0062% | 0.0436% | 0.0436% |
| pair of wool sock mitts (`wool_sockmitts`) | 0.0062% | 0.0436% | 0.0436% |
| pair of work gloves (`gloves_work`) | 0.0062% | 0.0436% | 0.0436% |
| pants (`pants`) | 0.0062% | 0.0436% | 0.0436% |
| plastic apron (`apron_plastic`) | 0.0062% | 0.0436% | 0.0436% |
| plastic canteen (`canteen`) | 0.0062% | 0.0436% | 0.0436% |
| plastic shopping bag (`plastic_shopping_bag`) | 0.0062% | 0.0436% | 0.0436% |
| pot great helm (`stockpot_helmet`) | 0.0062% | 0.0436% | 0.0436% |
| pot helmet (`pot_helmet`) | 0.0062% | 0.0436% | 0.0436% |
| pouch (`ragpouch`) | 0.0062% | 0.0436% | 0.0436% |
| rag tunic (`tunic_rag`) | 0.0062% | 0.0436% | 0.0436% |
| rain coat (`coat_rain`) | 0.0062% | 0.0436% | 0.0436% |
| rain hood (`hood_rain`) | 0.0062% | 0.0436% | 0.0436% |
| rioter mask (`mask_rioter`) | 0.0062% | 0.0436% | 0.0436% |
| ripped jeans (`jeans_ripped`) | 0.0062% | 0.0436% | 0.0436% |
| rubber dog rainsuit (`rubber_harness_dog`) | 0.0062% | 0.0436% | 0.0436% |
| scrap boots (pair) (`boots_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| scrap cuirass (`cuirass_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| scrap ESAPI plate (`scrap_esapi_plate`) | 0.0062% | 0.0436% | 0.0436% |
| scrap ESBI plate (`scrap_esbi_plate`) | 0.0062% | 0.0436% | 0.0436% |
| scrap helmet (`helmet_scrap`) | 0.0062% | 0.0436% | 0.0436% |
| scrap suit (`armor_scrapsuit`) | 0.0062% | 0.0436% | 0.0436% |
| scrap suit (`armor_xs_scrapsuit`) | 0.0062% | 0.0436% | 0.0436% |
| sheet (`sheet`) | 0.0062% | 0.0436% | 0.0436% |
| sheet metal chest guard (`chestguard_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| sheet metal sabatons (pair) (`sabaton_metal_sheets`) | 0.0062% | 0.0436% | 0.0436% |
| sheet metal skirt (`legguard_metal_sheets_hip`) | 0.0062% | 0.0436% | 0.0436% |
| short cordage rope (`rope_makeshift_6`) | 0.0062% | 0.0436% | 0.0436% |
| short vine (`vine_6`) | 0.0062% | 0.0436% | 0.0436% |
| short waist apron (`waist_apron_short`) | 0.0062% | 0.0436% | 0.0436% |
| shorts (`shorts`) | 0.0062% | 0.0436% | 0.0436% |
| simple patchwork scarf (`patchwork_scarf`) | 0.0062% | 0.0436% | 0.0436% |
| sleeping bag (`sleeping_bag`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless canvas gambeson (`gambeson_canvas_vest`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless duster (`sleeveless_duster`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless faux fur duster (`sleeveless_duster_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless faux fur trenchcoat (`sleeveless_trenchcoat_faux_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless fur duster (`sleeveless_duster_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless fur trenchcoat (`sleeveless_trenchcoat_fur`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless leather duster (`sleeveless_duster_leather`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless leather trenchcoat (`sleeveless_trenchcoat_leather`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless nylon gambeson (`gambeson_nylon_vest`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless survivor duster (`sleeveless_duster_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless survivor trenchcoat (`sleeveless_trenchcoat_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless trenchcoat (`sleeveless_trenchcoat`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless tunic (`sleeveless_tunic`) | 0.0062% | 0.0436% | 0.0436% |
| sleeveless underwear top (`long_undertop_sleeveless`) | 0.0062% | 0.0436% | 0.0436% |
| small waterskin (`waterskin`) | 0.0062% | 0.0436% | 0.0436% |
| sneakers (pair) (`sneakers`) | 0.0062% | 0.0436% | 0.0436% |
| socks (pair) (`socks`) | 0.0062% | 0.0436% | 0.0436% |
| stockings (pair) (`stockings`) | 0.0062% | 0.0436% | 0.0436% |
| straw basket (`straw_basket`) | 0.0062% | 0.0436% | 0.0436% |
| straw hat (`straw_hat`) | 0.0062% | 0.0436% | 0.0436% |
| straw sandals (pair) (`straw_sandals`) | 0.0062% | 0.0436% | 0.0436% |
| summer hard hat (`hat_hard_hooded`) | 0.0062% | 0.0436% | 0.0436% |
| sun shield (`sun_shield`) | 0.0062% | 0.0436% | 0.0436% |
| sundress (`sundress`) | 0.0062% | 0.0436% | 0.0436% |
| survivor duster (`duster_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| survivor trenchcoat (`trenchcoat_survivor`) | 0.0062% | 0.0436% | 0.0436% |
| suspenders (`suspenders_cloth`) | 0.0062% | 0.0436% | 0.0436% |
| sustainment pouch (`sustainment_pouch`) | 0.0062% | 0.0436% | 0.0436% |
| swag bag (`swag_bag`) | 0.0062% | 0.0436% | 0.0436% |
| sweater (`sweater`) | 0.0062% | 0.0436% | 0.0436% |
| sweatshirt (`sweatshirt`) | 0.0062% | 0.0436% | 0.0436% |
| t-shirt (`tshirt`) | 0.0062% | 0.0436% | 0.0436% |
| tank top (`tank_top`) | 0.0062% | 0.0436% | 0.0436% |
| tentacle stockings (pair) (`stockings_tent_legs`) | 0.0062% | 0.0436% | 0.0436% |
| thick wool onesie (`wool_suit`) | 0.0062% | 0.0436% | 0.0436% |
| tireplate (`tireplate`) | 0.0062% | 0.0436% | 0.0436% |
| toque (`hat_chef`) | 0.0062% | 0.0436% | 0.0436% |
| towel (`towel`) | 0.0062% | 0.0436% | 0.0436% |
| trapper pack (`trapper_pack`) | 0.0062% | 0.0436% | 0.0436% |
| travelpack (`travelpack`) | 0.0062% | 0.0436% | 0.0436% |
| trenchcoat (`trenchcoat`) | 0.0062% | 0.0436% | 0.0436% |
| tunic (`tunic`) | 0.0062% | 0.0436% | 0.0436% |
| turban (`turban`) | 0.0062% | 0.0436% | 0.0436% |
| turnout boots (pair) (`boots_bunker`) | 0.0062% | 0.0436% | 0.0436% |
| undershirt (`undershirt`) | 0.0062% | 0.0436% | 0.0436% |
| utility vest (`vest`) | 0.0062% | 0.0436% | 0.0436% |
| waterskin (`waterskin2`) | 0.0062% | 0.0436% | 0.0436% |
| windbreaker (`jacket_windbreaker`) | 0.0062% | 0.0436% | 0.0436% |
| wolf skull helmet (`helmet_skull`) | 0.0062% | 0.0436% | 0.0436% |
| wooden canteen (`canteen_wood`) | 0.0062% | 0.0436% | 0.0436% |
| wooden clogs (pair) (`clogs`) | 0.0062% | 0.0436% | 0.0436% |
| wool beret (`beret_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool chestwrap (`chestwrap_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool cloak (`cloak_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool foot wraps (pair) (`footrags_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool loincloth (`loincloth_wool`) | 0.0062% | 0.0436% | 0.0436% |
| wool poncho (`poncho`) | 0.0062% | 0.0436% | 0.0436% |
| wool socks (pair) (`socks_wool`) | 0.0062% | 0.0436% | 0.0436% |
| work pants (`technician_pants_gray`) | 0.0062% | 0.0436% | 0.0436% |
| black coffee (`coffee`) | 0.0048% | 0.0391% | 0.0391% |
| black tea (`tea`) | 0.0048% | 0.0391% | 0.0391% |
| cooked rice (`rice_cooked`) | 0.0048% | 0.0391% | 0.0391% |
| cotton boll (`cotton_boll`) | 0.0048% | 0.0391% | 0.0391% |
| dried rice (`dry_rice`) | 0.0048% | 0.0391% | 0.0391% |
| herbal tea (`herbal_tea`) | 0.0048% | 0.0391% | 0.0391% |
| herbal tea bag (`herbal_tea_bag`) | 0.0048% | 0.0391% | 0.0391% |
| Italian seasoning (`seasoning_italian`) | 0.0048% | 0.0391% | 0.0391% |
| popcorn kernels (`kernels`) | 0.0048% | 0.0391% | 0.0391% |
| toast (`toast`) | 0.0048% | 0.0391% | 0.0391% |
| aluminum can (`can_drink`) | 0.0199% | 0.0390% | 0.0390% |
| medium battery (rechargeable) (`medium_battery_cell`) | 0.0182% | 0.0363% | 0.0363% |
| 1 L lead ingot (`1l_lead`) | 0.0254% | 0.0345% | 0.0345% |
| 1 L silver ingot (`1l_silver`) | 0.0254% | 0.0345% | 0.0345% |
| 1 L tin ingot (`1l_tin`) | 0.0254% | 0.0345% | 0.0345% |
| 1L aluminum ingot (`1l_aluminum`) | 0.0254% | 0.0345% | 0.0345% |
| 1L brass ingot (`1l_brass`) | 0.0254% | 0.0345% | 0.0345% |
| 1L bronze ingot (`1l_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| 1L copper ingot (`1l_copper`) | 0.0254% | 0.0345% | 0.0345% |
| 1L zinc ingot (`1l_zinc`) | 0.0254% | 0.0345% | 0.0345% |
| 2-by-sword (`sword_wood`) | 0.0254% | 0.0345% | 0.0345% |
| adhesive bandage (`adhesive_bandages`) | 0.0254% | 0.0345% | 0.0345% |
| adobe mortar (`mortar_adobe`) | 0.0254% | 0.0345% | 0.0345% |
| alien resin chunk (`resin_chunk`) | 0.0254% | 0.0345% | 0.0345% |
| almonds (`almond`) | 0.0254% | 0.0345% | 0.0345% |
| aluminum foil (`aluminum_foil`) | 0.0254% | 0.0345% | 0.0345% |
| back-up beeper (`beeper`) | 0.0254% | 0.0345% | 0.0345% |
| barbed wire bat (`bwirebat`) | 0.0254% | 0.0345% | 0.0345% |
| baseball bat (`bat`) | 0.0254% | 0.0345% | 0.0345% |
| battered glass storybook (`glass_book`) | 0.0254% | 0.0345% | 0.0345% |
| bicycle alternator (`alternator_bicycle`) | 0.0254% | 0.0345% | 0.0345% |
| birchbark funnel (`birchbark_funnel`) | 0.0254% | 0.0345% | 0.0345% |
| bismuth (`bismuth`) | 0.0254% | 0.0345% | 0.0345% |
| bō (`bo`) | 0.0254% | 0.0345% | 0.0345% |
| boiled makeshift bandage (`bandages_makeshift_boiled`) | 0.0254% | 0.0345% | 0.0345% |
| bolt studded bat (`nutboltbat`) | 0.0254% | 0.0345% | 0.0345% |
| bone glue (`bone_glue`) | 0.0254% | 0.0345% | 0.0345% |
| breadboard (`breadboard`) | 0.0254% | 0.0345% | 0.0345% |
| bronze button (`button_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| bronze nail (`bronze_nail`) | 0.0254% | 0.0345% | 0.0345% |
| bronze war dart (`javelin_fletched_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of copper tubing (`bundle_copper_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of cotton patches (`bundle_rag`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of cotton sheets (`bundle_cotton`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of felt (`bundle_wool`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of javelins (`bundle_javelin`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of leather (`bundle_leather`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of pipes (`bundle_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| bundle of synthetic fabric (`bundle_nylon`) | 0.0254% | 0.0345% | 0.0345% |
| butter knife (`knife_butter`) | 0.0254% | 0.0345% | 0.0345% |
| butterfly net (`butterfly_net_makeshift`) | 0.0254% | 0.0345% | 0.0345% |
| candle (`candle`) | 0.0254% | 0.0345% | 0.0345% |
| canvas patch (`canvas_patch`) | 0.0254% | 0.0345% | 0.0345% |
| canvas scraps (`scrap_canvas`) | 0.0254% | 0.0345% | 0.0345% |
| canvas sheet (`sheet_canvas`) | 0.0254% | 0.0345% | 0.0345% |
| carding paddles (`carding_paddles`) | 0.0254% | 0.0345% | 0.0345% |
| cast iron chunk (`chunk_cast_iron`) | 0.0254% | 0.0345% | 0.0345% |
| cast iron lump (`lump_cast_iron`) | 0.0254% | 0.0345% | 0.0345% |
| charcoal (`charcoal`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of beeswax (`wax`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of brass (`scrap_brass`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of bronze (`scrap_bronze`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of copper (`scrap_copper`) | 0.0254% | 0.0345% | 0.0345% |
| chunk of rubber (`chunk_rubber`) | 0.0254% | 0.0345% | 0.0345% |
| clay flower pot (`clay_pot_flower`) | 0.0254% | 0.0345% | 0.0345% |
| clay oil lamp (off) (`oil_lamp_clay`) | 0.0254% | 0.0345% | 0.0345% |
| copper (`copper`) | 0.0254% | 0.0345% | 0.0345% |
| copper rod (`copper_rod`) | 0.0254% | 0.0345% | 0.0345% |
| copper tubing (`cu_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| cotton balls (`cotton_ball`) | 0.0254% | 0.0345% | 0.0345% |
| cotton scraps (`scrap_cotton`) | 0.0254% | 0.0345% | 0.0345% |
| cotton sheet (`sheet_cotton`) | 0.0254% | 0.0345% | 0.0345% |
| crude bronze nail (`crude_bronze_nail`) | 0.0254% | 0.0345% | 0.0345% |
| crude heating element (`crude_heating_element`) | 0.0254% | 0.0345% | 0.0345% |
| crude lamp oil (`crude_lamp_oil`) | 0.0254% | 0.0345% | 0.0345% |
| crude wooden arrow (`arrow_fire_hardened_fletched`) | 0.0254% | 0.0345% | 0.0345% |
| crude wooden bolt (`bolt_crude`) | 0.0254% | 0.0345% | 0.0345% |
| cudgel (`cudgel`) | 0.0254% | 0.0345% | 0.0345% |
| cured hide (`cured_hide`) | 0.0254% | 0.0345% | 0.0345% |
| cured pelt (`cured_pelt`) | 0.0254% | 0.0345% | 0.0345% |
| cutting board (`cutting_board`) | 0.0254% | 0.0345% | 0.0345% |
| denim patch (`denim_patch`) | 0.0254% | 0.0345% | 0.0345% |
| denim sheet (`sheet_denim`) | 0.0254% | 0.0345% | 0.0345% |
| distaff and spindle (`distaff_spindle`) | 0.0254% | 0.0345% | 0.0345% |
| dog tag (`dog_tag_dog`) | 0.0254% | 0.0345% | 0.0345% |
| down feather (`down_feather`) | 0.0254% | 0.0345% | 0.0345% |
| down-filled pillow (`down_pillow`) | 0.0254% | 0.0345% | 0.0345% |
| draw plate (`draw_plate`) | 0.0254% | 0.0345% | 0.0345% |
| dried seaweed (`dry_seaweed`) | 0.0254% | 0.0345% | 0.0345% |
| duct tape (`duct_tape`) | 0.0254% | 0.0345% | 0.0345% |
| electric firestarter (`crude_firestarter`) | 0.0254% | 0.0345% | 0.0345% |
| electronic scrap (`e_scrap`) | 0.0254% | 0.0345% | 0.0345% |
| ember carrier (`tinderbox`) | 0.0254% | 0.0345% | 0.0345% |
| faux fur patch (`faux_fur`) | 0.0254% | 0.0345% | 0.0345% |
| feather (`feather`) | 0.0254% | 0.0345% | 0.0345% |
| felt patch (`felt_patch`) | 0.0254% | 0.0345% | 0.0345% |
| fiber insulation batt (`rock_wool_bat`) | 0.0254% | 0.0345% | 0.0345% |
| field stone (`field_stone`) | 0.0254% | 0.0345% | 0.0345% |
| fishing hook (`fishing_hook_basic`) | 0.0254% | 0.0345% | 0.0345% |
| folded cardboard box (`box_medium_folded`) | 0.0254% | 0.0345% | 0.0345% |
| funnel (`funnel`) | 0.0254% | 0.0345% | 0.0345% |
| fur patch (`fur`) | 0.0254% | 0.0345% | 0.0345% |
| fur rollmat (`fur_rollmat`) | 0.0254% | 0.0345% | 0.0345% |
| fuse (`fuse`) | 0.0254% | 0.0345% | 0.0345% |
| gambeson batting (`gambeson_batting`) | 0.0254% | 0.0345% | 0.0345% |
| garlic press (`garlic_press`) | 0.0254% | 0.0345% | 0.0345% |
| glass bladed macuahuitl (`glass_macuahuitl`) | 0.0254% | 0.0345% | 0.0345% |
| glass bladed tepoztopili (`aztec_spear_glass`) | 0.0254% | 0.0345% | 0.0345% |
| glass prism (`glass_prism`) | 0.0254% | 0.0345% | 0.0345% |
| glass shard (`glass_shard`) | 0.0254% | 0.0345% | 0.0345% |
| gold (`gold_small`) | 0.0254% | 0.0345% | 0.0345% |
| grass yarn (`grass_yarn`) | 0.0254% | 0.0345% | 0.0345% |
| gravel (`material_gravel`) | 0.0254% | 0.0345% | 0.0345% |
| great pipe mace (`mace_pipe_large`) | 0.0254% | 0.0345% | 0.0345% |
| hammock (`hammock`) | 0.0254% | 0.0345% | 0.0345% |
| hand controls (`hand_controls`) | 0.0254% | 0.0345% | 0.0345% |
| handful of leaves (`leaves`) | 0.0254% | 0.0345% | 0.0345% |
| hardened steel chain link (`ch_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| hardened steel wire (`ch_wire`) | 0.0254% | 0.0345% | 0.0345% |
| heating element (`element`) | 0.0254% | 0.0345% | 0.0345% |
| heavy duty thread (`thread_canvas`) | 0.0254% | 0.0345% | 0.0345% |
| heavy wire rack (`heavy_wire_rack`) | 0.0254% | 0.0345% | 0.0345% |
| high steel chain link (`hc_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| high steel wire (`hc_wire`) | 0.0254% | 0.0345% | 0.0345% |
| hinge (`hinge`) | 0.0254% | 0.0345% | 0.0345% |
| hotcut (`hotcut`) | 0.0254% | 0.0345% | 0.0345% |
| improvised fishing hook (`fishing_hook_bone`) | 0.0254% | 0.0345% | 0.0345% |
| kerosene (`lamp_oil`) | 0.0254% | 0.0345% | 0.0345% |
| Kevlar scraps (`scrap_kevlar`) | 0.0254% | 0.0345% | 0.0345% |
| Kevlar sheet (`sheet_kevlar`) | 0.0254% | 0.0345% | 0.0345% |
| kiddie spoon (`plastic_spoon_kids`) | 0.0254% | 0.0345% | 0.0345% |
| large canine skull (`skull_canis`) | 0.0254% | 0.0345% | 0.0345% |
| large folded cardboard box (`box_large_folded`) | 0.0254% | 0.0345% | 0.0345% |
| large wooden club (`club_wooden_large`) | 0.0254% | 0.0345% | 0.0345% |
| lead (`lead`) | 0.0254% | 0.0345% | 0.0345% |
| leather funnel (`leather_funnel`) | 0.0254% | 0.0345% | 0.0345% |
| leather patch (`leather`) | 0.0254% | 0.0345% | 0.0345% |
| leather scraps (`scrap_leather`) | 0.0254% | 0.0345% | 0.0345% |
| leather sheet (`sheet_leather`) | 0.0254% | 0.0345% | 0.0345% |
| light bulb (`light_bulb`) | 0.0254% | 0.0345% | 0.0345% |
| lighter (`lighter`) | 0.0254% | 0.0345% | 0.0345% |
| lime mortar (`mortar_lime`) | 0.0254% | 0.0345% | 0.0345% |
| long cordage piece (`cordage_36`) | 0.0254% | 0.0345% | 0.0345% |
| long leather lace (`cordage_36_leather`) | 0.0254% | 0.0345% | 0.0345% |
| long string (`string_36`) | 0.0254% | 0.0345% | 0.0345% |
| Lycra patch (`lycra_patch`) | 0.0254% | 0.0345% | 0.0345% |
| Lycra sheet (`sheet_lycra`) | 0.0254% | 0.0345% | 0.0345% |
| magnifying glass (`magnifying_glass`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift bandage (`bandages_makeshift`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift crutches (`makeshift_crutches`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift funnel (`makeshift_funnel`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift macuahuitl (`aztec_sword_scrap`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift pillow (`makeshift_pillow`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift sap (`makeshift_sap`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift tepoztopili (`aztec_spear_scrap`) | 0.0254% | 0.0345% | 0.0345% |
| makeshift walking cane (`makeshift_cane`) | 0.0254% | 0.0345% | 0.0345% |
| medical gauze (`medical_gauze`) | 0.0254% | 0.0345% | 0.0345% |
| medium steel chain link (`mc_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| medium steel wire (`mc_wire`) | 0.0254% | 0.0345% | 0.0345% |
| mild steel chain link (`lc_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| motorbike alternator (`alternator_motorbike`) | 0.0254% | 0.0345% | 0.0345% |
| nail (`nail`) | 0.0254% | 0.0345% | 0.0345% |
| nail bat (`nailbat`) | 0.0254% | 0.0345% | 0.0345% |
| nailboard (`nailboard`) | 0.0254% | 0.0345% | 0.0345% |
| neoprene patch (`neoprene`) | 0.0254% | 0.0345% | 0.0345% |
| Nomex patch (`nomex`) | 0.0254% | 0.0345% | 0.0345% |
| Nomex sheet (`sheet_nomex`) | 0.0254% | 0.0345% | 0.0345% |
| Nomex thread (`thread_nomex`) | 0.0254% | 0.0345% | 0.0345% |
| nord (`sword_nail`) | 0.0254% | 0.0345% | 0.0345% |
| notched plank (`notched_plank`) | 0.0254% | 0.0345% | 0.0345% |
| notched stick (`notched_stick`) | 0.0254% | 0.0345% | 0.0345% |
| nut and bolt (`nuts_bolts`) | 0.0254% | 0.0345% | 0.0345% |
| oven control panel (`oven_controls`) | 0.0254% | 0.0345% | 0.0345% |
| paint brush (`paint_brush`) | 0.0254% | 0.0345% | 0.0345% |
| paint chipper (`chipper`) | 0.0254% | 0.0345% | 0.0345% |
| pair of bolt cutters (`boltcutters`) | 0.0254% | 0.0345% | 0.0345% |
| pair of tinted glass lenses (`glass_tinted`) | 0.0254% | 0.0345% | 0.0345% |
| paper (`paper`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork canvas sheet (`sheet_canvas_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork cotton sheet (`sheet_cotton_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork denim sheet (`sheet_denim_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork faux fur sheet (`sheet_faux_fur_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork felt sheet (`sheet_felt_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork fur sheet (`sheet_fur_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork Kevlar sheet (`sheet_kevlar_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork leather sheet (`sheet_leather_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork Lycra sheet (`sheet_lycra_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork neoprene sheet (`sheet_neoprene_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork Nomex sheet (`sheet_nomex_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| patchwork synthetic fabric sheet (`sheet_nylon_patchwork`) | 0.0254% | 0.0345% | 0.0345% |
| pearl (`pearl`) | 0.0254% | 0.0345% | 0.0345% |
| peasant flail (`2h_flail_wood`) | 0.0254% | 0.0345% | 0.0345% |
| pebble (`pebble`) | 0.0254% | 0.0345% | 0.0345% |
| piece of birchbark (`birchbark`) | 0.0254% | 0.0345% | 0.0345% |
| piece of cardboard (`cardboard`) | 0.0254% | 0.0345% | 0.0345% |
| pig skull (`skull_pig`) | 0.0254% | 0.0345% | 0.0345% |
| pile of dried seaweed (`dry_seaweed_pile`) | 0.0254% | 0.0345% | 0.0345% |
| pillow (`pillow`) | 0.0254% | 0.0345% | 0.0345% |
| pilot light (`pilot_light`) | 0.0254% | 0.0345% | 0.0345% |
| pipe staff (`staff_pipe`) | 0.0254% | 0.0345% | 0.0345% |
| plank (`2x4`) | 0.0254% | 0.0345% | 0.0345% |
| plastic chunk (`plastic_chunk`) | 0.0254% | 0.0345% | 0.0345% |
| plastic fork (`plastic_fork`) | 0.0254% | 0.0345% | 0.0345% |
| plastic gasket (`gasket_plastic`) | 0.0254% | 0.0345% | 0.0345% |
| plastic shank (`sharp_toothbrush`) | 0.0254% | 0.0345% | 0.0345% |
| plastic sheet (`plastic_sheet_small`) | 0.0254% | 0.0345% | 0.0345% |
| quarterstaff (`q_staff`) | 0.0254% | 0.0345% | 0.0345% |
| rabbit skull (`skull_rabbit`) | 0.0254% | 0.0345% | 0.0345% |
| radio (off) (`radio`) | 0.0254% | 0.0345% | 0.0345% |
| raw copper wire (`copper_wire`) | 0.0254% | 0.0345% | 0.0345% |
| razor blade (`razor_blade`) | 0.0254% | 0.0345% | 0.0345% |
| reading light (`reading_light`) | 0.0254% | 0.0345% | 0.0345% |
| rigid Kevlar plate (`rigid_kevlar_plate`) | 0.0254% | 0.0345% | 0.0345% |
| rodent skull (`skull_rodent`) | 0.0254% | 0.0345% | 0.0345% |
| rolling paper (`rolling_paper`) | 0.0254% | 0.0345% | 0.0345% |
| rollmat (`rollmat`) | 0.0254% | 0.0345% | 0.0345% |
| rubber band (`rubber_band`) | 0.0254% | 0.0345% | 0.0345% |
| rubber cement (`rubber_cement`) | 0.0254% | 0.0345% | 0.0345% |
| scrap aluminum (`scrap_aluminum`) | 0.0254% | 0.0345% | 0.0345% |
| scrap cast iron (`scrap_cast_iron`) | 0.0254% | 0.0345% | 0.0345% |
| scrap metal (`scrap`) | 0.0254% | 0.0345% | 0.0345% |
| scrap tin (`scrap_tin`) | 0.0254% | 0.0345% | 0.0345% |
| set of pipe fittings (`pipe_fittings`) | 0.0254% | 0.0345% | 0.0345% |
| shaving razor (`razor_shaving`) | 0.0254% | 0.0345% | 0.0345% |
| shelter kit (`shelter_kit`) | 0.0254% | 0.0345% | 0.0345% |
| shillelagh (`shillelagh`) | 0.0254% | 0.0345% | 0.0345% |
| short cordage piece (`cordage_6`) | 0.0254% | 0.0345% | 0.0345% |
| short leather lace (`cordage_6_leather`) | 0.0254% | 0.0345% | 0.0345% |
| short plank (`plank_short`) | 0.0254% | 0.0345% | 0.0345% |
| short string (`string_6`) | 0.0254% | 0.0345% | 0.0345% |
| short wooden post (`wooden_post_short`) | 0.0254% | 0.0345% | 0.0345% |
| shredded rubber (`shredded_rubber`) | 0.0254% | 0.0345% | 0.0345% |
| silver (`silver_small`) | 0.0254% | 0.0345% | 0.0345% |
| simple wooden bolt (`bolt_simple_wood`) | 0.0254% | 0.0345% | 0.0345% |
| simple wooden small game arrow (`arrow_small_game_fletched`) | 0.0254% | 0.0345% | 0.0345% |
| simple wooden small game bolt (`bolt_simple_small_game`) | 0.0254% | 0.0345% | 0.0345% |
| sinew (`sinew`) | 0.0254% | 0.0345% | 0.0345% |
| sling (`sling`) | 0.0254% | 0.0345% | 0.0345% |
| slingshot (`slingshot`) | 0.0254% | 0.0345% | 0.0345% |
| small feline skull (`skull_feline_small`) | 0.0254% | 0.0345% | 0.0345% |
| small folded cardboard box (`box_small_folded`) | 0.0254% | 0.0345% | 0.0345% |
| small high-quality lens (`lens_small`) | 0.0254% | 0.0345% | 0.0345% |
| small lock and key (`lock`) | 0.0254% | 0.0345% | 0.0345% |
| small metal sheet (`sheet_metal_small`) | 0.0254% | 0.0345% | 0.0345% |
| small propane tank (`small_propane_tank`) | 0.0254% | 0.0345% | 0.0345% |
| small storage battery (`small_storage_battery`) | 0.0254% | 0.0345% | 0.0345% |
| small wood block (`wood_block`) | 0.0254% | 0.0345% | 0.0345% |
| spear shaft (`spear_shaft`) | 0.0254% | 0.0345% | 0.0345% |
| spinning wheel (`spinwheelitem`) | 0.0254% | 0.0345% | 0.0345% |
| steel buckle (`buckle_steel`) | 0.0254% | 0.0345% | 0.0345% |
| steel button (`button_steel`) | 0.0254% | 0.0345% | 0.0345% |
| steel wire (`lc_wire`) | 0.0254% | 0.0345% | 0.0345% |
| stone bladed tepoztopili (`aztec_spear_stone`) | 0.0254% | 0.0345% | 0.0345% |
| stone lined macuahuitl (`aztec_sword_stone`) | 0.0254% | 0.0345% | 0.0345% |
| sunflower (`sunflower`) | 0.0254% | 0.0345% | 0.0345% |
| superglue (`super_glue`) | 0.0254% | 0.0345% | 0.0345% |
| survival match (`survival_match`) | 0.0254% | 0.0345% | 0.0345% |
| synthetic fabric patch (`nylon`) | 0.0254% | 0.0345% | 0.0345% |
| synthetic fabric scraps (`scrap_nylon`) | 0.0254% | 0.0345% | 0.0345% |
| tanned hide (`tanned_hide`) | 0.0254% | 0.0345% | 0.0345% |
| tanned pelt (`tanned_pelt`) | 0.0254% | 0.0345% | 0.0345% |
| tempered steel chain link (`qt_chain_link`) | 0.0254% | 0.0345% | 0.0345% |
| tempered steel wire (`qt_wire`) | 0.0254% | 0.0345% | 0.0345% |
| thick rubber chunk (`rubber_tire_chunk`) | 0.0254% | 0.0345% | 0.0345% |
| thread (`thread`) | 0.0254% | 0.0345% | 0.0345% |
| throwing stick (`throwing_stick`) | 0.0254% | 0.0345% | 0.0345% |
| tin powder (`tin`) | 0.0254% | 0.0345% | 0.0345% |
| tinder (`tinder`) | 0.0254% | 0.0345% | 0.0345% |
| tiny canine skull (`skull_canis_small`) | 0.0254% | 0.0345% | 0.0345% |
| toaster (`toaster`) | 0.0254% | 0.0345% | 0.0345% |
| torch (`torch`) | 0.0254% | 0.0345% | 0.0345% |
| towel hanger (`towel_hanger`) | 0.0254% | 0.0345% | 0.0345% |
| transponder circuit (`transponder`) | 0.0254% | 0.0345% | 0.0345% |
| walnuts (`walnut`) | 0.0254% | 0.0345% | 0.0345% |
| washboard (`washboard`) | 0.0254% | 0.0345% | 0.0345% |
| washing kit (`wash_kit`) | 0.0254% | 0.0345% | 0.0345% |
| water faucet (`water_faucet`) | 0.0254% | 0.0345% | 0.0345% |
| welding rod (`welding_rod_steel`) | 0.0254% | 0.0345% | 0.0345% |
| withered glass apple (`glass_apple`) | 0.0254% | 0.0345% | 0.0345% |
| wooden bead (`wooden_bead`) | 0.0254% | 0.0345% | 0.0345% |
| wooden block and tackle (`block_and_tackle_wood`) | 0.0254% | 0.0345% | 0.0345% |
| wooden club (`club_wooden`) | 0.0254% | 0.0345% | 0.0345% |
| wooden fishing spear (`fishspear`) | 0.0254% | 0.0345% | 0.0345% |
| wooden shed stick (`shed_stick`) | 0.0254% | 0.0345% | 0.0345% |
| wooden tonfa (`tonfa_wood`) | 0.0254% | 0.0345% | 0.0345% |
| wool staple (`wool_staple`) | 0.0254% | 0.0345% | 0.0345% |
| yarn (`yarn`) | 0.0254% | 0.0345% | 0.0345% |
| zinc (`zinc_metal`) | 0.0254% | 0.0345% | 0.0345% |
| zweitimber (`sword_wood_large`) | 0.0254% | 0.0345% | 0.0345% |
| bleached makeshift bandage (`bandages_makeshift_bleached`) | 0.0000% | 0.0344% | 0.0344% |
| 10.1 ounce squeeze tube (`squeeze_tube`) | 0.0151% | 0.0343% | 0.0343% |
| 2.8 ounce squeeze tube (`squeeze_tube_small`) | 0.0151% | 0.0343% | 0.0343% |
| acetylene cooker (`acetylene_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| adjustable wrench (`wrench`) | 0.0151% | 0.0343% | 0.0343% |
| aluminum bat (`bat_metal`) | 0.0151% | 0.0343% | 0.0343% |
| aluminum frying pan (`aluminum_pan`) | 0.0151% | 0.0343% | 0.0343% |
| aluminum pot (`pot_aluminum`) | 0.0151% | 0.0343% | 0.0343% |
| balloon (`balloon`) | 0.0151% | 0.0343% | 0.0343% |
| basket fish trap (`fish_trap_basket`) | 0.0151% | 0.0343% | 0.0343% |
| bike basket (`bike_basket`) | 0.0151% | 0.0343% | 0.0343% |
| blade (`blade`) | 0.0151% | 0.0343% | 0.0343% |
| bone billet (`billet_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone needle (`needle_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone punch (`punch_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone sewing awl (`awl_bone`) | 0.0151% | 0.0343% | 0.0343% |
| bone shiv (`bone_knife`) | 0.0151% | 0.0343% | 0.0343% |
| bone skewer (`skewer_bone`) | 0.0151% | 0.0343% | 0.0343% |
| boulder anvil (`boulder_anvil`) | 0.0151% | 0.0343% | 0.0343% |
| bow fire drill (`fire_drill`) | 0.0151% | 0.0343% | 0.0343% |
| bow saw (`bow_saw`) | 0.0151% | 0.0343% | 0.0343% |
| boxcutter knife (`boxcutter`) | 0.0151% | 0.0343% | 0.0343% |
| brick (`brick`) | 0.0151% | 0.0343% | 0.0343% |
| bronze hammer (`hammer_bronze`) | 0.0151% | 0.0343% | 0.0343% |
| bronze wood saw (`saw_bronze`) | 0.0151% | 0.0343% | 0.0343% |
| bucket (`bucket`) | 0.0151% | 0.0343% | 0.0343% |
| butchering kit (`butchering_kit`) | 0.0151% | 0.0343% | 0.0343% |
| butterfly sword (`butterfly_swords`) | 0.0151% | 0.0343% | 0.0343% |
| canvas bag (`bag_canvas_small`) | 0.0151% | 0.0343% | 0.0343% |
| canvas sack (`bag_canvas`) | 0.0151% | 0.0343% | 0.0343% |
| casserole pot (`casserole`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic bowl (`ceramic_bowl`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic cup (`ceramic_cup`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic plate (`ceramic_plate`) | 0.0151% | 0.0343% | 0.0343% |
| ceramic shard (`ceramic_shard`) | 0.0151% | 0.0343% | 0.0343% |
| chunk of aluminum (`material_aluminium_ingot`) | 0.0151% | 0.0343% | 0.0343% |
| chunk of mild steel (`lc_steel_chunk`) | 0.0151% | 0.0343% | 0.0343% |
| chunk of steel (`steel_chunk`) | 0.0151% | 0.0343% | 0.0343% |
| cigarette pack (`box_cigarette`) | 0.0151% | 0.0343% | 0.0343% |
| clamp (`clamp`) | 0.0151% | 0.0343% | 0.0343% |
| clay bowl (`bowl_clay`) | 0.0151% | 0.0343% | 0.0343% |
| clay canister (`clay_canister`) | 0.0151% | 0.0343% | 0.0343% |
| clay cup (`clay_cup`) | 0.0151% | 0.0343% | 0.0343% |
| clay jug (`jug_clay`) | 0.0151% | 0.0343% | 0.0343% |
| clay pot (`clay_pot`) | 0.0151% | 0.0343% | 0.0343% |
| clay teapot (`clay_teapot`) | 0.0151% | 0.0343% | 0.0343% |
| cleaver (`knife_cleaver`) | 0.0151% | 0.0343% | 0.0343% |
| coal/charcoal cooker (`charcoal_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| coconut bowl (`bowl_coconut`) | 0.0151% | 0.0343% | 0.0343% |
| coffee mug (`ceramic_mug`) | 0.0151% | 0.0343% | 0.0343% |
| coffee pot (`coffeepot`) | 0.0151% | 0.0343% | 0.0343% |
| coffeemaker (`coffeemaker`) | 0.0151% | 0.0343% | 0.0343% |
| condom (`condom`) | 0.0151% | 0.0343% | 0.0343% |
| copper frying pan (`copper_pan`) | 0.0151% | 0.0343% | 0.0343% |
| copper hatchet (`copper_ax`) | 0.0151% | 0.0343% | 0.0343% |
| copper knife (`copper_knife`) | 0.0151% | 0.0343% | 0.0343% |
| copper pot (`pot_copper`) | 0.0151% | 0.0343% | 0.0343% |
| cotton patch (`cotton_patchwork`) | 0.0151% | 0.0343% | 0.0343% |
| crowbar (`crowbar`) | 0.0151% | 0.0343% | 0.0343% |
| crucible (`crucible`) | 0.0151% | 0.0343% | 0.0343% |
| curved needle (`needle_curved`) | 0.0151% | 0.0343% | 0.0343% |
| digging stick (`digging_stick`) | 0.0151% | 0.0343% | 0.0343% |
| drinking glass (`glass`) | 0.0151% | 0.0343% | 0.0343% |
| duct tape wallet (`wallet_duct_tape`) | 0.0151% | 0.0343% | 0.0343% |
| electrohack (`electrohack`) | 0.0151% | 0.0343% | 0.0343% |
| empty canister (`canister_empty`) | 0.0151% | 0.0343% | 0.0343% |
| fiber mat (`fiber_mat`) | 0.0151% | 0.0343% | 0.0343% |
| fire brick (`fire_brick`) | 0.0151% | 0.0343% | 0.0343% |
| fire-hardened wooden spear (`spear_wood`) | 0.0151% | 0.0343% | 0.0343% |
| foil cup (`cup_foil`) | 0.0151% | 0.0343% | 0.0343% |
| foil wrapper (`wrapper_foil`) | 0.0151% | 0.0343% | 0.0343% |
| foldable plastic bottle (`bottle_folding`) | 0.0151% | 0.0343% | 0.0343% |
| garbage bag (`bag_garbage`) | 0.0151% | 0.0343% | 0.0343% |
| gasoline cooker (`gasoline_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| glass bowl (`glass_bowl`) | 0.0151% | 0.0343% | 0.0343% |
| glass plate (`glass_plate`) | 0.0151% | 0.0343% | 0.0343% |
| glass seasoning bottle (`bottle_glass_seasoning`) | 0.0151% | 0.0343% | 0.0343% |
| glass shiv (`glass_shiv`) | 0.0151% | 0.0343% | 0.0343% |
| grip hook (`grip_hook`) | 0.0151% | 0.0343% | 0.0343% |
| hacksaw (`hacksaw`) | 0.0151% | 0.0343% | 0.0343% |
| hammer (`hammer`) | 0.0151% | 0.0343% | 0.0343% |
| hand drill (`hand_drill`) | 0.0151% | 0.0343% | 0.0343% |
| hand pump (`hand_pump`) | 0.0151% | 0.0343% | 0.0343% |
| handheld glass cutter (`glass_cutter`) | 0.0151% | 0.0343% | 0.0343% |
| hatchet (`hatchet`) | 0.0151% | 0.0343% | 0.0343% |
| hexamine stove (`esbit_stove`) | 0.0151% | 0.0343% | 0.0343% |
| hobo stove (`hobo_stove`) | 0.0151% | 0.0343% | 0.0343% |
| huge kitchen knife (`knife_huge`) | 0.0151% | 0.0343% | 0.0343% |
| improvised lockpick (`crude_picklock`) | 0.0151% | 0.0343% | 0.0343% |
| IV bag (`bag_iv`) | 0.0151% | 0.0343% | 0.0343% |
| kettle (`kettle`) | 0.0151% | 0.0343% | 0.0343% |
| kiddie bowl (`plastic_bowl_kids`) | 0.0151% | 0.0343% | 0.0343% |
| large kitchen knife (`knife_large`) | 0.0151% | 0.0343% | 0.0343% |
| large rifle conversion kit (`box_retool_large`) | 0.0151% | 0.0343% | 0.0343% |
| large sealed stomach (`large_stomach_sealed`) | 0.0151% | 0.0343% | 0.0343% |
| large tin can (`can_food_big`) | 0.0151% | 0.0343% | 0.0343% |
| large wooden bowl (`bowl_wood_large`) | 0.0151% | 0.0343% | 0.0343% |
| leather bellow (`leather_bellow`) | 0.0151% | 0.0343% | 0.0343% |
| leather wallet (`wallet_leather`) | 0.0151% | 0.0343% | 0.0343% |
| locking pliers (`pliers_locking`) | 0.0151% | 0.0343% | 0.0343% |
| lump of steel (`steel_lump`) | 0.0151% | 0.0343% | 0.0343% |
| lunchbox (`lunchbox`) | 0.0151% | 0.0343% | 0.0343% |
| machete (`machete`) | 0.0151% | 0.0343% | 0.0343% |
| maker kit box (`maker_kit_box`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift brazier (`makeshift_brazier`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift copper pot (`pot_makeshift_copper`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift crowbar (`makeshift_crowbar`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift hammer (`makeshift_hammer`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift hand drill (`makeshift_hand_drill`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift knife (`makeshift_knife`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift machete (`makeshift_machete`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift sieve (`sieve_steel_makeshift`) | 0.0151% | 0.0343% | 0.0343% |
| makeshift tree spile (`makeshift_tree_spile`) | 0.0151% | 0.0343% | 0.0343% |
| mess kit (`mess_kit`) | 0.0151% | 0.0343% | 0.0343% |
| metal axe head (`makeshift_axe`) | 0.0151% | 0.0343% | 0.0343% |
| metal fileset (`metal_file`) | 0.0151% | 0.0343% | 0.0343% |
| metal paint can (`paint_can_steel`) | 0.0151% | 0.0343% | 0.0343% |
| metal tank (2 L) (`metal_tank_little`) | 0.0151% | 0.0343% | 0.0343% |
| metalworking chisel (`chisel`) | 0.0151% | 0.0343% | 0.0343% |
| micro-carbine conversion kit (`box_retool_sbr_micro`) | 0.0151% | 0.0343% | 0.0343% |
| milk carton (`carton_milk`) | 0.0151% | 0.0343% | 0.0343% |
| mop (`mop`) | 0.0151% | 0.0343% | 0.0343% |
| MRE bag (`mre_bag`) | 0.0151% | 0.0343% | 0.0343% |
| MRE dessert bag (`mre_bag_dessert`) | 0.0151% | 0.0343% | 0.0343% |
| MRE jam bag (`mre_bag_jam`) | 0.0151% | 0.0343% | 0.0343% |
| MRE package (`mre_package`) | 0.0151% | 0.0343% | 0.0343% |
| MRE spread bag (`mre_bag_spread`) | 0.0151% | 0.0343% | 0.0343% |
| nail punch (`punch_nail`) | 0.0151% | 0.0343% | 0.0343% |
| needle (`needle_steel`) | 0.0151% | 0.0343% | 0.0343% |
| pair of flatjaw tongs (`metalworking_tongs`) | 0.0151% | 0.0343% | 0.0343% |
| pair of kitchen tongs (`tongs`) | 0.0151% | 0.0343% | 0.0343% |
| pair of knitting needles (`knitting_needles`) | 0.0151% | 0.0343% | 0.0343% |
| pair of office scissors (`scissors`) | 0.0151% | 0.0343% | 0.0343% |
| paper wrapper (`wrapper`) | 0.0151% | 0.0343% | 0.0343% |
| pewter bowl (`bowl_pewter`) | 0.0151% | 0.0343% | 0.0343% |
| pipe (`pipe`) | 0.0151% | 0.0343% | 0.0343% |
| pipe mace (`mace_pipe`) | 0.0151% | 0.0343% | 0.0343% |
| plastic bag (`bag_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| plastic fish trap (`fish_trap`) | 0.0151% | 0.0343% | 0.0343% |
| plastic hand fishing reel (`plastichoboreel`) | 0.0151% | 0.0343% | 0.0343% |
| plastic painkiller bottle (`bottle_plastic_pill_painkiller`) | 0.0151% | 0.0343% | 0.0343% |
| plastic paint can (`paint_can_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| plastic plate (`plastic_plate`) | 0.0151% | 0.0343% | 0.0343% |
| plastic prescription bottle (`bottle_plastic_pill_prescription`) | 0.0151% | 0.0343% | 0.0343% |
| plastic tumbler (`tumbler_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| plastic tupperware (`bowl_plastic`) | 0.0151% | 0.0343% | 0.0343% |
| pliers (`pliers`) | 0.0151% | 0.0343% | 0.0343% |
| pointy stick (`pointy_stick`) | 0.0151% | 0.0343% | 0.0343% |
| pot (`pot`) | 0.0151% | 0.0343% | 0.0343% |
| primitive rock drill (`drill_rock_primitive`) | 0.0151% | 0.0343% | 0.0343% |
| pro fishing rod (`fishing_rod_professional`) | 0.0151% | 0.0343% | 0.0343% |
| propane cooker (`propane_cooker`) | 0.0151% | 0.0343% | 0.0343% |
| pump fire drill (`fire_drill_large`) | 0.0151% | 0.0343% | 0.0343% |
| reinforced garbage bag (`bag_garbage_reinforced`) | 0.0151% | 0.0343% | 0.0343% |
| rock in a sock (`rock_sock`) | 0.0151% | 0.0343% | 0.0343% |
| rubber hose (`hose`) | 0.0151% | 0.0343% | 0.0343% |
| rudimentary lockpick (`emergency_lockpick`) | 0.0151% | 0.0343% | 0.0343% |
| sandleather (`leather_filing`) | 0.0151% | 0.0343% | 0.0343% |
| SBR conversion kit (`box_retool_sbr`) | 0.0151% | 0.0343% | 0.0343% |
| scrap sword (`sword_crude`) | 0.0151% | 0.0343% | 0.0343% |
| screwdriver (`screwdriver`) | 0.0151% | 0.0343% | 0.0343% |
| screwdriver set (`screwdriver_set`) | 0.0151% | 0.0343% | 0.0343% |
| scythe blade (`blade_scythe`) | 0.0151% | 0.0343% | 0.0343% |
| sealed stomach (`stomach_sealed`) | 0.0151% | 0.0343% | 0.0343% |
| set of clothes (`outfit_storage`) | 0.0151% | 0.0343% | 0.0343% |
| sewing kit (`sewing_kit`) | 0.0151% | 0.0343% | 0.0343% |
| sharp rock (`sharp_rock`) | 0.0151% | 0.0343% | 0.0343% |
| sharpened pipe (`sharpened_pipe`) | 0.0151% | 0.0343% | 0.0343% |
| simple mace (`mace_simple`) | 0.0151% | 0.0343% | 0.0343% |
| sippy cup (`sippy_cup`) | 0.0151% | 0.0343% | 0.0343% |
| skull bowl (`bowl_skull`) | 0.0151% | 0.0343% | 0.0343% |
| small adjustable wrench (`wrench_small`) | 0.0151% | 0.0343% | 0.0343% |
| small biogas tank (`small_biogas_tank`) | 0.0151% | 0.0343% | 0.0343% |
| small cardboard box (`box_small`) | 0.0151% | 0.0343% | 0.0343% |
| small glass tube (`glass_tube_small`) | 0.0151% | 0.0343% | 0.0343% |
| small kitchen knife (`knife_small`) | 0.0151% | 0.0343% | 0.0343% |
| small metal box (`box_small_metal`) | 0.0151% | 0.0343% | 0.0343% |
| small plastic bag (`bag_plastic_small`) | 0.0151% | 0.0343% | 0.0343% |
| small plastic seasoning bottle (`bottle_plastic_seasoning_small`) | 0.0151% | 0.0343% | 0.0343% |
| small tin can (`can_food`) | 0.0151% | 0.0343% | 0.0343% |
| small wooden box (`box_small_wood`) | 0.0151% | 0.0343% | 0.0343% |
| spike (`spike`) | 0.0151% | 0.0343% | 0.0343% |
| steel bottle (`bottle_metal`) | 0.0151% | 0.0343% | 0.0343% |
| steel frying pan (`steel_pan`) | 0.0151% | 0.0343% | 0.0343% |
| steel sewing awl (`awl_steel`) | 0.0151% | 0.0343% | 0.0343% |
| steel tankard (`tankard_metal`) | 0.0151% | 0.0343% | 0.0343% |
| stone adze (`primitive_adze`) | 0.0151% | 0.0343% | 0.0343% |
| stone axe (`primitive_axe`) | 0.0151% | 0.0343% | 0.0343% |
| stone axe head (`hand_axe`) | 0.0151% | 0.0343% | 0.0343% |
| stone chisel (`stone_chisel`) | 0.0151% | 0.0343% | 0.0343% |
| stone chopper (`stone_chopper`) | 0.0151% | 0.0343% | 0.0343% |
| stone hammer (`primitive_hammer`) | 0.0151% | 0.0343% | 0.0343% |
| stone knife (`primitive_knife`) | 0.0151% | 0.0343% | 0.0343% |
| stone sickle (`sickle_stone`) | 0.0151% | 0.0343% | 0.0343% |
| storage line (`storage_line`) | 0.0151% | 0.0343% | 0.0343% |
| superalloy sheet (`alloy_sheet`) | 0.0151% | 0.0343% | 0.0343% |
| survival kit box (`survival_kit_box`) | 0.0151% | 0.0343% | 0.0343% |
| survival knife (`knife_rambo`) | 0.0151% | 0.0343% | 0.0343% |
| tailor's kit (`tailors_kit`) | 0.0151% | 0.0343% | 0.0343% |
| teapot (`teapot`) | 0.0151% | 0.0343% | 0.0343% |
| telescoping fishing rod (`fishing_rod_tele`) | 0.0151% | 0.0343% | 0.0343% |
| tiger claws (`bagh_nakha`) | 0.0151% | 0.0343% | 0.0343% |
| tin cup (`tin_cup`) | 0.0151% | 0.0343% | 0.0343% |
| tin plate (`tin_plate`) | 0.0151% | 0.0343% | 0.0343% |
| tin snips (`tin_snips`) | 0.0151% | 0.0343% | 0.0343% |
| tiny plastic bottle (`bottle_plastic_tiny`) | 0.0151% | 0.0343% | 0.0343% |
| tobacco pipe (`pipe_tobacco`) | 0.0151% | 0.0343% | 0.0343% |
| tongue-and-groove pliers (`big_pliers`) | 0.0151% | 0.0343% | 0.0343% |
| trench mace (`mace_trench`) | 0.0151% | 0.0343% | 0.0343% |
| two-piece fishing rod (`fishing_rod_2pc`) | 0.0151% | 0.0343% | 0.0343% |
| vacuum-packed bag (`plastic_bag_vac`) | 0.0151% | 0.0343% | 0.0343% |
| water pipe (`pipe_water`) | 0.0151% | 0.0343% | 0.0343% |
| wicker sieve (`sieve_primitive`) | 0.0151% | 0.0343% | 0.0343% |
| wine glass (`wine_glass`) | 0.0151% | 0.0343% | 0.0343% |
| wood saw (`saw`) | 0.0151% | 0.0343% | 0.0343% |
| wooden billet (`billet_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden bowl (`bowl_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden bucket (`bucket_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden hand fishing reel (`hoboreel`) | 0.0151% | 0.0343% | 0.0343% |
| wooden needle (`needle_wood`) | 0.0151% | 0.0343% | 0.0343% |
| wooden tankard (`tankard_wooden`) | 0.0151% | 0.0343% | 0.0343% |
| zipper bag (`bag_zipper`) | 0.0151% | 0.0343% | 0.0343% |
| 101 Crafts for Beginners (`manual_fabrication`) | 0.0295% | 0.0295% | 0.0295% |
| Advanced Electronics (`advanced_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| Amateur Home Radio for Enthusiasts (`radio_book`) | 0.0295% | 0.0295% | 0.0295% |
| Chemistry for Kids: Awesome Science Experiments that Really Work (`basic_chemistry`) | 0.0295% | 0.0295% | 0.0295% |
| chemistry textbook (`textbook_chemistry`) | 0.0295% | 0.0295% | 0.0295% |
| Close Quarter Fighting Manual (`manual_melee`) | 0.0295% | 0.0295% | 0.0295% |
| Cooking on a Budget (`cookbook`) | 0.0295% | 0.0295% | 0.0295% |
| durable plastic sack, cement (`bag_durasack_cement`) | 0.0295% | 0.0295% | 0.0295% |
| Electronic Circuit Theory (`textbook_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| Ham Radio Illustrated (`mag_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| Historic Warfare: The Bronze Age (`bronze_mag`) | 0.0295% | 0.0295% | 0.0295% |
| Pitching a Tent (`manual_survival`) | 0.0295% | 0.0295% | 0.0295% |
| Pocket Survival Guide (`pocket_survival`) | 0.0295% | 0.0295% | 0.0295% |
| robotics kit instructions (`manual_robotics_kit`) | 0.0295% | 0.0295% | 0.0295% |
| Sew What? Clothing! (`manual_tailor`) | 0.0295% | 0.0295% | 0.0295% |
| Stirling engine kit instructions (`manual_engine_kit`) | 0.0295% | 0.0295% | 0.0295% |
| Studies in Historic Armorsmithing (`textbook_armwest`) | 0.0295% | 0.0295% | 0.0295% |
| The Big Book of First Aid (`manual_first_aid`) | 0.0295% | 0.0295% | 0.0295% |
| The Book of Dances (`manual_dodge`) | 0.0295% | 0.0295% | 0.0295% |
| The Essential Oil Enthusiasts Handbook (`textbook_extraction`) | 0.0295% | 0.0295% | 0.0295% |
| Under the Hood (`manual_mechanics`) | 0.0295% | 0.0295% | 0.0295% |
| What's a Transistor? (`manual_electronics`) | 0.0295% | 0.0295% | 0.0295% |
| cot (`cot`) | 0.0254% | 0.0254% | 0.0254% |
| electric spinwheel (`electric_spinwheel`) | 0.0254% | 0.0254% | 0.0254% |
| frame loom (`loom_frame`) | 0.0254% | 0.0254% | 0.0254% |
| hand press (`press`) | 0.0254% | 0.0254% | 0.0254% |
| long plank (`plank_long`) | 0.0254% | 0.0254% | 0.0254% |
| makerspace kit for STEM (`engineering_makerspace_kit`) | 0.0254% | 0.0254% | 0.0254% |
| rubber tire strip (`rubber_tire_strip`) | 0.0254% | 0.0254% | 0.0254% |
| small sandcasting mold (`casting_mold_small`) | 0.0254% | 0.0254% | 0.0254% |
| spring (`spring`) | 0.0254% | 0.0254% | 0.0254% |
| wooden armor kit (`wood_plate`) | 0.0254% | 0.0254% | 0.0254% |
| wooden post (`wooden_post`) | 0.0254% | 0.0254% | 0.0254% |
| wooden stool (`stool_wood`) | 0.0254% | 0.0254% | 0.0254% |
| yellow carpet (`y_carpet`) | 0.0254% | 0.0254% | 0.0254% |
| adobe brick (`adobe_brick`) | 0.0151% | 0.0242% | 0.0242% |
| basic fishing rod (`fishing_rod_basic`) | 0.0151% | 0.0242% | 0.0242% |
| basic pipe spear (`simple_spear_pipe`) | 0.0151% | 0.0242% | 0.0242% |
| battle axe (`battleaxe`) | 0.0151% | 0.0242% | 0.0242% |
| bill (`brush_axe`) | 0.0151% | 0.0242% | 0.0242% |
| body bag (`bag_body_bag`) | 0.0151% | 0.0242% | 0.0242% |
| bolted battle axe (`ax_sheets_bolted`) | 0.0151% | 0.0242% | 0.0242% |
| cast-iron frying pan (`pan`) | 0.0151% | 0.0242% | 0.0242% |
| cast-iron pot (`iron_pot`) | 0.0151% | 0.0242% | 0.0242% |
| chunk of budget steel (`budget_steel_chunk`) | 0.0151% | 0.0242% | 0.0242% |
| clay crucible (`crucible_clay`) | 0.0151% | 0.0242% | 0.0242% |
| clay hydria (`clay_hydria`) | 0.0151% | 0.0242% | 0.0242% |
| clay urn (`clay_urn`) | 0.0151% | 0.0242% | 0.0242% |
| coin wrapper (`coin_wrapper`) | 0.0151% | 0.0242% | 0.0242% |
| cordless drill (`cordless_drill`) | 0.0151% | 0.0242% | 0.0242% |
| cordless impact wrench (`cordless_impact_wrench`) | 0.0151% | 0.0242% | 0.0242% |
| crude steel spear (`spear_steel_crude`) | 0.0151% | 0.0242% | 0.0242% |
| damaged shelter kit (`damaged_shelter_kit`) | 0.0151% | 0.0242% | 0.0242% |
| engineer's hammer (`hammer_sledge_engineer`) | 0.0151% | 0.0242% | 0.0242% |
| homemade polehammer (`homemade_polehammer`) | 0.0151% | 0.0242% | 0.0242% |
| improvised oven (`improvised_oven`) | 0.0151% | 0.0242% | 0.0242% |
| ironshod quarterstaff (`i_staff`) | 0.0151% | 0.0242% | 0.0242% |
| knife spear (`spear_knife_proper`) | 0.0151% | 0.0242% | 0.0242% |
| large adjustable wrench (`wrench_large`) | 0.0151% | 0.0242% | 0.0242% |
| leather tarp (`leather_tarp`) | 0.0151% | 0.0242% | 0.0242% |
| long pointy stick (`pointy_stick_long`) | 0.0151% | 0.0242% | 0.0242% |
| long pole (`long_pole`) | 0.0151% | 0.0242% | 0.0242% |
| lump of budget steel (`budget_steel_lump`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift glaive (`makeshift_glaive`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift homemade polehammer (`homemade_polehammer_makeshift`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift knife spear (`spear_knife_superior`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift pressure cooker (`makeshift_pressure_cooker`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift stethoscope (`makeshift_stethoscope`) | 0.0151% | 0.0242% | 0.0242% |
| makeshift welding blanket (`makeshift_welding_blanket`) | 0.0151% | 0.0242% | 0.0242% |
| miscellaneous repair kit (`misc_repairkit`) | 0.0151% | 0.0242% | 0.0242% |
| mortar and pestle (`mortar_pestle`) | 0.0151% | 0.0242% | 0.0242% |
| plastic gasket set (`gasket_plastic_set`) | 0.0151% | 0.0242% | 0.0242% |
| plastic jerrycan (`jerrycan`) | 0.0151% | 0.0242% | 0.0242% |
| rebar (`rebar`) | 0.0151% | 0.0242% | 0.0242% |
| scrap greatsword (`sword_crude_large`) | 0.0151% | 0.0242% | 0.0242% |
| simple knife spear (`spear_knife`) | 0.0151% | 0.0242% | 0.0242% |
| simple makeshift glaive (`makeshift_halberd`) | 0.0151% | 0.0242% | 0.0242% |
| spike on a stick (`spear_spike`) | 0.0151% | 0.0242% | 0.0242% |
| stock pot (`stock_pot`) | 0.0151% | 0.0242% | 0.0242% |
| stone spear (`spear_stone`) | 0.0151% | 0.0242% | 0.0242% |
| survivor mess kit (`survivor_mess_kit`) | 0.0151% | 0.0242% | 0.0242% |
| swage and die set (`swage`) | 0.0151% | 0.0242% | 0.0242% |
| thread cutting set (`thread_cutting_set`) | 0.0151% | 0.0242% | 0.0242% |
| toolbox (`toolbox_empty`) | 0.0151% | 0.0242% | 0.0242% |
| welded battle axe (`ax_sheets_welded`) | 0.0151% | 0.0242% | 0.0242% |
| wood axe (`ax`) | 0.0151% | 0.0242% | 0.0242% |
| wooden javelin (`javelin`) | 0.0151% | 0.0242% | 0.0242% |
| wooden shovel (`primitive_shovel`) | 0.0151% | 0.0242% | 0.0242% |
| wooden smoother (`wood_smoother`) | 0.0151% | 0.0242% | 0.0242% |
| X-Acto knife (`xacto`) | 0.0151% | 0.0242% | 0.0242% |
| amplifier circuit (`amplifier`) | 0.0000% | 0.0181% | 0.0181% |
| antenna (`antenna`) | 0.0000% | 0.0181% | 0.0181% |
| barbed wire (`wire_barbed`) | 0.0000% | 0.0181% | 0.0181% |
| battery charger (`battery_charger`) | 0.0000% | 0.0181% | 0.0181% |
| big tool battery (`heavy_plus_battery_cell`) | 0.0000% | 0.0181% | 0.0181% |
| carbon electrode rod (`carbon_electrode`) | 0.0000% | 0.0181% | 0.0181% |
| circuit board (`circuit`) | 0.0000% | 0.0181% | 0.0181% |
| copper wire (`cable`) | 0.0000% | 0.0181% | 0.0181% |
| electric lantern (off) (`electric_lantern`) | 0.0000% | 0.0181% | 0.0181% |
| electrolysis kit (`electrolysis_kit`) | 0.0000% | 0.0181% | 0.0181% |
| electronics control unit (`electronics_controls`) | 0.0000% | 0.0181% | 0.0181% |
| flashlight (off) (`flashlight`) | 0.0000% | 0.0181% | 0.0181% |
| hand-crank charger (`hand_crank_charger`) | 0.0000% | 0.0181% | 0.0181% |
| hotplate (`hotplate`) | 0.0000% | 0.0181% | 0.0181% |
| instrument cable (`cable_instrument`) | 0.0000% | 0.0181% | 0.0181% |
| makeshift arc welder (`welder_crude`) | 0.0000% | 0.0181% | 0.0181% |
| micro electric motor (`motor_micro`) | 0.0000% | 0.0181% | 0.0181% |
| motorbike battery (`battery_motorbike`) | 0.0000% | 0.0181% | 0.0181% |
| motorcycle police boots (pair) (`motor_police_boots`) | 0.0000% | 0.0181% | 0.0181% |
| multimeter (`multimeter`) | 0.0000% | 0.0181% | 0.0181% |
| portable soldering iron (`soldering_iron_portable`) | 0.0000% | 0.0181% | 0.0181% |
| power converter (`power_supply`) | 0.0000% | 0.0181% | 0.0181% |
| signal receiver (`receiver`) | 0.0000% | 0.0181% | 0.0181% |
| small electric motor (`motor_small`) | 0.0000% | 0.0181% | 0.0181% |
| small motorbike battery (`battery_motorbike_small`) | 0.0000% | 0.0181% | 0.0181% |
| solar panel (`solar_panel`) | 0.0000% | 0.0181% | 0.0181% |
| solder (`solder_wire`) | 0.0000% | 0.0181% | 0.0181% |
| soldering iron (`soldering_iron`) | 0.0000% | 0.0181% | 0.0181% |
| speaker cable (`cable_speaker`) | 0.0000% | 0.0181% | 0.0181% |
| steel mesh (`wire_mesh`) | 0.0000% | 0.0181% | 0.0181% |
| tiny electric motor (`motor_tiny`) | 0.0000% | 0.0181% | 0.0181% |
| ultra-light battery (rechargeable) (`light_minus_battery_cell`) | 0.0000% | 0.0181% | 0.0181% |
| wire (`wire`) | 0.0000% | 0.0181% | 0.0181% |
| XLR cable (`cable_xlr`) | 0.0000% | 0.0181% | 0.0181% |
| bench vise (`bench_vise`) | 0.0151% | 0.0151% | 0.0151% |
| cast-iron dutch oven (`dutch_oven`) | 0.0151% | 0.0151% | 0.0151% |
| heavy sledge hammer (`hammer_sledge_heavy`) | 0.0151% | 0.0151% | 0.0151% |
| homewrecker (`homewrecker`) | 0.0151% | 0.0151% | 0.0151% |
| makeshift pot (`pot_makeshift`) | 0.0151% | 0.0151% | 0.0151% |
| makeshift war scythe (`makeshift_scythe_war`) | 0.0151% | 0.0151% | 0.0151% |
| muffler (`muffler`) | 0.0151% | 0.0151% | 0.0151% |
| polishing stone (`stone_polishing`) | 0.0151% | 0.0151% | 0.0151% |
| pressure cooker (`pressure_cooker`) | 0.0151% | 0.0151% | 0.0151% |
| sheet metal (`sheet_metal`) | 0.0151% | 0.0151% | 0.0151% |
| short sledge hammer (`hammer_sledge_short`) | 0.0151% | 0.0151% | 0.0151% |
| sledge hammer (`hammer_sledge`) | 0.0151% | 0.0151% | 0.0151% |
| still (`still`) | 0.0151% | 0.0151% | 0.0151% |
| superalloy plating (`alloy_plate`) | 0.0151% | 0.0151% | 0.0151% |
| the Disorder (`pulverizer`) | 0.0151% | 0.0151% | 0.0151% |
| large tactical backpack (`backpack_tactical_large`) | 0.0021% | 0.0146% | 0.0146% |
| leather backpack (`backpack_leather`) | 0.0021% | 0.0146% | 0.0146% |
| net backpack (`net_backpack`) | 0.0021% | 0.0146% | 0.0146% |
| small backpack (`backpack_small`) | 0.0021% | 0.0146% | 0.0146% |
| wicker backpack (`wicker_backpack`) | 0.0021% | 0.0146% | 0.0146% |
| arc welder (`welder`) | 0.0000% | 0.0091% | 0.0091% |
| circular saw (off) (`circsaw_off`) | 0.0000% | 0.0091% | 0.0091% |
| electric forge (`forge`) | 0.0000% | 0.0091% | 0.0091% |
| headlamp (`wearable_light`) | 0.0000% | 0.0091% | 0.0091% |
| heavy-duty flashlight (off) (`heavy_flashlight`) | 0.0000% | 0.0091% | 0.0091% |
| heavy-duty headlamp (`wearable_big_light`) | 0.0000% | 0.0091% | 0.0091% |
| high-temperature welding kit (`welding_kit`) | 0.0000% | 0.0091% | 0.0091% |
| manual oil press (`oil_press_manual`) | 0.0000% | 0.0091% | 0.0091% |
| bacon (`bacon`) | 0.0048% | 0.0048% | 0.0048% |
| banana (`banana`) | 0.0048% | 0.0048% | 0.0048% |
| batter fried fish (`fish_fried`) | 0.0048% | 0.0048% | 0.0048% |
| beans and rice (`beansnrice`) | 0.0048% | 0.0048% | 0.0048% |
| black pepper (`pepper`) | 0.0048% | 0.0048% | 0.0048% |
| BLT (`blt`) | 0.0048% | 0.0048% | 0.0048% |
| boiled stomach (`small_stomach_boiled`) | 0.0048% | 0.0048% | 0.0048% |
| bone meal (`meal_bone`) | 0.0048% | 0.0048% | 0.0048% |
| boring sandwich (`sandwich_sauce`) | 0.0048% | 0.0048% | 0.0048% |
| bottle gourd seeds (`seed_bottle_gourd`) | 0.0048% | 0.0048% | 0.0048% |
| buttercream icing (`buttercream`) | 0.0048% | 0.0048% | 0.0048% |
| buttermilk (`buttermilk`) | 0.0048% | 0.0048% | 0.0048% |
| campfire hot dog (`hotdogs_campfire`) | 0.0048% | 0.0048% | 0.0048% |
| canned corn (`can_corn`) | 0.0048% | 0.0048% | 0.0048% |
| canned sardine (`can_sardine`) | 0.0048% | 0.0048% | 0.0048% |
| canned tuna fish (`can_tuna`) | 0.0048% | 0.0048% | 0.0048% |
| carrot pound cake (`mre_carrot_cake`) | 0.0048% | 0.0048% | 0.0048% |
| chaff (`chaff`) | 0.0048% | 0.0048% | 0.0048% |
| cheese (`cheese`) | 0.0048% | 0.0048% | 0.0048% |
| cheese fries (`cheese_fries`) | 0.0048% | 0.0048% | 0.0048% |
| cheese grits (`cheese_grits`) | 0.0048% | 0.0048% | 0.0048% |
| cheese nachos (`nachosc`) | 0.0048% | 0.0048% | 0.0048% |
| cheese sandwich (`sandwich_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| cheeseburger (`cheeseburger`) | 0.0048% | 0.0048% | 0.0048% |
| chicory seeds (`seed_chicory`) | 0.0048% | 0.0048% | 0.0048% |
| chocolate bar (`chocolate`) | 0.0048% | 0.0048% | 0.0048% |
| chocolate milk (`milk_choc`) | 0.0048% | 0.0048% | 0.0048% |
| chocolate milkshake (`milkshake_choc`) | 0.0048% | 0.0048% | 0.0048% |
| cocoa powder (`cocoa_powder`) | 0.0048% | 0.0048% | 0.0048% |
| coffee substitute (`coffee_substitute`) | 0.0048% | 0.0048% | 0.0048% |
| coffee substitute with milk (`milk_coffee_substitute`) | 0.0048% | 0.0048% | 0.0048% |
| condensed milk (`con_milk`) | 0.0048% | 0.0048% | 0.0048% |
| cooked bell pepper (`cooked_bell_pepper`) | 0.0048% | 0.0048% | 0.0048% |
| cooked corn dog (`corndogs_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper fatty meat (`pepperfat`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper meat (`peppermeat`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper poultry (`poultry_pepper`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper scrap of meat (`pepperscrap`) | 0.0048% | 0.0048% | 0.0048% |
| cooked pepper scrap of poultry (`poultry_scrap_pepper`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of brain (`brain_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of heart (`heart_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of kidney (`kidney_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of liver (`liver_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of lung (`lung_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked piece of sweetbread (`sweetbread_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked scrap of meat (`meat_scrap_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked scrap of poultry (`poultry_scrap_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked TV dinner (`cooked_dinner`) | 0.0048% | 0.0048% | 0.0048% |
| cooked wild rice (`wild_rice_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cooked wild vegetables (`veggy_wild_cooked`) | 0.0048% | 0.0048% | 0.0048% |
| cornmeal (`cornmeal`) | 0.0048% | 0.0048% | 0.0048% |
| cracklins (`cracklins`) | 0.0048% | 0.0048% | 0.0048% |
| cucumber sandwich (`sandwich_cucumber`) | 0.0048% | 0.0048% | 0.0048% |
| dandelion tea (`dandelion_tea`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated chicken (`dry_poultry`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated chili pepper (`dry_chili`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated fish (`dry_fish`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated fruit (`dry_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated garlic clove (`dry_garlic`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated lobster (`dry_lobster`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated mollusk (`dry_mollusk`) | 0.0048% | 0.0048% | 0.0048% |
| dehydrated vegetable (`dry_veggy`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe beans and rice (`deluxe_beansnrice`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe chocolate milkshake (`milkshake_deluxe_choc`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe cooked oatmeal (`oatmeal_deluxe`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe milkshake (`milkshake_deluxe`) | 0.0048% | 0.0048% | 0.0048% |
| deluxe vegetarian beans and rice (`deluxe_veggy_beansnrice`) | 0.0048% | 0.0048% | 0.0048% |
| dried bottle gourd (`dry_bottle_gourd`) | 0.0048% | 0.0048% | 0.0048% |
| dried mushroom (`dry_mushroom`) | 0.0048% | 0.0048% | 0.0048% |
| dried salad (`dried_salad`) | 0.0048% | 0.0048% | 0.0048% |
| dry wild rice (`dry_wild_rice`) | 0.0048% | 0.0048% | 0.0048% |
| egg salad (`egg_salad`) | 0.0048% | 0.0048% | 0.0048% |
| egg salad sandwich (`sandwich_egg_salad`) | 0.0048% | 0.0048% | 0.0048% |
| fast-food French fries (`fries`) | 0.0048% | 0.0048% | 0.0048% |
| fish and spinach bagel (`fish_bagel`) | 0.0048% | 0.0048% | 0.0048% |
| fish sandwich (`fish_sandwich`) | 0.0048% | 0.0048% | 0.0048% |
| fish soup (`soup_fish`) | 0.0048% | 0.0048% | 0.0048% |
| flatbread (`flatbread`) | 0.0048% | 0.0048% | 0.0048% |
| flour tortilla (`tortilla_flour`) | 0.0048% | 0.0048% | 0.0048% |
| Fluffernutter sandwich (`sandwich_pbf`) | 0.0048% | 0.0048% | 0.0048% |
| forest honey (`honey_bottled`) | 0.0048% | 0.0048% | 0.0048% |
| fortified milk (`milk_fortified`) | 0.0048% | 0.0048% | 0.0048% |
| fried chicken (`chicken_fried`) | 0.0048% | 0.0048% | 0.0048% |
| fried dandelions (`dandelion_fried`) | 0.0048% | 0.0048% | 0.0048% |
| fried meat (`meat_fried`) | 0.0048% | 0.0048% | 0.0048% |
| fried rice (`deluxe_veggy_rice`) | 0.0048% | 0.0048% | 0.0048% |
| fruit jam (`jam_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| fruit juice (`juice`) | 0.0048% | 0.0048% | 0.0048% |
| fruit tea (`tea_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| fruit tea bag (`tea_fruit_bag`) | 0.0048% | 0.0048% | 0.0048% |
| frybread (`frybread`) | 0.0048% | 0.0048% | 0.0048% |
| garlic clove (`garlic_clove`) | 0.0048% | 0.0048% | 0.0048% |
| glazed carrot (`carrot_glazed`) | 0.0048% | 0.0048% | 0.0048% |
| grapeade (`grapeade`) | 0.0048% | 0.0048% | 0.0048% |
| grapeade drink mix (`grapeade_powder`) | 0.0048% | 0.0048% | 0.0048% |
| grenadine syrup (`grenadine_syrup`) | 0.0048% | 0.0048% | 0.0048% |
| grilled cheese sandwich (`sandwich_cheese_grilled`) | 0.0048% | 0.0048% | 0.0048% |
| grits (`grits`) | 0.0048% | 0.0048% | 0.0048% |
| hamburger (`hamburger`) | 0.0048% | 0.0048% | 0.0048% |
| hamburger helper (`macaroni_helper`) | 0.0048% | 0.0048% | 0.0048% |
| hardtack (`hardtack`) | 0.0048% | 0.0048% | 0.0048% |
| hide bag (`hide_bag`) | 0.0048% | 0.0048% | 0.0048% |
| homemade toast-em (`toastem4`) | 0.0048% | 0.0048% | 0.0048% |
| honey sandwich (`sandwich_honey`) | 0.0048% | 0.0048% | 0.0048% |
| hot chocolate (`hot_chocolate`) | 0.0048% | 0.0048% | 0.0048% |
| insta-salad (`insta_salad`) | 0.0048% | 0.0048% | 0.0048% |
| instant chicken noodle soup (`soup_instant_chicken_noodle_prepared`) | 0.0048% | 0.0048% | 0.0048% |
| instant chicken noodle soup powder (`soup_instant_chicken_noodle_powder`) | 0.0048% | 0.0048% | 0.0048% |
| instant cocoa (`cocoa_powder_milk`) | 0.0048% | 0.0048% | 0.0048% |
| instant coffee mix (`instant_coffee`) | 0.0048% | 0.0048% | 0.0048% |
| instant spring vegetable soup (`soup_instant_vegetable_prepared`) | 0.0048% | 0.0048% | 0.0048% |
| instant spring vegetable soup powder (`soup_instant_vegetable_powder`) | 0.0048% | 0.0048% | 0.0048% |
| jam and butter sandwich (`sandwich_jam_butter`) | 0.0048% | 0.0048% | 0.0048% |
| jam and cheese sandwich (`sandwich_jam_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| jam sandwich (`sandwich_jam`) | 0.0048% | 0.0048% | 0.0048% |
| Japanese knotweed stems (`seed_japanese_knotweed`) | 0.0048% | 0.0048% | 0.0048% |
| lard (`lard`) | 0.0048% | 0.0048% | 0.0048% |
| large boiled stomach (`stomach_boiled`) | 0.0048% | 0.0048% | 0.0048% |
| lemon-lime soda (`lemonlime`) | 0.0048% | 0.0048% | 0.0048% |
| lemonade (`lemonade`) | 0.0048% | 0.0048% | 0.0048% |
| lemonade drink mix (`lemonade_powder`) | 0.0048% | 0.0048% | 0.0048% |
| maple syrup (`syrup`) | 0.0048% | 0.0048% | 0.0048% |
| marshmallow fluff (`marshmallow_fluff`) | 0.0048% | 0.0048% | 0.0048% |
| meat broth (`broth_meat`) | 0.0048% | 0.0048% | 0.0048% |
| meat nachos (`nachosm`) | 0.0048% | 0.0048% | 0.0048% |
| meat nachos with cheese (`nachosmc`) | 0.0048% | 0.0048% | 0.0048% |
| meat sandwich (`sandwich_t`) | 0.0048% | 0.0048% | 0.0048% |
| meat soup (`soup_meat`) | 0.0048% | 0.0048% | 0.0048% |
| milk (`milk`) | 0.0048% | 0.0048% | 0.0048% |
| mushroom ketchup (`mushroom_ketchup`) | 0.0048% | 0.0048% | 0.0048% |
| mushroom soup (`soup_mushroom`) | 0.0048% | 0.0048% | 0.0048% |
| nut butter (`peanutbutter`) | 0.0048% | 0.0048% | 0.0048% |
| nut paste (`paste_nut`) | 0.0048% | 0.0048% | 0.0048% |
| orangeade (`orangeade`) | 0.0048% | 0.0048% | 0.0048% |
| orangeade drink mix (`orangeade_powder`) | 0.0048% | 0.0048% | 0.0048% |
| pair of dehydrated frog legs (`dry_froglegs`) | 0.0048% | 0.0048% | 0.0048% |
| pan roasted corn (`pan_roasted_corn`) | 0.0048% | 0.0048% | 0.0048% |
| PB&H sandwich (`sandwich_pbh`) | 0.0048% | 0.0048% | 0.0048% |
| PB&J sandwich (`sandwich_pbj`) | 0.0048% | 0.0048% | 0.0048% |
| PB&M sandwich (`sandwich_pbm`) | 0.0048% | 0.0048% | 0.0048% |
| peach (`peach`) | 0.0048% | 0.0048% | 0.0048% |
| peanut butter sandwich (`sandwich_pb`) | 0.0048% | 0.0048% | 0.0048% |
| pear (`pear`) | 0.0048% | 0.0048% | 0.0048% |
| pelmeni (`pelmeni`) | 0.0048% | 0.0048% | 0.0048% |
| pesto (`sauce_pesto`) | 0.0048% | 0.0048% | 0.0048% |
| pickled fish (`fish_pickled`) | 0.0048% | 0.0048% | 0.0048% |
| pile of seaweed (`seaweed_pile`) | 0.0048% | 0.0048% | 0.0048% |
| pine needle tea (`pine_tea`) | 0.0048% | 0.0048% | 0.0048% |
| plum (`plums`) | 0.0048% | 0.0048% | 0.0048% |
| powdered cheese (`cheese_powder`) | 0.0048% | 0.0048% | 0.0048% |
| powdered egg (`powder_eggs`) | 0.0048% | 0.0048% | 0.0048% |
| powdered milk (`milk_powder`) | 0.0048% | 0.0048% | 0.0048% |
| press cake (`press_cake`) | 0.0048% | 0.0048% | 0.0048% |
| protein drink (`protein_drink`) | 0.0048% | 0.0048% | 0.0048% |
| protein powder (`protein_powder`) | 0.0048% | 0.0048% | 0.0048% |
| protein shake (`protein_shake`) | 0.0048% | 0.0048% | 0.0048% |
| protein smoothie (`protein_smoothie`) | 0.0048% | 0.0048% | 0.0048% |
| quesadilla (`quesadilla_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| ratatouille entree (`mre_ratatouille`) | 0.0048% | 0.0048% | 0.0048% |
| ravioli (`ravioli`) | 0.0048% | 0.0048% | 0.0048% |
| raw butter (`raw_butter`) | 0.0048% | 0.0048% | 0.0048% |
| raw hide (`raw_leather`) | 0.0048% | 0.0048% | 0.0048% |
| raw human skin (`raw_hleather`) | 0.0048% | 0.0048% | 0.0048% |
| raw pelt (`raw_fur`) | 0.0048% | 0.0048% | 0.0048% |
| raw popcorn (`popcorn_raw`) | 0.0048% | 0.0048% | 0.0048% |
| reconstituted milk (`milk_reconstituted`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated cheese (`cheese_rehydrated`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated chili pepper (`rehydrated_chili`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated egg (`rehydrated_eggs`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated fish (`rehydrated_fish`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated frog leg (`rehydrated_froglegs`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated fruit (`rehydrated_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated garlic clove (`rehydrated_garlic`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated lobster (`rehydrated_lobster`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated meat (`rehydrated_meat`) | 0.0048% | 0.0048% | 0.0048% |
| rehydrated mollusk (`rehydrated_mollusk`) | 0.0048% | 0.0048% | 0.0048% |
| roasted carrot (`carrot_roasted`) | 0.0048% | 0.0048% | 0.0048% |
| roasted cattail rhizome (`roasted_cattail_rhizome`) | 0.0048% | 0.0048% | 0.0048% |
| roasted coffee beans (`roasted_coffee_bean`) | 0.0048% | 0.0048% | 0.0048% |
| roasted pepper bone marrow (`pepperbone`) | 0.0048% | 0.0048% | 0.0048% |
| roasted pistachios (`pistachio_roasted`) | 0.0048% | 0.0048% | 0.0048% |
| salsa (`salsa`) | 0.0048% | 0.0048% | 0.0048% |
| salsify seeds (`seed_salsify_raw`) | 0.0048% | 0.0048% | 0.0048% |
| salt (`salt`) | 0.0048% | 0.0048% | 0.0048% |
| salted meat slice (`meat_salted`) | 0.0048% | 0.0048% | 0.0048% |
| salted popcorn (`popcorn2`) | 0.0048% | 0.0048% | 0.0048% |
| sausage gravy (`sausagegravy`) | 0.0048% | 0.0048% | 0.0048% |
| seasoned salt (`seasoning_salt`) | 0.0048% | 0.0048% | 0.0048% |
| seaweed (`seaweed`) | 0.0048% | 0.0048% | 0.0048% |
| seed popcorn (`seed_popcorn`) | 0.0048% | 0.0048% | 0.0048% |
| serving of candy ice cream (`icecream_candy`) | 0.0048% | 0.0048% | 0.0048% |
| serving of fruity ice cream (`icecream_fruit`) | 0.0048% | 0.0048% | 0.0048% |
| serving of ice cream (`icecream`) | 0.0048% | 0.0048% | 0.0048% |
| Shirley Temple drink (`drink_shirleytemple`) | 0.0048% | 0.0048% | 0.0048% |
| soggy hardtack (`soggy_hardtack`) | 0.0048% | 0.0048% | 0.0048% |
| SPAM (`can_spam`) | 0.0048% | 0.0048% | 0.0048% |
| starch (`starch`) | 0.0048% | 0.0048% | 0.0048% |
| sugar (`sugar`) | 0.0048% | 0.0048% | 0.0048% |
| sugar beet (`sugar_beet`) | 0.0048% | 0.0048% | 0.0048% |
| sugar beet seeds (`seed_sugar_beet`) | 0.0048% | 0.0048% | 0.0048% |
| sweet water (`sweet_water`) | 0.0048% | 0.0048% | 0.0048% |
| sweetened coffee substitute with milk (`milk_coffee_substitute_sweetened`) | 0.0048% | 0.0048% | 0.0048% |
| sweetened fortified milk (`sweet_milk_fortified`) | 0.0048% | 0.0048% | 0.0048% |
| sweetened milk (`sweet_milk`) | 0.0048% | 0.0048% | 0.0048% |
| tallow (`tallow`) | 0.0048% | 0.0048% | 0.0048% |
| threshed barley (`threshed_barley`) | 0.0048% | 0.0048% | 0.0048% |
| threshed buckwheat (`threshed_buckwheat`) | 0.0048% | 0.0048% | 0.0048% |
| threshed canola (`threshed_canola`) | 0.0048% | 0.0048% | 0.0048% |
| threshed lentils (`threshed_lentils`) | 0.0048% | 0.0048% | 0.0048% |
| threshed oats (`threshed_oats`) | 0.0048% | 0.0048% | 0.0048% |
| threshed wheat (`threshed_wheat`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry (`homemade_toasterpastry`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry (`toasterpastry`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry (uncooked) (`toasterpastryfrozen`) | 0.0048% | 0.0048% | 0.0048% |
| toaster pastry with buttercream (`homemade_toasterpastry2`) | 0.0048% | 0.0048% | 0.0048% |
| tomato sauce (`sauce_red`) | 0.0048% | 0.0048% | 0.0048% |
| tortilla chips (`nachos`) | 0.0048% | 0.0048% | 0.0048% |
| uncooked corn dog (`corndogs_frozen`) | 0.0048% | 0.0048% | 0.0048% |
| uncooked hot dog (`hotdogs_frozen`) | 0.0048% | 0.0048% | 0.0048% |
| uncooked TV dinner (`frozen_dinner`) | 0.0048% | 0.0048% | 0.0048% |
| Valencian paella (`paella_valenciana`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable broth (`broth`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable salad (`veggy_salad`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable sandwich (`sandwich_veggy`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable sandwich with cheese (`sandwich_veggy_cheese`) | 0.0048% | 0.0048% | 0.0048% |
| vegetable soup (`soup_veggy`) | 0.0048% | 0.0048% | 0.0048% |
| vegetarian nachos (`nachosv`) | 0.0048% | 0.0048% | 0.0048% |
| vegetarian nachos with cheese (`nachosvc`) | 0.0048% | 0.0048% | 0.0048% |
| wastebread (`wastebread`) | 0.0048% | 0.0048% | 0.0048% |
| wild rice seeds (`seed_wild_rice`) | 0.0048% | 0.0048% | 0.0048% |
| wild root seeds (`seed_wildcarrot`) | 0.0048% | 0.0048% | 0.0048% |
| woods meat soup (`soup_woods`) | 0.0048% | 0.0048% | 0.0048% |
| yeast (`yeast`) | 0.0048% | 0.0048% | 0.0048% |
| cattail rhizome (`cattail_rhizome`) | 0.0000% | 0.0000% | 100.00% |
| cattail stalk (`cattail_stalk`) | 0.0000% | 0.0000% | 100.00% |

## House

### Objects

| Object | Chance on tile | Counts when generated | Contents table |
|---|---:|---|---|
| Refrigerator | 100.00% | 1–1 | house_kitchen |
| Oven | 100.00% | 1–1 | house_kitchen |
| Cupboard | 100.00% | 1–2 | house_kitchen |
| Counter | 100.00% | 1–1 | deconstruct |
| Table | 100.00% | 1–1 | deconstruct |
| Chair | 100.00% | 2–3 | deconstruct |
| Bed | 100.00% | 1–2 | deconstruct |
| Dresser | 100.00% | 1–1 | house_clothes |
| Sofa | 100.00% | 1–1 | house_clothes |
| Bookcase | 50.00% | 0–1 | house_books |
| Abandoned suitcase (bonus) | 6.00% | 1 | discovery_luggage |
| Discarded toolbox (bonus) | 8.00% | 1 | discovery_workshop |
| Weathered traveller remains (bonus) | 2.50% | 1 | discovery_remains |

### Every item

| Item | First exploration | Fully looted inland | Fully looted shoreline |
|---|---:|---:|---:|
| cotton patch (`cotton_patchwork`) | 0.0621% | 100.00% | 100.00% |
| cotton sheet (`sheet_cotton`) | 19.56% | 100.00% | 100.00% |
| disconnected oven (`oven`) | 0.0000% | 100.00% | 100.00% |
| household freezer (`apartment_freezer`) | 0.0000% | 100.00% | 100.00% |
| household fridge (`apartment_fridge`) | 0.0000% | 100.00% | 100.00% |
| mattress (`mattress`) | 0.0000% | 100.00% | 100.00% |
| nail (`nail`) | 8.23% | 100.00% | 100.00% |
| nut and bolt (`nuts_bolts`) | 0.0000% | 100.00% | 100.00% |
| plank (`2x4`) | 0.0000% | 100.00% | 100.00% |
| short wooden post (`wooden_post_short`) | 0.0000% | 100.00% | 100.00% |
| splintered wood (`splinter`) | 0.0621% | 100.00% | 100.00% |
| spring (`spring`) | 0.0000% | 100.00% | 100.00% |
| wooden chair (`chair_wood`) | 0.0000% | 100.00% | 100.00% |
| wooden panel (`wood_panel`) | 0.0000% | 100.00% | 100.00% |
| plastic bottle (`bottle_plastic`) | 23.90% | 73.73% | 73.73% |
| canned beans (`can_beans`) | 13.49% | 59.08% | 59.08% |
| canned tomato (`can_tomato`) | 10.85% | 50.85% | 50.85% |
| jeans (`jeans`) | 10.89% | 47.17% | 47.17% |
| cotton scraps (`scrap_cotton`) | 10.85% | 47.12% | 47.12% |
| clean water (`water_clean`) | 10.93% | 45.77% | 45.77% |
| blanket (`blanket`) | 8.27% | 45.62% | 45.62% |
| t-shirt (`tshirt`) | 13.45% | 43.88% | 43.88% |
| long string (`string_36`) | 4.18% | 43.17% | 43.17% |
| pants (`pants`) | 0.0487% | 40.74% | 40.74% |
| matchbook (`matches`) | 10.85% | 39.95% | 39.95% |
| cookie (`cookies`) | 8.31% | 38.30% | 38.30% |
| peanut butter candy (`candy`) | 8.31% | 38.30% | 38.30% |
| potato chips (`chips`) | 8.31% | 38.30% | 38.30% |
| small kitchen knife (`knife_small`) | 6.95% | 37.34% | 37.34% |
| socks (pair) (`socks`) | 10.89% | 36.88% | 36.88% |
| bread (`bread`) | 6.98% | 30.86% | 30.86% |
| pot (`pot`) | 5.61% | 29.78% | 29.78% |
| lighter (`lighter`) | 6.90% | 27.21% | 27.21% |
| hoodie (`hoodie`) | 8.27% | 27.00% | 27.00% |
| cast-iron frying pan (`pan`) | 4.24% | 25.14% | 25.14% |
| duct tape (`duct_tape`) | 6.90% | 23.52% | 23.52% |
| sneakers (pair) (`sneakers`) | 6.94% | 21.55% | 21.55% |
| sweater (`sweater`) | 6.94% | 21.55% | 21.55% |
| 0.5 L glass jar (`jar_glass_sealed`) | 0.34% | 18.15% | 18.15% |
| light jacket (`jacket_light`) | 5.59% | 18.11% | 18.11% |
| pair of light gloves (`gloves_light`) | 5.59% | 18.11% | 18.11% |
| hardtack cracker (`hardtack_cracker`) | 0.0934% | 18.01% | 18.01% |
| gallon jug (`jug_plastic`) | 3.23% | 16.50% | 16.50% |
| glass bottle (`bottle_glass`) | 2.62% | 15.98% | 15.98% |
| baseball cap (`hat_ball`) | 5.59% | 15.74% | 15.74% |
| boots (pair) (`boots`) | 5.59% | 15.74% | 15.74% |
| sheet (`sheet`) | 6.94% | 14.55% | 14.55% |
| medium tin can (`can_medium`) | 0.90% | 14.50% | 14.50% |
| 3 L glass jar (`jar_3l_glass_sealed`) | 0.25% | 14.04% | 14.04% |
| bottle gourd (`bottle_gourd`) | 0.0487% | 13.78% | 13.78% |
| bucket (`bucket`) | 0.0621% | 13.77% | 13.77% |
| clay jug (`jug_clay`) | 0.0621% | 13.77% | 13.77% |
| dried bottle gourd (`dry_bottle_gourd`) | 0.0934% | 13.76% | 13.76% |
| makeshift pot (`pot_makeshift`) | 0.0621% | 13.73% | 13.73% |
| rock salt (`material_rocksalt`) | 0.0000% | 13.71% | 13.71% |
| chunk of fat (`fat`) | 0.0000% | 13.68% | 13.68% |
| Cooking on a Budget (`cookbook`) | 4.41% | 13.66% | 13.66% |
| multimeter (`multimeter`) | 1.63% | 10.82% | 10.82% |
| knit hat (`hat_knit`) | 0.0487% | 10.79% | 10.79% |
| Chemistry for Kids: Awesome Science Experiments that Really Work (`basic_chemistry`) | 1.64% | 10.76% | 10.76% |
| instant coffee mix (`instant_coffee`) | 1.50% | 10.69% | 10.69% |
| roasted coffee beans (`roasted_coffee_bean`) | 1.50% | 10.69% | 10.69% |
| yeast (`yeast`) | 1.50% | 10.69% | 10.69% |
| basic chemistry set (`chemistry_set_basic`) | 1.55% | 10.68% | 10.68% |
| chemistry set (`chemistry_set`) | 1.55% | 10.68% | 10.68% |
| 101 Crafts for Beginners (`manual_fabrication`) | 3.03% | 10.61% | 10.61% |
| Pocket Survival Guide (`pocket_survival`) | 3.03% | 10.61% | 10.61% |
| Sew What? Clothing! (`manual_tailor`) | 3.03% | 10.61% | 10.61% |
| cotton boll (`cotton_boll`) | 0.0934% | 9.52% | 9.52% |
| dried rice (`dry_rice`) | 0.0934% | 9.52% | 9.52% |
| herbal tea bag (`herbal_tea_bag`) | 0.0934% | 9.52% | 9.52% |
| Italian seasoning (`seasoning_italian`) | 0.0934% | 9.52% | 9.52% |
| popcorn kernels (`kernels`) | 0.0934% | 9.52% | 9.52% |
| water purification tablet (`pur_tablets`) | 0.15% | 9.46% | 9.46% |
| chaff (`chaff`) | 0.0934% | 9.41% | 9.41% |
| nut paste (`paste_nut`) | 0.0934% | 9.41% | 9.41% |
| press cake (`press_cake`) | 0.0934% | 9.41% | 9.41% |
| raw popcorn (`popcorn_raw`) | 0.0934% | 9.41% | 9.41% |
| threshed lentils (`threshed_lentils`) | 0.0934% | 9.41% | 9.41% |
| black tea leaves (`tea_raw`) | 0.0000% | 9.33% | 9.33% |
| chunk of porkbelly (`porkbelly`) | 0.0000% | 9.33% | 9.33% |
| chunk of poultry meat (`poultry`) | 0.0000% | 9.33% | 9.33% |
| coffee powder (`coffee_raw`) | 0.0000% | 9.33% | 9.33% |
| commercial fertilizer (`fertilizer_commercial`) | 0.0000% | 9.33% | 9.33% |
| corn cob (`corn`) | 0.0000% | 9.33% | 9.33% |
| dried lentils (`dry_lentils`) | 0.0000% | 9.33% | 9.33% |
| fillet of fish (`fish`) | 0.0000% | 9.33% | 9.33% |
| murky water (`water_murky`) | 0.0000% | 9.33% | 9.33% |
| mushroom (`mushroom`) | 0.0000% | 9.33% | 9.33% |
| oatmeal (`oatmeal`) | 0.0000% | 9.33% | 9.33% |
| portion of raw bone marrow (`bone_marrow`) | 0.0000% | 9.33% | 9.33% |
| triffid flesh (`veggy`) | 0.0000% | 9.33% | 9.33% |
| vegetable cooking oil (`cooking_oil`) | 0.0000% | 9.33% | 9.33% |
| The Big Book of First Aid (`manual_first_aid`) | 3.03% | 8.77% | 8.77% |
| screwdriver (`screwdriver`) | 8.29% | 8.33% | 8.33% |
| adhesive bandage (`adhesive_bandages`) | 8.23% | 8.26% | 8.26% |
| short string (`string_6`) | 8.23% | 8.26% | 8.26% |
| thread (`thread`) | 8.23% | 8.26% | 8.26% |
| plastic shopping bag (`plastic_shopping_bag`) | 2.85% | 8.24% | 8.24% |
| aspirin (`aspirin`) | 8.23% | 8.23% | 8.23% |
| canvas sack (`bag_canvas`) | 2.87% | 8.22% | 8.22% |
| garbage bag (`bag_garbage`) | 2.87% | 8.22% | 8.22% |
| canvas scraps (`scrap_canvas`) | 2.81% | 8.16% | 8.16% |
| felt patch (`felt_patch`) | 2.81% | 8.16% | 8.16% |
| folded cardboard box (`box_medium_folded`) | 2.81% | 8.16% | 8.16% |
| large folded cardboard box (`box_large_folded`) | 2.81% | 8.16% | 8.16% |
| paper (`paper`) | 2.81% | 8.16% | 8.16% |
| patchwork felt sheet (`sheet_felt_patchwork`) | 2.81% | 8.16% | 8.16% |
| small folded cardboard box (`box_small_folded`) | 2.81% | 8.16% | 8.16% |
| wool staple (`wool_staple`) | 2.81% | 8.16% | 8.16% |
| canvas sheet (`sheet_canvas`) | 0.0000% | 8.14% | 8.14% |
| heavy duty thread (`thread_canvas`) | 0.0000% | 8.14% | 8.14% |
| yellow carpet (`y_carpet`) | 2.81% | 8.12% | 8.12% |
| hammer (`hammer`) | 6.95% | 7.00% | 7.00% |
| Pitching a Tent (`manual_survival`) | 0.23% | 6.13% | 6.13% |
| Under the Hood (`manual_mechanics`) | 0.23% | 6.13% | 6.13% |
| suitcase (`suitcase_m`) | 0.0000% | 6.00% | 6.00% |
| bandage (`bandages`) | 5.55% | 5.58% | 5.58% |
| sewing kit (`sewing_kit`) | 4.24% | 4.29% | 4.29% |
| Close Quarter Fighting Manual (`manual_melee`) | 0.23% | 4.20% | 4.20% |
| The Book of Dances (`manual_dodge`) | 0.23% | 4.20% | 4.20% |
| rollmat (`rollmat`) | 2.81% | 2.84% | 2.84% |
| antiparasitic drug (`antiparasitic`) | 2.81% | 2.81% | 2.81% |
| bleach (`bleach`) | 2.81% | 2.81% | 2.81% |
| Historic Warfare: The Bronze Age (`bronze_mag`) | 0.23% | 2.24% | 2.24% |
| Studies in Historic Armorsmithing (`textbook_armwest`) | 0.23% | 2.24% | 2.24% |
| The Essential Oil Enthusiasts Handbook (`textbook_extraction`) | 0.23% | 2.24% | 2.24% |
| bleached makeshift bandage (`bandages_makeshift_bleached`) | 1.41% | 1.52% | 1.52% |
| piece of cardboard (`cardboard`) | 1.41% | 1.45% | 1.45% |
| small backpack (`backpack_small`) | 0.96% | 0.98% | 0.98% |
| small tool battery (`heavy_battery_cell`) | 0.89% | 0.96% | 0.96% |
| medium battery (rechargeable) (`medium_battery_cell`) | 0.76% | 0.84% | 0.84% |
| big tool battery (`heavy_plus_battery_cell`) | 0.63% | 0.71% | 0.71% |
| light battery (`light_battery_cell`) | 0.33% | 0.63% | 0.63% |
| glass flask (`flask_glass`) | 0.44% | 0.44% | 0.44% |
| briefcase (`briefcase`) | 0.0487% | 0.35% | 0.35% |
| pocket knife (`pockknife`) | 0.0621% | 0.33% | 0.33% |
| amplifier circuit (`amplifier`) | 0.23% | 0.30% | 0.30% |
| antenna (`antenna`) | 0.23% | 0.30% | 0.30% |
| barbed wire (`wire_barbed`) | 0.23% | 0.30% | 0.30% |
| battery charger (`battery_charger`) | 0.23% | 0.30% | 0.30% |
| carbon electrode rod (`carbon_electrode`) | 0.23% | 0.30% | 0.30% |
| circuit board (`circuit`) | 0.23% | 0.30% | 0.30% |
| copper wire (`cable`) | 0.23% | 0.30% | 0.30% |
| electric lantern (off) (`electric_lantern`) | 0.23% | 0.30% | 0.30% |
| electrolysis kit (`electrolysis_kit`) | 0.23% | 0.30% | 0.30% |
| electronics control unit (`electronics_controls`) | 0.23% | 0.30% | 0.30% |
| flashlight (off) (`flashlight`) | 0.23% | 0.30% | 0.30% |
| hand-crank charger (`hand_crank_charger`) | 0.23% | 0.30% | 0.30% |
| hotplate (`hotplate`) | 0.23% | 0.30% | 0.30% |
| instrument cable (`cable_instrument`) | 0.23% | 0.30% | 0.30% |
| makeshift arc welder (`welder_crude`) | 0.23% | 0.30% | 0.30% |
| micro electric motor (`motor_micro`) | 0.23% | 0.30% | 0.30% |
| motorbike battery (`battery_motorbike`) | 0.23% | 0.30% | 0.30% |
| motorcycle police boots (pair) (`motor_police_boots`) | 0.23% | 0.30% | 0.30% |
| portable soldering iron (`soldering_iron_portable`) | 0.23% | 0.30% | 0.30% |
| power converter (`power_supply`) | 0.23% | 0.30% | 0.30% |
| signal receiver (`receiver`) | 0.23% | 0.30% | 0.30% |
| small electric motor (`motor_small`) | 0.23% | 0.30% | 0.30% |
| small motorbike battery (`battery_motorbike_small`) | 0.23% | 0.30% | 0.30% |
| solar panel (`solar_panel`) | 0.23% | 0.30% | 0.30% |
| solder (`solder_wire`) | 0.23% | 0.30% | 0.30% |
| soldering iron (`soldering_iron`) | 0.23% | 0.30% | 0.30% |
| speaker cable (`cable_speaker`) | 0.23% | 0.30% | 0.30% |
| steel mesh (`wire_mesh`) | 0.23% | 0.30% | 0.30% |
| tiny electric motor (`motor_tiny`) | 0.23% | 0.30% | 0.30% |
| ultra-light battery (rechargeable) (`light_minus_battery_cell`) | 0.23% | 0.30% | 0.30% |
| wire (`wire`) | 0.23% | 0.30% | 0.30% |
| XLR cable (`cable_xlr`) | 0.23% | 0.30% | 0.30% |
| arc welder (`welder`) | 0.23% | 0.26% | 0.26% |
| circular saw (off) (`circsaw_off`) | 0.23% | 0.26% | 0.26% |
| electric forge (`forge`) | 0.23% | 0.26% | 0.26% |
| headlamp (`wearable_light`) | 0.23% | 0.26% | 0.26% |
| heavy-duty flashlight (off) (`heavy_flashlight`) | 0.23% | 0.26% | 0.26% |
| heavy-duty headlamp (`wearable_big_light`) | 0.23% | 0.26% | 0.26% |
| high-temperature welding kit (`welding_kit`) | 0.23% | 0.26% | 0.26% |
| manual oil press (`oil_press_manual`) | 0.23% | 0.26% | 0.26% |
| Advanced Electronics (`advanced_electronics`) | 0.23% | 0.23% | 0.23% |
| Amateur Home Radio for Enthusiasts (`radio_book`) | 0.23% | 0.23% | 0.23% |
| chemistry textbook (`textbook_chemistry`) | 0.23% | 0.23% | 0.23% |
| durable plastic sack, cement (`bag_durasack_cement`) | 0.23% | 0.23% | 0.23% |
| Electronic Circuit Theory (`textbook_electronics`) | 0.23% | 0.23% | 0.23% |
| Ham Radio Illustrated (`mag_electronics`) | 0.23% | 0.23% | 0.23% |
| robotics kit instructions (`manual_robotics_kit`) | 0.23% | 0.23% | 0.23% |
| Stirling engine kit instructions (`manual_engine_kit`) | 0.23% | 0.23% | 0.23% |
| What's a Transistor? (`manual_electronics`) | 0.23% | 0.23% | 0.23% |
| apple (`apple`) | 0.0934% | 0.22% | 0.22% |
| cooked beans (`beans_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked fatty meat (`meat_fatty_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked fish (`fish_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked fruit (`fruit_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked lentils (`lentils_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked meat (`meat_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked mushroom (`mushroom_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked oatmeal (`oatmeal_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked plant marrow (`veggy_cooked`) | 0.0934% | 0.22% | 0.22% |
| cooked poultry (`poultry_cooked`) | 0.0934% | 0.22% | 0.22% |
| corn on the cob (`corn_on_cob`) | 0.0934% | 0.22% | 0.22% |
| dehydrated meat (`dry_meat`) | 0.0934% | 0.22% | 0.22% |
| handful of blackberries (`blackberries`) | 0.0934% | 0.22% | 0.22% |
| handful of blueberries (`blueberries`) | 0.0934% | 0.22% | 0.22% |
| handful of raspberries (`raspberries`) | 0.0934% | 0.22% | 0.22% |
| handful of strawberries (`strawberries`) | 0.0934% | 0.22% | 0.22% |
| meat jerky (`jerky`) | 0.0934% | 0.22% | 0.22% |
| pile of straw (`straw_pile`) | 0.0934% | 0.22% | 0.22% |
| popcorn (`popcorn`) | 0.0934% | 0.22% | 0.22% |
| protein ration (`protein_bar_evac`) | 0.0934% | 0.22% | 0.22% |
| roasted bone marrow (`cooked_marrow`) | 0.0934% | 0.22% | 0.22% |
| smoked meat (`meat_smoked`) | 0.0934% | 0.22% | 0.22% |
| black coffee (`coffee`) | 0.0934% | 0.21% | 0.21% |
| black tea (`tea`) | 0.0934% | 0.21% | 0.21% |
| cooked rice (`rice_cooked`) | 0.0934% | 0.21% | 0.21% |
| herbal tea (`herbal_tea`) | 0.0934% | 0.21% | 0.21% |
| toast (`toast`) | 0.0934% | 0.21% | 0.21% |
| aluminum can (`can_drink`) | 0.16% | 0.20% | 0.20% |
| acetic acid (`chem_acetic_acid`) | 0.15% | 0.15% | 0.15% |
| acetone (`chem_acetone`) | 0.15% | 0.15% | 0.15% |
| acidic electrolyte paste (`cathod_mix`) | 0.15% | 0.15% | 0.15% |
| acrylamide (`chem_acrylamide`) | 0.15% | 0.15% | 0.15% |
| agar (`chem_agar`) | 0.15% | 0.15% | 0.15% |
| aluminum powder (`chem_aluminium_powder`) | 0.15% | 0.15% | 0.15% |
| aluminum sulfate (`chem_aluminium_sulphate`) | 0.15% | 0.15% | 0.15% |
| ammonium nitrate (`chem_ammonium_nitrate`) | 0.15% | 0.15% | 0.15% |
| ammonium nitrate pellets (`chem_ammonium_nitrate_pellets`) | 0.15% | 0.15% | 0.15% |
| antimony trichloride (`chem_antimony_trichloride`) | 0.15% | 0.15% | 0.15% |
| baking soda (`chem_baking_soda`) | 0.15% | 0.15% | 0.15% |
| beaker (`beaker`) | 0.15% | 0.15% | 0.15% |
| benzene (`chem_benzene`) | 0.15% | 0.15% | 0.15% |
| calcium carbide (`chem_carbide`) | 0.15% | 0.15% | 0.15% |
| calcium carbonate (`chem_caco3`) | 0.15% | 0.15% | 0.15% |
| calcium chloride (`chem_calcium_chloride`) | 0.15% | 0.15% | 0.15% |
| chloroform (`chem_chloroform`) | 0.15% | 0.15% | 0.15% |
| chromium oxide (`chem_chromium_oxide`) | 0.15% | 0.15% | 0.15% |
| citric acid (`chem_citric_acid`) | 0.15% | 0.15% | 0.15% |
| dimethyl sulfoxide (`chem_DMSO`) | 0.15% | 0.15% | 0.15% |
| ethanol (`chem_ethanol`) | 0.15% | 0.15% | 0.15% |
| ferric chloride (`chem_ferric_chloride`) | 0.15% | 0.15% | 0.15% |
| formaldehyde (`chem_formaldehyde`) | 0.15% | 0.15% | 0.15% |
| glycerol (`chem_glycerol`) | 0.15% | 0.15% | 0.15% |
| graduated cylinder (`gradcylinder`) | 0.15% | 0.15% | 0.15% |
| hexamine (`chem_hexamine`) | 0.15% | 0.15% | 0.15% |
| hydrochloric acid (`chem_muriatic_acid`) | 0.15% | 0.15% | 0.15% |
| hydrogen peroxide (`chem_hydrogen_peroxide`) | 0.15% | 0.15% | 0.15% |
| hydrogen peroxide (concentrated) (`chem_hydrogen_peroxide_conc`) | 0.15% | 0.15% | 0.15% |
| limestone shard (`material_shrd_limestone`) | 0.15% | 0.15% | 0.15% |
| liquid soap (`liquid_soap`) | 0.15% | 0.15% | 0.15% |
| lye (`lye`) | 0.15% | 0.15% | 0.15% |
| lye powder (`lye_powder`) | 0.15% | 0.15% | 0.15% |
| manganese dioxide (`chem_manganese_dioxide`) | 0.15% | 0.15% | 0.15% |
| methanol (`chem_methanol`) | 0.15% | 0.15% | 0.15% |
| microcentrifuge tube (`test_tube_micro`) | 0.15% | 0.15% | 0.15% |
| nickel powder (`chem_nickel_powder`) | 0.15% | 0.15% | 0.15% |
| nitric acid (`chem_nitric_acid`) | 0.15% | 0.15% | 0.15% |
| peptone water powder (`chem_peptone_broth`) | 0.15% | 0.15% | 0.15% |
| Petri dish (`petri_dish`) | 0.15% | 0.15% | 0.15% |
| phenol (`chem_phenol`) | 0.15% | 0.15% | 0.15% |
| pine resin (`pine_resin`) | 0.15% | 0.15% | 0.15% |
| potassium (`chem_potassium`) | 0.15% | 0.15% | 0.15% |
| potassium alum (`chem_potassium_alum`) | 0.15% | 0.15% | 0.15% |
| potassium chloride (`chem_potassium_chloride`) | 0.15% | 0.15% | 0.15% |
| potassium hydroxide (`chem_potassium_hydroxide`) | 0.15% | 0.15% | 0.15% |
| potassium lye (`lye_potassium`) | 0.15% | 0.15% | 0.15% |
| quicklime (`material_quicklime`) | 0.15% | 0.15% | 0.15% |
| rhodonite (`material_rhodonite`) | 0.15% | 0.15% | 0.15% |
| salt water (`salt_water`) | 0.15% | 0.15% | 0.15% |
| saltpeter (`chem_saltpetre`) | 0.15% | 0.15% | 0.15% |
| slaked lime (`chem_slaked_lime`) | 0.15% | 0.15% | 0.15% |
| soap bar (`soap`) | 0.15% | 0.15% | 0.15% |
| soap flakes (`soap_flakes`) | 0.15% | 0.15% | 0.15% |
| soapy water (`soapy_water`) | 0.15% | 0.15% | 0.15% |
| sodium (`chem_sodium`) | 0.15% | 0.15% | 0.15% |
| sulfur (`chem_sulphur`) | 0.15% | 0.15% | 0.15% |
| sulfuric acid (`chem_sulphuric_acid`) | 0.15% | 0.15% | 0.15% |
| test tube (`test_tube`) | 0.15% | 0.15% | 0.15% |
| toluene (`chem_toluene`) | 0.15% | 0.15% | 0.15% |
| turpentine (`chem_turpentine`) | 0.15% | 0.15% | 0.15% |
| washing soda (`chem_washing_soda`) | 0.15% | 0.15% | 0.15% |
| wood ashes (`ash`) | 0.15% | 0.15% | 0.15% |
| zinc oxide (`chem_zinc_oxide`) | 0.15% | 0.15% | 0.15% |
| zinc powder (`chem_zinc_powder`) | 0.15% | 0.15% | 0.15% |
| zincite (`material_zincite`) | 0.15% | 0.15% | 0.15% |
| abaya (`abaya`) | 0.0487% | 0.12% | 0.12% |
| ankle sheath (`bootsheath`) | 0.0487% | 0.12% | 0.12% |
| ankle socks (pair) (`socks_ankle`) | 0.0487% | 0.12% | 0.12% |
| ankle wallet pouch (`ankle_wallet_pouch`) | 0.0487% | 0.12% | 0.12% |
| arm splint (`arm_splint`) | 0.0487% | 0.12% | 0.12% |
| armored jean jacket (`jacket_jean_mod`) | 0.0487% | 0.12% | 0.12% |
| armored jean vest (`vest_jean_mod`) | 0.0487% | 0.12% | 0.12% |
| armored jeans (`jeans_mod`) | 0.0487% | 0.12% | 0.12% |
| armored leather vest (`vest_leather_mod`) | 0.0487% | 0.12% | 0.12% |
| armored motorcycle jacket (`jacket_leather_mod`) | 0.0487% | 0.12% | 0.12% |
| bag socks (pair) (`socks_bag`) | 0.0487% | 0.12% | 0.12% |
| balaclava (`balclava`) | 0.0487% | 0.12% | 0.12% |
| bandana (`bandana`) | 0.0487% | 0.12% | 0.12% |
| bathrobe (`house_coat`) | 0.0487% | 0.12% | 0.12% |
| belly band (`bellyband`) | 0.0487% | 0.12% | 0.12% |
| belly wrap (`bellywrap`) | 0.0487% | 0.12% | 0.12% |
| bindle (`bindle`) | 0.0487% | 0.12% | 0.12% |
| birchbark ankle sheath (`bootsheath_birchbark`) | 0.0487% | 0.12% | 0.12% |
| birchbark shoes (pair) (`shoes_birchbark`) | 0.0487% | 0.12% | 0.12% |
| blindfold (`blindfold`) | 0.0487% | 0.12% | 0.12% |
| bookplate (`bookplate`) | 0.0487% | 0.12% | 0.12% |
| bookstrap (`bookstrap`) | 0.0487% | 0.12% | 0.12% |
| boonie hat (`hat_boonie`) | 0.0487% | 0.12% | 0.12% |
| box backpack (`boxpack`) | 0.0487% | 0.12% | 0.12% |
| boxer briefs (`boxer_briefs`) | 0.0487% | 0.12% | 0.12% |
| boxer shorts (`boxer_shorts`) | 0.0487% | 0.12% | 0.12% |
| briefs (`briefs`) | 0.0487% | 0.12% | 0.12% |
| canvas aketon vest (`aketon_canvas_vest`) | 0.0487% | 0.12% | 0.12% |
| canvas heavy arming pants (`gambeson_pants_canvas`) | 0.0487% | 0.12% | 0.12% |
| canvas throat guard (`throat_guard_canvas`) | 0.0487% | 0.12% | 0.12% |
| cargo pants (`pants_cargo`) | 0.0487% | 0.12% | 0.12% |
| cargo shorts (`shorts_cargo`) | 0.0487% | 0.12% | 0.12% |
| carpet cuirass (`carpet_cuirass`) | 0.0487% | 0.12% | 0.12% |
| chestwrap (`chestwrap`) | 0.0487% | 0.12% | 0.12% |
| chitinous boots (pair) (`boots_chitin`) | 0.0487% | 0.12% | 0.12% |
| cloak (`cloak`) | 0.0487% | 0.12% | 0.12% |
| cloth-padded pants (`canvas_pants_padded`) | 0.0487% | 0.12% | 0.12% |
| cloth-padded shirt (`cloth_shirt_padded`) | 0.0487% | 0.12% | 0.12% |
| cloth-padded sleeveless shirt (`cloth_vest_padded`) | 0.0487% | 0.12% | 0.12% |
| combat boots (pair) (`boots_combat`) | 0.0487% | 0.12% | 0.12% |
| cord sandals (pair) (`bastsandals`) | 0.0487% | 0.12% | 0.12% |
| cotton apron (`apron_cotton`) | 0.0487% | 0.12% | 0.12% |
| cotton hat (`hat_cotton`) | 0.0487% | 0.12% | 0.12% |
| cowboy hat (`cowboy_hat`) | 0.0487% | 0.12% | 0.12% |
| crop top (`tshirt_cropped`) | 0.0487% | 0.12% | 0.12% |
| cropped hoodie (`hoodie_cropped`) | 0.0487% | 0.12% | 0.12% |
| deployment bag (`deployment_bag`) | 0.0487% | 0.12% | 0.12% |
| drop leg bag (`leg_bag`) | 0.0487% | 0.12% | 0.12% |
| duffel bag (`duffelbag`) | 0.0487% | 0.12% | 0.12% |
| duster (`duster`) | 0.0487% | 0.12% | 0.12% |
| eight point cap (`hat_navy`) | 0.0487% | 0.12% | 0.12% |
| espadrilles (`espadrilles`) | 0.0487% | 0.12% | 0.12% |
| faux fur coat (`coat_faux_fur`) | 0.0487% | 0.12% | 0.12% |
| faux fur duster (`duster_faux_fur`) | 0.0487% | 0.12% | 0.12% |
| faux fur hat (`hat_faux_fur`) | 0.0487% | 0.12% | 0.12% |
| faux fur trenchcoat (`trenchcoat_faux_fur`) | 0.0487% | 0.12% | 0.12% |
| flame-resistant socks (pair) (`nomex_socks`) | 0.0487% | 0.12% | 0.12% |
| foot rags (pair) (`footrags`) | 0.0487% | 0.12% | 0.12% |
| fur belly wrap (`bellywrap_fur`) | 0.0487% | 0.12% | 0.12% |
| fur chestwrap (`chestwrap_fur`) | 0.0487% | 0.12% | 0.12% |
| fur cloak (`cloak_fur`) | 0.0487% | 0.12% | 0.12% |
| fur coat (`coat_fur`) | 0.0487% | 0.12% | 0.12% |
| fur duster (`duster_fur`) | 0.0487% | 0.12% | 0.12% |
| fur foot wraps (pair) (`footrags_fur`) | 0.0487% | 0.12% | 0.12% |
| fur hat (`hat_fur`) | 0.0487% | 0.12% | 0.12% |
| fur loincloth (`loincloth_fur`) | 0.0487% | 0.12% | 0.12% |
| fur pants (`pants_fur`) | 0.0487% | 0.12% | 0.12% |
| fur trenchcoat (`trenchcoat_fur`) | 0.0487% | 0.12% | 0.12% |
| garter belt (`garter_belt`) | 0.0487% | 0.12% | 0.12% |
| golf cap (`hat_golf`) | 0.0487% | 0.12% | 0.12% |
| grappling hook (`grapnel`) | 0.0487% | 0.12% | 0.12% |
| grass blanket (`grass_blanket`) | 0.0487% | 0.12% | 0.12% |
| grass cloak (`grass_cloak`) | 0.0487% | 0.12% | 0.12% |
| grass keffiyeh (`grass_keffiyeh`) | 0.0487% | 0.12% | 0.12% |
| grass sheet (`grass_sheet`) | 0.0487% | 0.12% | 0.12% |
| grass shirt (`shirt_straw`) | 0.0487% | 0.12% | 0.12% |
| grass skirt (`skirt_grass`) | 0.0487% | 0.12% | 0.12% |
| hairpin (`hairpin`) | 0.0487% | 0.12% | 0.12% |
| hard hat (`hat_hard`) | 0.0487% | 0.12% | 0.12% |
| headscarf (`headscarf`) | 0.0487% | 0.12% | 0.12% |
| hijab (`hijab`) | 0.0487% | 0.12% | 0.12% |
| hunting cap (`hat_hunting`) | 0.0487% | 0.12% | 0.12% |
| jean jacket (`jacket_jean`) | 0.0487% | 0.12% | 0.12% |
| jean vest (`vest_jean`) | 0.0487% | 0.12% | 0.12% |
| jerrypack (`jerrypack`) | 0.0487% | 0.12% | 0.12% |
| jorts (`shorts_denim`) | 0.0487% | 0.12% | 0.12% |
| keffiyeh (`keffiyeh`) | 0.0487% | 0.12% | 0.12% |
| Kevlar dog harness (`kevlar_harness`) | 0.0487% | 0.12% | 0.12% |
| knit cowl (`cowl_wool`) | 0.0487% | 0.12% | 0.12% |
| large belt loop (`belt_loop_large`) | 0.0487% | 0.12% | 0.12% |
| large waterskin (`waterskin3`) | 0.0487% | 0.12% | 0.12% |
| leather apron (`apron_leather`) | 0.0487% | 0.12% | 0.12% |
| leather armor boots (pair) (`boots_larmor`) | 0.0487% | 0.12% | 0.12% |
| leather armor cuirass (`armor_larmor_chest`) | 0.0487% | 0.12% | 0.12% |
| leather armor helmet (`helmet_larmor`) | 0.0487% | 0.12% | 0.12% |
| leather belly wrap (`bellywrap_leather`) | 0.0487% | 0.12% | 0.12% |
| leather belt (`leather_belt`) | 0.0487% | 0.12% | 0.12% |
| leather body armor (`armor_larmor`) | 0.0487% | 0.12% | 0.12% |
| leather chestwrap (`chestwrap_leather`) | 0.0487% | 0.12% | 0.12% |
| leather cloak (`cloak_leather`) | 0.0487% | 0.12% | 0.12% |
| leather dog harness (`leather_harness_dog`) | 0.0487% | 0.12% | 0.12% |
| leather duster (`duster_leather`) | 0.0487% | 0.12% | 0.12% |
| leather eyepatch (`eyepatch_leather`) | 0.0487% | 0.12% | 0.12% |
| leather foot wraps (pair) (`footrags_leather`) | 0.0487% | 0.12% | 0.12% |
| leather loincloth (`loincloth_leather`) | 0.0487% | 0.12% | 0.12% |
| leather pants (`pants_leather`) | 0.0487% | 0.12% | 0.12% |
| leather pouch (`leather_pouch`) | 0.0487% | 0.12% | 0.12% |
| leather sandals (pair) (`leathersandals`) | 0.0487% | 0.12% | 0.12% |
| leather suspenders (`suspenders_leather`) | 0.0487% | 0.12% | 0.12% |
| leather trenchcoat (`trenchcoat_leather`) | 0.0487% | 0.12% | 0.12% |
| leather vest (`vest_leather`) | 0.0487% | 0.12% | 0.12% |
| leather-padded pants (`survivor_adhoc_leather_pants`) | 0.0487% | 0.12% | 0.12% |
| leather-padded shirt (`survivor_adhoc_leather_shirt`) | 0.0487% | 0.12% | 0.12% |
| leather-padded sleeveless shirt (`survivor_adhoc_leather_torso`) | 0.0487% | 0.12% | 0.12% |
| leather-padded sleeves (`survivor_adhoc_leather_sleeves`) | 0.0487% | 0.12% | 0.12% |
| leg splint (`leg_splint`) | 0.0487% | 0.12% | 0.12% |
| light sheet metal chest guard (`chestguard_metal_sheets_light`) | 0.0487% | 0.12% | 0.12% |
| loincloth (`loincloth`) | 0.0487% | 0.12% | 0.12% |
| long cordage rope (`rope_makeshift_30`) | 0.0487% | 0.12% | 0.12% |
| long patchwork scarf (`long_patchwork_scarf`) | 0.0487% | 0.12% | 0.12% |
| long rope (`rope_30`) | 0.0487% | 0.12% | 0.12% |
| long underwear bottom (`long_underpants`) | 0.0487% | 0.12% | 0.12% |
| long underwear top (`long_undertop`) | 0.0487% | 0.12% | 0.12% |
| long vine (`vine_30`) | 0.0487% | 0.12% | 0.12% |
| long waist apron (`waist_apron_long`) | 0.0487% | 0.12% | 0.12% |
| long-sleeved shirt (`longshirt`) | 0.0487% | 0.12% | 0.12% |
| longarm bag (`long_duffelbag`) | 0.0487% | 0.12% | 0.12% |
| loop of rope (`rope_loop`) | 0.0487% | 0.12% | 0.12% |
| makeshift knapsack (`makeshift_knapsack`) | 0.0487% | 0.12% | 0.12% |
| makeshift poncho (`poncho_makeshift`) | 0.0487% | 0.12% | 0.12% |
| makeshift sling (`makeshift_sling`) | 0.0487% | 0.12% | 0.12% |
| medium belt loop (`belt_loop_medium`) | 0.0487% | 0.12% | 0.12% |
| moccasins (pair) (`mocassins`) | 0.0487% | 0.12% | 0.12% |
| motorcycle jacket (`leather_police_jacket`) | 0.0487% | 0.12% | 0.12% |
| niqab (`niqab`) | 0.0487% | 0.12% | 0.12% |
| noise canceling headgear (`hat_noise_cancelling`) | 0.0487% | 0.12% | 0.12% |
| nylon heavy arming pants (`gambeson_pants_nylon`) | 0.0487% | 0.12% | 0.12% |
| nylon throat guard (`throat_guard_nylon`) | 0.0487% | 0.12% | 0.12% |
| pack frame (`frame_pack`) | 0.0487% | 0.12% | 0.12% |
| pair of 2-by-arm guards (`2byarm_guard`) | 0.0487% | 0.12% | 0.12% |
| pair of 2-by-shin guards (`2byshin_guard`) | 0.0487% | 0.12% | 0.12% |
| pair of arm warmers (`arm_warmers`) | 0.0487% | 0.12% | 0.12% |
| pair of armored fingerless leather gloves (`gloves_fingerless_mod`) | 0.0487% | 0.12% | 0.12% |
| pair of armored gauntlets (`gloves_plate`) | 0.0487% | 0.12% | 0.12% |
| pair of bag gloves (`gloves_bag`) | 0.0487% | 0.12% | 0.12% |
| pair of black gloves (`gloves_black`) | 0.0487% | 0.12% | 0.12% |
| pair of carpet arm guards (`carpet_armguards`) | 0.0487% | 0.12% | 0.12% |
| pair of carpet bracers (`carpet_bracers`) | 0.0487% | 0.12% | 0.12% |
| pair of carpet greaves (`carpet_greaves`) | 0.0487% | 0.12% | 0.12% |
| pair of carpet leg guards (`carpet_legguards`) | 0.0487% | 0.12% | 0.12% |
| pair of claw gloves (`gloves_claws`) | 0.0487% | 0.12% | 0.12% |
| pair of copper earrings (`copper_ear`) | 0.0487% | 0.12% | 0.12% |
| pair of denim gloves (`gloves_denim`) | 0.0487% | 0.12% | 0.12% |
| pair of EOD overhand protectors (`gloves_eod`) | 0.0487% | 0.12% | 0.12% |
| pair of fingerless denim gloves (`gloves_denim_fingerless`) | 0.0487% | 0.12% | 0.12% |
| pair of fingerless leather gloves (`gloves_fingerless`) | 0.0487% | 0.12% | 0.12% |
| pair of fingerless light survivor gloves (`gloves_lsurvivor_fingerless`) | 0.0487% | 0.12% | 0.12% |
| pair of fingerless survivor gloves (`gloves_survivor_fingerless`) | 0.0487% | 0.12% | 0.12% |
| pair of fingerless wool gloves (`gloves_wool_fingerless`) | 0.0487% | 0.12% | 0.12% |
| pair of fur gloves (`gloves_fur`) | 0.0487% | 0.12% | 0.12% |
| pair of fur hand wraps (`gloves_wraps_fur`) | 0.0487% | 0.12% | 0.12% |
| pair of fur leggings (`leg_warmers_f`) | 0.0487% | 0.12% | 0.12% |
| pair of glass goggles (`glass_goggles`) | 0.0487% | 0.12% | 0.12% |
| pair of glove liners (`gloves_liner`) | 0.0487% | 0.12% | 0.12% |
| pair of golfing gloves (`gloves_golf`) | 0.0487% | 0.12% | 0.12% |
| pair of hand wraps (`gloves_wraps`) | 0.0487% | 0.12% | 0.12% |
| pair of knee pads (`knee_pads`) | 0.0487% | 0.12% | 0.12% |
| pair of leather arm guards (`armguard_larmor`) | 0.0487% | 0.12% | 0.12% |
| pair of leather armor gauntlets (`gauntlets_larmor`) | 0.0487% | 0.12% | 0.12% |
| pair of leather gloves (`gloves_leather`) | 0.0487% | 0.12% | 0.12% |
| pair of leather hand wraps (`gloves_wraps_leather`) | 0.0487% | 0.12% | 0.12% |
| pair of leather leg guards (`legguard_larmor`) | 0.0487% | 0.12% | 0.12% |
| pair of leather vambraces (`vambrace_larmor`) | 0.0487% | 0.12% | 0.12% |
| pair of leg warmers (`leg_warmers`) | 0.0487% | 0.12% | 0.12% |
| pair of light survivor boots (`boots_lsurvivor`) | 0.0487% | 0.12% | 0.12% |
| pair of light survivor gloves (`gloves_lsurvivor`) | 0.0487% | 0.12% | 0.12% |
| pair of medical gloves (`gloves_medical`) | 0.0487% | 0.12% | 0.12% |
| pair of mild steel sheet metal bracers (`armguard_metal_sheets_bracer`) | 0.0487% | 0.12% | 0.12% |
| pair of mild steel sheet metal elbow guards (`armguard_metal_sheets_elbows`) | 0.0487% | 0.12% | 0.12% |
| pair of mild steel sheet metal pauldrons (`armguard_metal_sheets_shoulders`) | 0.0487% | 0.12% | 0.12% |
| pair of mittens (`mittens`) | 0.0487% | 0.12% | 0.12% |
| pair of nail knuckles (`knuckle_nail`) | 0.0487% | 0.12% | 0.12% |
| pair of neoprene arm sleeves (`armguard_soft`) | 0.0487% | 0.12% | 0.12% |
| pair of Nomex sock mitts (`nomex_sockmitts`) | 0.0487% | 0.12% | 0.12% |
| pair of paper arm guards (`armguard_paper`) | 0.0487% | 0.12% | 0.12% |
| pair of paper leg guards (`legguard_paper`) | 0.0487% | 0.12% | 0.12% |
| pair of rubber gloves (`gloves_rubber`) | 0.0487% | 0.12% | 0.12% |
| pair of safety glasses (`glasses_safety`) | 0.0487% | 0.12% | 0.12% |
| pair of scrap arm guards (`armguard_scrap`) | 0.0487% | 0.12% | 0.12% |
| pair of scrap knuckles (`knuckle_steel`) | 0.0487% | 0.12% | 0.12% |
| pair of scrap leg guards (`legguard_scrap`) | 0.0487% | 0.12% | 0.12% |
| pair of sheet metal arm guards (`armguard_metal`) | 0.0487% | 0.12% | 0.12% |
| pair of sheet metal gauntlets (`mitten_gaunt_metal_sheets`) | 0.0487% | 0.12% | 0.12% |
| pair of sheet metal greaves (`legguard_metal_sheets_greaves`) | 0.0487% | 0.12% | 0.12% |
| pair of sheet metal knee guards (`legguard_metal_sheets_knees`) | 0.0487% | 0.12% | 0.12% |
| pair of sheet metal leg guards (`legguard_metal_sheets`) | 0.0487% | 0.12% | 0.12% |
| pair of snow goggles (`iggaak`) | 0.0487% | 0.12% | 0.12% |
| pair of sock mitts (`sockmitts`) | 0.0487% | 0.12% | 0.12% |
| pair of studded gloves (`gloves_studded`) | 0.0487% | 0.12% | 0.12% |
| pair of survivor firegloves (`gloves_fsurvivor`) | 0.0487% | 0.12% | 0.12% |
| pair of survivor gloves (`gloves_survivor`) | 0.0487% | 0.12% | 0.12% |
| pair of tentacle sleeves (`stockings_tent_arms`) | 0.0487% | 0.12% | 0.12% |
| pair of welding goggles (`goggles_welding`) | 0.0487% | 0.12% | 0.12% |
| pair of white gloves (`gloves_white`) | 0.0487% | 0.12% | 0.12% |
| pair of wool gloves (`gloves_wool`) | 0.0487% | 0.12% | 0.12% |
| pair of wool hand wraps (`gloves_wraps_wool`) | 0.0487% | 0.12% | 0.12% |
| pair of wool sock mitts (`wool_sockmitts`) | 0.0487% | 0.12% | 0.12% |
| pair of work gloves (`gloves_work`) | 0.0487% | 0.12% | 0.12% |
| plastic apron (`apron_plastic`) | 0.0487% | 0.12% | 0.12% |
| plastic canteen (`canteen`) | 0.0487% | 0.12% | 0.12% |
| pot great helm (`stockpot_helmet`) | 0.0487% | 0.12% | 0.12% |
| pot helmet (`pot_helmet`) | 0.0487% | 0.12% | 0.12% |
| pouch (`ragpouch`) | 0.0487% | 0.12% | 0.12% |
| rag tunic (`tunic_rag`) | 0.0487% | 0.12% | 0.12% |
| rain coat (`coat_rain`) | 0.0487% | 0.12% | 0.12% |
| rain hood (`hood_rain`) | 0.0487% | 0.12% | 0.12% |
| rioter mask (`mask_rioter`) | 0.0487% | 0.12% | 0.12% |
| ripped jeans (`jeans_ripped`) | 0.0487% | 0.12% | 0.12% |
| rubber dog rainsuit (`rubber_harness_dog`) | 0.0487% | 0.12% | 0.12% |
| scrap boots (pair) (`boots_scrap`) | 0.0487% | 0.12% | 0.12% |
| scrap cuirass (`cuirass_scrap`) | 0.0487% | 0.12% | 0.12% |
| scrap ESAPI plate (`scrap_esapi_plate`) | 0.0487% | 0.12% | 0.12% |
| scrap ESBI plate (`scrap_esbi_plate`) | 0.0487% | 0.12% | 0.12% |
| scrap helmet (`helmet_scrap`) | 0.0487% | 0.12% | 0.12% |
| scrap suit (`armor_scrapsuit`) | 0.0487% | 0.12% | 0.12% |
| scrap suit (`armor_xs_scrapsuit`) | 0.0487% | 0.12% | 0.12% |
| sheet metal chest guard (`chestguard_metal_sheets`) | 0.0487% | 0.12% | 0.12% |
| sheet metal sabatons (pair) (`sabaton_metal_sheets`) | 0.0487% | 0.12% | 0.12% |
| sheet metal skirt (`legguard_metal_sheets_hip`) | 0.0487% | 0.12% | 0.12% |
| short cordage rope (`rope_makeshift_6`) | 0.0487% | 0.12% | 0.12% |
| short rope (`rope_6`) | 0.0487% | 0.12% | 0.12% |
| short vine (`vine_6`) | 0.0487% | 0.12% | 0.12% |
| short waist apron (`waist_apron_short`) | 0.0487% | 0.12% | 0.12% |
| shorts (`shorts`) | 0.0487% | 0.12% | 0.12% |
| simple patchwork scarf (`patchwork_scarf`) | 0.0487% | 0.12% | 0.12% |
| sleeping bag (`sleeping_bag`) | 0.0487% | 0.12% | 0.12% |
| sleeveless canvas gambeson (`gambeson_canvas_vest`) | 0.0487% | 0.12% | 0.12% |
| sleeveless duster (`sleeveless_duster`) | 0.0487% | 0.12% | 0.12% |
| sleeveless faux fur duster (`sleeveless_duster_faux_fur`) | 0.0487% | 0.12% | 0.12% |
| sleeveless faux fur trenchcoat (`sleeveless_trenchcoat_faux_fur`) | 0.0487% | 0.12% | 0.12% |
| sleeveless fur duster (`sleeveless_duster_fur`) | 0.0487% | 0.12% | 0.12% |
| sleeveless fur trenchcoat (`sleeveless_trenchcoat_fur`) | 0.0487% | 0.12% | 0.12% |
| sleeveless leather duster (`sleeveless_duster_leather`) | 0.0487% | 0.12% | 0.12% |
| sleeveless leather trenchcoat (`sleeveless_trenchcoat_leather`) | 0.0487% | 0.12% | 0.12% |
| sleeveless nylon gambeson (`gambeson_nylon_vest`) | 0.0487% | 0.12% | 0.12% |
| sleeveless survivor duster (`sleeveless_duster_survivor`) | 0.0487% | 0.12% | 0.12% |
| sleeveless survivor trenchcoat (`sleeveless_trenchcoat_survivor`) | 0.0487% | 0.12% | 0.12% |
| sleeveless trenchcoat (`sleeveless_trenchcoat`) | 0.0487% | 0.12% | 0.12% |
| sleeveless tunic (`sleeveless_tunic`) | 0.0487% | 0.12% | 0.12% |
| sleeveless underwear top (`long_undertop_sleeveless`) | 0.0487% | 0.12% | 0.12% |
| small waterskin (`waterskin`) | 0.0487% | 0.12% | 0.12% |
| stockings (pair) (`stockings`) | 0.0487% | 0.12% | 0.12% |
| straw basket (`straw_basket`) | 0.0487% | 0.12% | 0.12% |
| straw hat (`straw_hat`) | 0.0487% | 0.12% | 0.12% |
| straw sandals (pair) (`straw_sandals`) | 0.0487% | 0.12% | 0.12% |
| summer hard hat (`hat_hard_hooded`) | 0.0487% | 0.12% | 0.12% |
| sun shield (`sun_shield`) | 0.0487% | 0.12% | 0.12% |
| sundress (`sundress`) | 0.0487% | 0.12% | 0.12% |
| survivor duster (`duster_survivor`) | 0.0487% | 0.12% | 0.12% |
| survivor trenchcoat (`trenchcoat_survivor`) | 0.0487% | 0.12% | 0.12% |
| suspenders (`suspenders_cloth`) | 0.0487% | 0.12% | 0.12% |
| sustainment pouch (`sustainment_pouch`) | 0.0487% | 0.12% | 0.12% |
| swag bag (`swag_bag`) | 0.0487% | 0.12% | 0.12% |
| sweatshirt (`sweatshirt`) | 0.0487% | 0.12% | 0.12% |
| tank top (`tank_top`) | 0.0487% | 0.12% | 0.12% |
| tentacle stockings (pair) (`stockings_tent_legs`) | 0.0487% | 0.12% | 0.12% |
| thick wool onesie (`wool_suit`) | 0.0487% | 0.12% | 0.12% |
| tireplate (`tireplate`) | 0.0487% | 0.12% | 0.12% |
| toque (`hat_chef`) | 0.0487% | 0.12% | 0.12% |
| towel (`towel`) | 0.0487% | 0.12% | 0.12% |
| trapper pack (`trapper_pack`) | 0.0487% | 0.12% | 0.12% |
| travelpack (`travelpack`) | 0.0487% | 0.12% | 0.12% |
| trenchcoat (`trenchcoat`) | 0.0487% | 0.12% | 0.12% |
| tunic (`tunic`) | 0.0487% | 0.12% | 0.12% |
| turban (`turban`) | 0.0487% | 0.12% | 0.12% |
| turnout boots (pair) (`boots_bunker`) | 0.0487% | 0.12% | 0.12% |
| undershirt (`undershirt`) | 0.0487% | 0.12% | 0.12% |
| utility vest (`vest`) | 0.0487% | 0.12% | 0.12% |
| waterskin (`waterskin2`) | 0.0487% | 0.12% | 0.12% |
| windbreaker (`jacket_windbreaker`) | 0.0487% | 0.12% | 0.12% |
| wolf skull helmet (`helmet_skull`) | 0.0487% | 0.12% | 0.12% |
| wooden canteen (`canteen_wood`) | 0.0487% | 0.12% | 0.12% |
| wooden clogs (pair) (`clogs`) | 0.0487% | 0.12% | 0.12% |
| wool beret (`beret_wool`) | 0.0487% | 0.12% | 0.12% |
| wool chestwrap (`chestwrap_wool`) | 0.0487% | 0.12% | 0.12% |
| wool cloak (`cloak_wool`) | 0.0487% | 0.12% | 0.12% |
| wool foot wraps (pair) (`footrags_wool`) | 0.0487% | 0.12% | 0.12% |
| wool loincloth (`loincloth_wool`) | 0.0487% | 0.12% | 0.12% |
| wool poncho (`poncho`) | 0.0487% | 0.12% | 0.12% |
| wool socks (pair) (`socks_wool`) | 0.0487% | 0.12% | 0.12% |
| work pants (`technician_pants_gray`) | 0.0487% | 0.12% | 0.12% |
| 10.1 ounce squeeze tube (`squeeze_tube`) | 0.0621% | 0.11% | 0.11% |
| 2.8 ounce squeeze tube (`squeeze_tube_small`) | 0.0621% | 0.11% | 0.11% |
| acetylene cooker (`acetylene_cooker`) | 0.0621% | 0.11% | 0.11% |
| adjustable wrench (`wrench`) | 0.0621% | 0.11% | 0.11% |
| aluminum bat (`bat_metal`) | 0.0621% | 0.11% | 0.11% |
| aluminum frying pan (`aluminum_pan`) | 0.0621% | 0.11% | 0.11% |
| aluminum pot (`pot_aluminum`) | 0.0621% | 0.11% | 0.11% |
| balloon (`balloon`) | 0.0621% | 0.11% | 0.11% |
| basket fish trap (`fish_trap_basket`) | 0.0621% | 0.11% | 0.11% |
| bike basket (`bike_basket`) | 0.0621% | 0.11% | 0.11% |
| blade (`blade`) | 0.0621% | 0.11% | 0.11% |
| bone billet (`billet_bone`) | 0.0621% | 0.11% | 0.11% |
| bone needle (`needle_bone`) | 0.0621% | 0.11% | 0.11% |
| bone punch (`punch_bone`) | 0.0621% | 0.11% | 0.11% |
| bone sewing awl (`awl_bone`) | 0.0621% | 0.11% | 0.11% |
| bone shiv (`bone_knife`) | 0.0621% | 0.11% | 0.11% |
| bone skewer (`skewer_bone`) | 0.0621% | 0.11% | 0.11% |
| boulder anvil (`boulder_anvil`) | 0.0621% | 0.11% | 0.11% |
| bow fire drill (`fire_drill`) | 0.0621% | 0.11% | 0.11% |
| bow saw (`bow_saw`) | 0.0621% | 0.11% | 0.11% |
| boxcutter knife (`boxcutter`) | 0.0621% | 0.11% | 0.11% |
| brick (`brick`) | 0.0621% | 0.11% | 0.11% |
| bronze hammer (`hammer_bronze`) | 0.0621% | 0.11% | 0.11% |
| bronze wood saw (`saw_bronze`) | 0.0621% | 0.11% | 0.11% |
| butchering kit (`butchering_kit`) | 0.0621% | 0.11% | 0.11% |
| butterfly sword (`butterfly_swords`) | 0.0621% | 0.11% | 0.11% |
| canvas bag (`bag_canvas_small`) | 0.0621% | 0.11% | 0.11% |
| casserole pot (`casserole`) | 0.0621% | 0.11% | 0.11% |
| ceramic bowl (`ceramic_bowl`) | 0.0621% | 0.11% | 0.11% |
| ceramic cup (`ceramic_cup`) | 0.0621% | 0.11% | 0.11% |
| ceramic plate (`ceramic_plate`) | 0.0621% | 0.11% | 0.11% |
| ceramic shard (`ceramic_shard`) | 0.0621% | 0.11% | 0.11% |
| chunk of aluminum (`material_aluminium_ingot`) | 0.0621% | 0.11% | 0.11% |
| chunk of mild steel (`lc_steel_chunk`) | 0.0621% | 0.11% | 0.11% |
| chunk of steel (`steel_chunk`) | 0.0621% | 0.11% | 0.11% |
| cigarette pack (`box_cigarette`) | 0.0621% | 0.11% | 0.11% |
| clamp (`clamp`) | 0.0621% | 0.11% | 0.11% |
| clay bowl (`bowl_clay`) | 0.0621% | 0.11% | 0.11% |
| clay canister (`clay_canister`) | 0.0621% | 0.11% | 0.11% |
| clay cup (`clay_cup`) | 0.0621% | 0.11% | 0.11% |
| clay pot (`clay_pot`) | 0.0621% | 0.11% | 0.11% |
| clay teapot (`clay_teapot`) | 0.0621% | 0.11% | 0.11% |
| cleaver (`knife_cleaver`) | 0.0621% | 0.11% | 0.11% |
| coal/charcoal cooker (`charcoal_cooker`) | 0.0621% | 0.11% | 0.11% |
| coconut bowl (`bowl_coconut`) | 0.0621% | 0.11% | 0.11% |
| coffee mug (`ceramic_mug`) | 0.0621% | 0.11% | 0.11% |
| coffee pot (`coffeepot`) | 0.0621% | 0.11% | 0.11% |
| coffeemaker (`coffeemaker`) | 0.0621% | 0.11% | 0.11% |
| condom (`condom`) | 0.0621% | 0.11% | 0.11% |
| copper frying pan (`copper_pan`) | 0.0621% | 0.11% | 0.11% |
| copper hatchet (`copper_ax`) | 0.0621% | 0.11% | 0.11% |
| copper knife (`copper_knife`) | 0.0621% | 0.11% | 0.11% |
| copper pot (`pot_copper`) | 0.0621% | 0.11% | 0.11% |
| crowbar (`crowbar`) | 0.0621% | 0.11% | 0.11% |
| crucible (`crucible`) | 0.0621% | 0.11% | 0.11% |
| curved needle (`needle_curved`) | 0.0621% | 0.11% | 0.11% |
| digging stick (`digging_stick`) | 0.0621% | 0.11% | 0.11% |
| drinking glass (`glass`) | 0.0621% | 0.11% | 0.11% |
| duct tape wallet (`wallet_duct_tape`) | 0.0621% | 0.11% | 0.11% |
| electrohack (`electrohack`) | 0.0621% | 0.11% | 0.11% |
| empty canister (`canister_empty`) | 0.0621% | 0.11% | 0.11% |
| fiber mat (`fiber_mat`) | 0.0621% | 0.11% | 0.11% |
| fire brick (`fire_brick`) | 0.0621% | 0.11% | 0.11% |
| fire-hardened wooden spear (`spear_wood`) | 0.0621% | 0.11% | 0.11% |
| foil cup (`cup_foil`) | 0.0621% | 0.11% | 0.11% |
| foil wrapper (`wrapper_foil`) | 0.0621% | 0.11% | 0.11% |
| foldable plastic bottle (`bottle_folding`) | 0.0621% | 0.11% | 0.11% |
| gasoline cooker (`gasoline_cooker`) | 0.0621% | 0.11% | 0.11% |
| glass bowl (`glass_bowl`) | 0.0621% | 0.11% | 0.11% |
| glass plate (`glass_plate`) | 0.0621% | 0.11% | 0.11% |
| glass seasoning bottle (`bottle_glass_seasoning`) | 0.0621% | 0.11% | 0.11% |
| glass shiv (`glass_shiv`) | 0.0621% | 0.11% | 0.11% |
| grip hook (`grip_hook`) | 0.0621% | 0.11% | 0.11% |
| hacksaw (`hacksaw`) | 0.0621% | 0.11% | 0.11% |
| hand drill (`hand_drill`) | 0.0621% | 0.11% | 0.11% |
| hand pump (`hand_pump`) | 0.0621% | 0.11% | 0.11% |
| handheld glass cutter (`glass_cutter`) | 0.0621% | 0.11% | 0.11% |
| hatchet (`hatchet`) | 0.0621% | 0.11% | 0.11% |
| hexamine stove (`esbit_stove`) | 0.0621% | 0.11% | 0.11% |
| hobo stove (`hobo_stove`) | 0.0621% | 0.11% | 0.11% |
| huge kitchen knife (`knife_huge`) | 0.0621% | 0.11% | 0.11% |
| improvised lockpick (`crude_picklock`) | 0.0621% | 0.11% | 0.11% |
| IV bag (`bag_iv`) | 0.0621% | 0.11% | 0.11% |
| kettle (`kettle`) | 0.0621% | 0.11% | 0.11% |
| kiddie bowl (`plastic_bowl_kids`) | 0.0621% | 0.11% | 0.11% |
| large kitchen knife (`knife_large`) | 0.0621% | 0.11% | 0.11% |
| large rifle conversion kit (`box_retool_large`) | 0.0621% | 0.11% | 0.11% |
| large sealed stomach (`large_stomach_sealed`) | 0.0621% | 0.11% | 0.11% |
| large tin can (`can_food_big`) | 0.0621% | 0.11% | 0.11% |
| large wooden bowl (`bowl_wood_large`) | 0.0621% | 0.11% | 0.11% |
| leather bellow (`leather_bellow`) | 0.0621% | 0.11% | 0.11% |
| leather wallet (`wallet_leather`) | 0.0621% | 0.11% | 0.11% |
| locking pliers (`pliers_locking`) | 0.0621% | 0.11% | 0.11% |
| lump of steel (`steel_lump`) | 0.0621% | 0.11% | 0.11% |
| lunchbox (`lunchbox`) | 0.0621% | 0.11% | 0.11% |
| machete (`machete`) | 0.0621% | 0.11% | 0.11% |
| maker kit box (`maker_kit_box`) | 0.0621% | 0.11% | 0.11% |
| makeshift brazier (`makeshift_brazier`) | 0.0621% | 0.11% | 0.11% |
| makeshift copper pot (`pot_makeshift_copper`) | 0.0621% | 0.11% | 0.11% |
| makeshift crowbar (`makeshift_crowbar`) | 0.0621% | 0.11% | 0.11% |
| makeshift hammer (`makeshift_hammer`) | 0.0621% | 0.11% | 0.11% |
| makeshift hand drill (`makeshift_hand_drill`) | 0.0621% | 0.11% | 0.11% |
| makeshift knife (`makeshift_knife`) | 0.0621% | 0.11% | 0.11% |
| makeshift machete (`makeshift_machete`) | 0.0621% | 0.11% | 0.11% |
| makeshift sieve (`sieve_steel_makeshift`) | 0.0621% | 0.11% | 0.11% |
| makeshift tree spile (`makeshift_tree_spile`) | 0.0621% | 0.11% | 0.11% |
| mess kit (`mess_kit`) | 0.0621% | 0.11% | 0.11% |
| metal axe head (`makeshift_axe`) | 0.0621% | 0.11% | 0.11% |
| metal fileset (`metal_file`) | 0.0621% | 0.11% | 0.11% |
| metal paint can (`paint_can_steel`) | 0.0621% | 0.11% | 0.11% |
| metal tank (2 L) (`metal_tank_little`) | 0.0621% | 0.11% | 0.11% |
| metalworking chisel (`chisel`) | 0.0621% | 0.11% | 0.11% |
| micro-carbine conversion kit (`box_retool_sbr_micro`) | 0.0621% | 0.11% | 0.11% |
| milk carton (`carton_milk`) | 0.0621% | 0.11% | 0.11% |
| mop (`mop`) | 0.0621% | 0.11% | 0.11% |
| MRE bag (`mre_bag`) | 0.0621% | 0.11% | 0.11% |
| MRE dessert bag (`mre_bag_dessert`) | 0.0621% | 0.11% | 0.11% |
| MRE jam bag (`mre_bag_jam`) | 0.0621% | 0.11% | 0.11% |
| MRE package (`mre_package`) | 0.0621% | 0.11% | 0.11% |
| MRE spread bag (`mre_bag_spread`) | 0.0621% | 0.11% | 0.11% |
| nail punch (`punch_nail`) | 0.0621% | 0.11% | 0.11% |
| needle (`needle_steel`) | 0.0621% | 0.11% | 0.11% |
| pair of flatjaw tongs (`metalworking_tongs`) | 0.0621% | 0.11% | 0.11% |
| pair of kitchen tongs (`tongs`) | 0.0621% | 0.11% | 0.11% |
| pair of knitting needles (`knitting_needles`) | 0.0621% | 0.11% | 0.11% |
| pair of office scissors (`scissors`) | 0.0621% | 0.11% | 0.11% |
| paper wrapper (`wrapper`) | 0.0621% | 0.11% | 0.11% |
| pewter bowl (`bowl_pewter`) | 0.0621% | 0.11% | 0.11% |
| pipe (`pipe`) | 0.0621% | 0.11% | 0.11% |
| pipe mace (`mace_pipe`) | 0.0621% | 0.11% | 0.11% |
| plastic bag (`bag_plastic`) | 0.0621% | 0.11% | 0.11% |
| plastic fish trap (`fish_trap`) | 0.0621% | 0.11% | 0.11% |
| plastic hand fishing reel (`plastichoboreel`) | 0.0621% | 0.11% | 0.11% |
| plastic painkiller bottle (`bottle_plastic_pill_painkiller`) | 0.0621% | 0.11% | 0.11% |
| plastic paint can (`paint_can_plastic`) | 0.0621% | 0.11% | 0.11% |
| plastic plate (`plastic_plate`) | 0.0621% | 0.11% | 0.11% |
| plastic prescription bottle (`bottle_plastic_pill_prescription`) | 0.0621% | 0.11% | 0.11% |
| plastic tumbler (`tumbler_plastic`) | 0.0621% | 0.11% | 0.11% |
| plastic tupperware (`bowl_plastic`) | 0.0621% | 0.11% | 0.11% |
| pliers (`pliers`) | 0.0621% | 0.11% | 0.11% |
| pointy stick (`pointy_stick`) | 0.0621% | 0.11% | 0.11% |
| primitive rock drill (`drill_rock_primitive`) | 0.0621% | 0.11% | 0.11% |
| pro fishing rod (`fishing_rod_professional`) | 0.0621% | 0.11% | 0.11% |
| propane cooker (`propane_cooker`) | 0.0621% | 0.11% | 0.11% |
| pump fire drill (`fire_drill_large`) | 0.0621% | 0.11% | 0.11% |
| reinforced garbage bag (`bag_garbage_reinforced`) | 0.0621% | 0.11% | 0.11% |
| rock (`rock`) | 0.0621% | 0.11% | 0.11% |
| rock in a sock (`rock_sock`) | 0.0621% | 0.11% | 0.11% |
| rubber hose (`hose`) | 0.0621% | 0.11% | 0.11% |
| rudimentary lockpick (`emergency_lockpick`) | 0.0621% | 0.11% | 0.11% |
| sandleather (`leather_filing`) | 0.0621% | 0.11% | 0.11% |
| SBR conversion kit (`box_retool_sbr`) | 0.0621% | 0.11% | 0.11% |
| scrap sword (`sword_crude`) | 0.0621% | 0.11% | 0.11% |
| screwdriver set (`screwdriver_set`) | 0.0621% | 0.11% | 0.11% |
| scythe blade (`blade_scythe`) | 0.0621% | 0.11% | 0.11% |
| sealed stomach (`stomach_sealed`) | 0.0621% | 0.11% | 0.11% |
| set of clothes (`outfit_storage`) | 0.0621% | 0.11% | 0.11% |
| sharp rock (`sharp_rock`) | 0.0621% | 0.11% | 0.11% |
| sharpened pipe (`sharpened_pipe`) | 0.0621% | 0.11% | 0.11% |
| simple mace (`mace_simple`) | 0.0621% | 0.11% | 0.11% |
| sippy cup (`sippy_cup`) | 0.0621% | 0.11% | 0.11% |
| skull bowl (`bowl_skull`) | 0.0621% | 0.11% | 0.11% |
| small adjustable wrench (`wrench_small`) | 0.0621% | 0.11% | 0.11% |
| small biogas tank (`small_biogas_tank`) | 0.0621% | 0.11% | 0.11% |
| small cardboard box (`box_small`) | 0.0621% | 0.11% | 0.11% |
| small glass tube (`glass_tube_small`) | 0.0621% | 0.11% | 0.11% |
| small metal box (`box_small_metal`) | 0.0621% | 0.11% | 0.11% |
| small plastic bag (`bag_plastic_small`) | 0.0621% | 0.11% | 0.11% |
| small plastic seasoning bottle (`bottle_plastic_seasoning_small`) | 0.0621% | 0.11% | 0.11% |
| small tin can (`can_food`) | 0.0621% | 0.11% | 0.11% |
| small wooden box (`box_small_wood`) | 0.0621% | 0.11% | 0.11% |
| spike (`spike`) | 0.0621% | 0.11% | 0.11% |
| steel bottle (`bottle_metal`) | 0.0621% | 0.11% | 0.11% |
| steel frying pan (`steel_pan`) | 0.0621% | 0.11% | 0.11% |
| steel sewing awl (`awl_steel`) | 0.0621% | 0.11% | 0.11% |
| steel tankard (`tankard_metal`) | 0.0621% | 0.11% | 0.11% |
| stone adze (`primitive_adze`) | 0.0621% | 0.11% | 0.11% |
| stone axe (`primitive_axe`) | 0.0621% | 0.11% | 0.11% |
| stone axe head (`hand_axe`) | 0.0621% | 0.11% | 0.11% |
| stone chisel (`stone_chisel`) | 0.0621% | 0.11% | 0.11% |
| stone chopper (`stone_chopper`) | 0.0621% | 0.11% | 0.11% |
| stone hammer (`primitive_hammer`) | 0.0621% | 0.11% | 0.11% |
| stone knife (`primitive_knife`) | 0.0621% | 0.11% | 0.11% |
| stone sickle (`sickle_stone`) | 0.0621% | 0.11% | 0.11% |
| storage line (`storage_line`) | 0.0621% | 0.11% | 0.11% |
| superalloy sheet (`alloy_sheet`) | 0.0621% | 0.11% | 0.11% |
| survival kit box (`survival_kit_box`) | 0.0621% | 0.11% | 0.11% |
| survival knife (`knife_rambo`) | 0.0621% | 0.11% | 0.11% |
| tailor's kit (`tailors_kit`) | 0.0621% | 0.11% | 0.11% |
| teapot (`teapot`) | 0.0621% | 0.11% | 0.11% |
| telescoping fishing rod (`fishing_rod_tele`) | 0.0621% | 0.11% | 0.11% |
| tiger claws (`bagh_nakha`) | 0.0621% | 0.11% | 0.11% |
| tin cup (`tin_cup`) | 0.0621% | 0.11% | 0.11% |
| tin plate (`tin_plate`) | 0.0621% | 0.11% | 0.11% |
| tin snips (`tin_snips`) | 0.0621% | 0.11% | 0.11% |
| tiny plastic bottle (`bottle_plastic_tiny`) | 0.0621% | 0.11% | 0.11% |
| tobacco pipe (`pipe_tobacco`) | 0.0621% | 0.11% | 0.11% |
| tongue-and-groove pliers (`big_pliers`) | 0.0621% | 0.11% | 0.11% |
| trench mace (`mace_trench`) | 0.0621% | 0.11% | 0.11% |
| two-piece fishing rod (`fishing_rod_2pc`) | 0.0621% | 0.11% | 0.11% |
| vacuum-packed bag (`plastic_bag_vac`) | 0.0621% | 0.11% | 0.11% |
| water pipe (`pipe_water`) | 0.0621% | 0.11% | 0.11% |
| wicker sieve (`sieve_primitive`) | 0.0621% | 0.11% | 0.11% |
| wine glass (`wine_glass`) | 0.0621% | 0.11% | 0.11% |
| wood saw (`saw`) | 0.0621% | 0.11% | 0.11% |
| wooden billet (`billet_wood`) | 0.0621% | 0.11% | 0.11% |
| wooden bowl (`bowl_wood`) | 0.0621% | 0.11% | 0.11% |
| wooden bucket (`bucket_wood`) | 0.0621% | 0.11% | 0.11% |
| wooden hand fishing reel (`hoboreel`) | 0.0621% | 0.11% | 0.11% |
| wooden needle (`needle_wood`) | 0.0621% | 0.11% | 0.11% |
| wooden tankard (`tankard_wooden`) | 0.0621% | 0.11% | 0.11% |
| zipper bag (`bag_zipper`) | 0.0621% | 0.11% | 0.11% |
| adobe brick (`adobe_brick`) | 0.0621% | 0.0984% | 0.0984% |
| basic fishing rod (`fishing_rod_basic`) | 0.0621% | 0.0984% | 0.0984% |
| basic pipe spear (`simple_spear_pipe`) | 0.0621% | 0.0984% | 0.0984% |
| battle axe (`battleaxe`) | 0.0621% | 0.0984% | 0.0984% |
| bill (`brush_axe`) | 0.0621% | 0.0984% | 0.0984% |
| body bag (`bag_body_bag`) | 0.0621% | 0.0984% | 0.0984% |
| bolted battle axe (`ax_sheets_bolted`) | 0.0621% | 0.0984% | 0.0984% |
| cast-iron pot (`iron_pot`) | 0.0621% | 0.0984% | 0.0984% |
| chunk of budget steel (`budget_steel_chunk`) | 0.0621% | 0.0984% | 0.0984% |
| clay crucible (`crucible_clay`) | 0.0621% | 0.0984% | 0.0984% |
| clay hydria (`clay_hydria`) | 0.0621% | 0.0984% | 0.0984% |
| clay urn (`clay_urn`) | 0.0621% | 0.0984% | 0.0984% |
| coin wrapper (`coin_wrapper`) | 0.0621% | 0.0984% | 0.0984% |
| cordless drill (`cordless_drill`) | 0.0621% | 0.0984% | 0.0984% |
| cordless impact wrench (`cordless_impact_wrench`) | 0.0621% | 0.0984% | 0.0984% |
| crude steel spear (`spear_steel_crude`) | 0.0621% | 0.0984% | 0.0984% |
| damaged shelter kit (`damaged_shelter_kit`) | 0.0621% | 0.0984% | 0.0984% |
| engineer's hammer (`hammer_sledge_engineer`) | 0.0621% | 0.0984% | 0.0984% |
| homemade polehammer (`homemade_polehammer`) | 0.0621% | 0.0984% | 0.0984% |
| improvised oven (`improvised_oven`) | 0.0621% | 0.0984% | 0.0984% |
| ironshod quarterstaff (`i_staff`) | 0.0621% | 0.0984% | 0.0984% |
| knife spear (`spear_knife_proper`) | 0.0621% | 0.0984% | 0.0984% |
| large adjustable wrench (`wrench_large`) | 0.0621% | 0.0984% | 0.0984% |
| leather tarp (`leather_tarp`) | 0.0621% | 0.0984% | 0.0984% |
| long pointy stick (`pointy_stick_long`) | 0.0621% | 0.0984% | 0.0984% |
| long pole (`long_pole`) | 0.0621% | 0.0984% | 0.0984% |
| lump of budget steel (`budget_steel_lump`) | 0.0621% | 0.0984% | 0.0984% |
| makeshift glaive (`makeshift_glaive`) | 0.0621% | 0.0984% | 0.0984% |
| makeshift homemade polehammer (`homemade_polehammer_makeshift`) | 0.0621% | 0.0984% | 0.0984% |
| makeshift knife spear (`spear_knife_superior`) | 0.0621% | 0.0984% | 0.0984% |
| makeshift pressure cooker (`makeshift_pressure_cooker`) | 0.0621% | 0.0984% | 0.0984% |
| makeshift stethoscope (`makeshift_stethoscope`) | 0.0621% | 0.0984% | 0.0984% |
| makeshift welding blanket (`makeshift_welding_blanket`) | 0.0621% | 0.0984% | 0.0984% |
| miscellaneous repair kit (`misc_repairkit`) | 0.0621% | 0.0984% | 0.0984% |
| mortar and pestle (`mortar_pestle`) | 0.0621% | 0.0984% | 0.0984% |
| plastic gasket set (`gasket_plastic_set`) | 0.0621% | 0.0984% | 0.0984% |
| plastic jerrycan (`jerrycan`) | 0.0621% | 0.0984% | 0.0984% |
| rebar (`rebar`) | 0.0621% | 0.0984% | 0.0984% |
| scrap greatsword (`sword_crude_large`) | 0.0621% | 0.0984% | 0.0984% |
| simple knife spear (`spear_knife`) | 0.0621% | 0.0984% | 0.0984% |
| simple makeshift glaive (`makeshift_halberd`) | 0.0621% | 0.0984% | 0.0984% |
| spike on a stick (`spear_spike`) | 0.0621% | 0.0984% | 0.0984% |
| stock pot (`stock_pot`) | 0.0621% | 0.0984% | 0.0984% |
| stone spear (`spear_stone`) | 0.0621% | 0.0984% | 0.0984% |
| survivor mess kit (`survivor_mess_kit`) | 0.0621% | 0.0984% | 0.0984% |
| swage and die set (`swage`) | 0.0621% | 0.0984% | 0.0984% |
| thread cutting set (`thread_cutting_set`) | 0.0621% | 0.0984% | 0.0984% |
| toolbox (`toolbox_empty`) | 0.0621% | 0.0984% | 0.0984% |
| welded battle axe (`ax_sheets_welded`) | 0.0621% | 0.0984% | 0.0984% |
| wood axe (`ax`) | 0.0621% | 0.0984% | 0.0984% |
| wooden javelin (`javelin`) | 0.0621% | 0.0984% | 0.0984% |
| wooden shovel (`primitive_shovel`) | 0.0621% | 0.0984% | 0.0984% |
| wooden smoother (`wood_smoother`) | 0.0621% | 0.0984% | 0.0984% |
| X-Acto knife (`xacto`) | 0.0621% | 0.0984% | 0.0984% |
| bacon (`bacon`) | 0.0934% | 0.0934% | 0.0934% |
| banana (`banana`) | 0.0934% | 0.0934% | 0.0934% |
| batter fried fish (`fish_fried`) | 0.0934% | 0.0934% | 0.0934% |
| beans and rice (`beansnrice`) | 0.0934% | 0.0934% | 0.0934% |
| black pepper (`pepper`) | 0.0934% | 0.0934% | 0.0934% |
| BLT (`blt`) | 0.0934% | 0.0934% | 0.0934% |
| boiled stomach (`small_stomach_boiled`) | 0.0934% | 0.0934% | 0.0934% |
| bone meal (`meal_bone`) | 0.0934% | 0.0934% | 0.0934% |
| boring sandwich (`sandwich_sauce`) | 0.0934% | 0.0934% | 0.0934% |
| bottle gourd seeds (`seed_bottle_gourd`) | 0.0934% | 0.0934% | 0.0934% |
| buttercream icing (`buttercream`) | 0.0934% | 0.0934% | 0.0934% |
| buttermilk (`buttermilk`) | 0.0934% | 0.0934% | 0.0934% |
| campfire hot dog (`hotdogs_campfire`) | 0.0934% | 0.0934% | 0.0934% |
| canned corn (`can_corn`) | 0.0934% | 0.0934% | 0.0934% |
| canned sardine (`can_sardine`) | 0.0934% | 0.0934% | 0.0934% |
| canned tuna fish (`can_tuna`) | 0.0934% | 0.0934% | 0.0934% |
| carrot pound cake (`mre_carrot_cake`) | 0.0934% | 0.0934% | 0.0934% |
| cheese (`cheese`) | 0.0934% | 0.0934% | 0.0934% |
| cheese fries (`cheese_fries`) | 0.0934% | 0.0934% | 0.0934% |
| cheese grits (`cheese_grits`) | 0.0934% | 0.0934% | 0.0934% |
| cheese nachos (`nachosc`) | 0.0934% | 0.0934% | 0.0934% |
| cheese sandwich (`sandwich_cheese`) | 0.0934% | 0.0934% | 0.0934% |
| cheeseburger (`cheeseburger`) | 0.0934% | 0.0934% | 0.0934% |
| chicory seeds (`seed_chicory`) | 0.0934% | 0.0934% | 0.0934% |
| chocolate bar (`chocolate`) | 0.0934% | 0.0934% | 0.0934% |
| chocolate milk (`milk_choc`) | 0.0934% | 0.0934% | 0.0934% |
| chocolate milkshake (`milkshake_choc`) | 0.0934% | 0.0934% | 0.0934% |
| cocoa powder (`cocoa_powder`) | 0.0934% | 0.0934% | 0.0934% |
| coffee substitute (`coffee_substitute`) | 0.0934% | 0.0934% | 0.0934% |
| coffee substitute with milk (`milk_coffee_substitute`) | 0.0934% | 0.0934% | 0.0934% |
| condensed milk (`con_milk`) | 0.0934% | 0.0934% | 0.0934% |
| cooked bell pepper (`cooked_bell_pepper`) | 0.0934% | 0.0934% | 0.0934% |
| cooked corn dog (`corndogs_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked pepper fatty meat (`pepperfat`) | 0.0934% | 0.0934% | 0.0934% |
| cooked pepper meat (`peppermeat`) | 0.0934% | 0.0934% | 0.0934% |
| cooked pepper poultry (`poultry_pepper`) | 0.0934% | 0.0934% | 0.0934% |
| cooked pepper scrap of meat (`pepperscrap`) | 0.0934% | 0.0934% | 0.0934% |
| cooked pepper scrap of poultry (`poultry_scrap_pepper`) | 0.0934% | 0.0934% | 0.0934% |
| cooked piece of brain (`brain_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked piece of heart (`heart_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked piece of kidney (`kidney_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked piece of liver (`liver_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked piece of lung (`lung_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked piece of sweetbread (`sweetbread_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked scrap of meat (`meat_scrap_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked scrap of poultry (`poultry_scrap_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked TV dinner (`cooked_dinner`) | 0.0934% | 0.0934% | 0.0934% |
| cooked wild rice (`wild_rice_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cooked wild vegetables (`veggy_wild_cooked`) | 0.0934% | 0.0934% | 0.0934% |
| cornmeal (`cornmeal`) | 0.0934% | 0.0934% | 0.0934% |
| cracklins (`cracklins`) | 0.0934% | 0.0934% | 0.0934% |
| cucumber sandwich (`sandwich_cucumber`) | 0.0934% | 0.0934% | 0.0934% |
| dandelion tea (`dandelion_tea`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated chicken (`dry_poultry`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated chili pepper (`dry_chili`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated fish (`dry_fish`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated fruit (`dry_fruit`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated garlic clove (`dry_garlic`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated lobster (`dry_lobster`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated mollusk (`dry_mollusk`) | 0.0934% | 0.0934% | 0.0934% |
| dehydrated vegetable (`dry_veggy`) | 0.0934% | 0.0934% | 0.0934% |
| deluxe beans and rice (`deluxe_beansnrice`) | 0.0934% | 0.0934% | 0.0934% |
| deluxe chocolate milkshake (`milkshake_deluxe_choc`) | 0.0934% | 0.0934% | 0.0934% |
| deluxe cooked oatmeal (`oatmeal_deluxe`) | 0.0934% | 0.0934% | 0.0934% |
| deluxe milkshake (`milkshake_deluxe`) | 0.0934% | 0.0934% | 0.0934% |
| deluxe vegetarian beans and rice (`deluxe_veggy_beansnrice`) | 0.0934% | 0.0934% | 0.0934% |
| dried mushroom (`dry_mushroom`) | 0.0934% | 0.0934% | 0.0934% |
| dried salad (`dried_salad`) | 0.0934% | 0.0934% | 0.0934% |
| dry wild rice (`dry_wild_rice`) | 0.0934% | 0.0934% | 0.0934% |
| egg salad (`egg_salad`) | 0.0934% | 0.0934% | 0.0934% |
| egg salad sandwich (`sandwich_egg_salad`) | 0.0934% | 0.0934% | 0.0934% |
| fast-food French fries (`fries`) | 0.0934% | 0.0934% | 0.0934% |
| fish and spinach bagel (`fish_bagel`) | 0.0934% | 0.0934% | 0.0934% |
| fish sandwich (`fish_sandwich`) | 0.0934% | 0.0934% | 0.0934% |
| fish soup (`soup_fish`) | 0.0934% | 0.0934% | 0.0934% |
| flatbread (`flatbread`) | 0.0934% | 0.0934% | 0.0934% |
| flour tortilla (`tortilla_flour`) | 0.0934% | 0.0934% | 0.0934% |
| Fluffernutter sandwich (`sandwich_pbf`) | 0.0934% | 0.0934% | 0.0934% |
| forest honey (`honey_bottled`) | 0.0934% | 0.0934% | 0.0934% |
| fortified milk (`milk_fortified`) | 0.0934% | 0.0934% | 0.0934% |
| fried chicken (`chicken_fried`) | 0.0934% | 0.0934% | 0.0934% |
| fried dandelions (`dandelion_fried`) | 0.0934% | 0.0934% | 0.0934% |
| fried meat (`meat_fried`) | 0.0934% | 0.0934% | 0.0934% |
| fried rice (`deluxe_veggy_rice`) | 0.0934% | 0.0934% | 0.0934% |
| fruit jam (`jam_fruit`) | 0.0934% | 0.0934% | 0.0934% |
| fruit juice (`juice`) | 0.0934% | 0.0934% | 0.0934% |
| fruit tea (`tea_fruit`) | 0.0934% | 0.0934% | 0.0934% |
| fruit tea bag (`tea_fruit_bag`) | 0.0934% | 0.0934% | 0.0934% |
| frybread (`frybread`) | 0.0934% | 0.0934% | 0.0934% |
| garlic clove (`garlic_clove`) | 0.0934% | 0.0934% | 0.0934% |
| glazed carrot (`carrot_glazed`) | 0.0934% | 0.0934% | 0.0934% |
| grapeade (`grapeade`) | 0.0934% | 0.0934% | 0.0934% |
| grapeade drink mix (`grapeade_powder`) | 0.0934% | 0.0934% | 0.0934% |
| grenadine syrup (`grenadine_syrup`) | 0.0934% | 0.0934% | 0.0934% |
| grilled cheese sandwich (`sandwich_cheese_grilled`) | 0.0934% | 0.0934% | 0.0934% |
| grits (`grits`) | 0.0934% | 0.0934% | 0.0934% |
| hamburger (`hamburger`) | 0.0934% | 0.0934% | 0.0934% |
| hamburger helper (`macaroni_helper`) | 0.0934% | 0.0934% | 0.0934% |
| hardtack (`hardtack`) | 0.0934% | 0.0934% | 0.0934% |
| hide bag (`hide_bag`) | 0.0934% | 0.0934% | 0.0934% |
| homemade toast-em (`toastem4`) | 0.0934% | 0.0934% | 0.0934% |
| honey sandwich (`sandwich_honey`) | 0.0934% | 0.0934% | 0.0934% |
| hot chocolate (`hot_chocolate`) | 0.0934% | 0.0934% | 0.0934% |
| insta-salad (`insta_salad`) | 0.0934% | 0.0934% | 0.0934% |
| instant chicken noodle soup (`soup_instant_chicken_noodle_prepared`) | 0.0934% | 0.0934% | 0.0934% |
| instant chicken noodle soup powder (`soup_instant_chicken_noodle_powder`) | 0.0934% | 0.0934% | 0.0934% |
| instant cocoa (`cocoa_powder_milk`) | 0.0934% | 0.0934% | 0.0934% |
| instant spring vegetable soup (`soup_instant_vegetable_prepared`) | 0.0934% | 0.0934% | 0.0934% |
| instant spring vegetable soup powder (`soup_instant_vegetable_powder`) | 0.0934% | 0.0934% | 0.0934% |
| jam and butter sandwich (`sandwich_jam_butter`) | 0.0934% | 0.0934% | 0.0934% |
| jam and cheese sandwich (`sandwich_jam_cheese`) | 0.0934% | 0.0934% | 0.0934% |
| jam sandwich (`sandwich_jam`) | 0.0934% | 0.0934% | 0.0934% |
| Japanese knotweed stems (`seed_japanese_knotweed`) | 0.0934% | 0.0934% | 0.0934% |
| lard (`lard`) | 0.0934% | 0.0934% | 0.0934% |
| large boiled stomach (`stomach_boiled`) | 0.0934% | 0.0934% | 0.0934% |
| lemon-lime soda (`lemonlime`) | 0.0934% | 0.0934% | 0.0934% |
| lemonade (`lemonade`) | 0.0934% | 0.0934% | 0.0934% |
| lemonade drink mix (`lemonade_powder`) | 0.0934% | 0.0934% | 0.0934% |
| maple syrup (`syrup`) | 0.0934% | 0.0934% | 0.0934% |
| marshmallow fluff (`marshmallow_fluff`) | 0.0934% | 0.0934% | 0.0934% |
| meat broth (`broth_meat`) | 0.0934% | 0.0934% | 0.0934% |
| meat nachos (`nachosm`) | 0.0934% | 0.0934% | 0.0934% |
| meat nachos with cheese (`nachosmc`) | 0.0934% | 0.0934% | 0.0934% |
| meat sandwich (`sandwich_t`) | 0.0934% | 0.0934% | 0.0934% |
| meat soup (`soup_meat`) | 0.0934% | 0.0934% | 0.0934% |
| milk (`milk`) | 0.0934% | 0.0934% | 0.0934% |
| mushroom ketchup (`mushroom_ketchup`) | 0.0934% | 0.0934% | 0.0934% |
| mushroom soup (`soup_mushroom`) | 0.0934% | 0.0934% | 0.0934% |
| nut butter (`peanutbutter`) | 0.0934% | 0.0934% | 0.0934% |
| orangeade (`orangeade`) | 0.0934% | 0.0934% | 0.0934% |
| orangeade drink mix (`orangeade_powder`) | 0.0934% | 0.0934% | 0.0934% |
| pair of dehydrated frog legs (`dry_froglegs`) | 0.0934% | 0.0934% | 0.0934% |
| pan roasted corn (`pan_roasted_corn`) | 0.0934% | 0.0934% | 0.0934% |
| PB&H sandwich (`sandwich_pbh`) | 0.0934% | 0.0934% | 0.0934% |
| PB&J sandwich (`sandwich_pbj`) | 0.0934% | 0.0934% | 0.0934% |
| PB&M sandwich (`sandwich_pbm`) | 0.0934% | 0.0934% | 0.0934% |
| peach (`peach`) | 0.0934% | 0.0934% | 0.0934% |
| peanut butter sandwich (`sandwich_pb`) | 0.0934% | 0.0934% | 0.0934% |
| pear (`pear`) | 0.0934% | 0.0934% | 0.0934% |
| pelmeni (`pelmeni`) | 0.0934% | 0.0934% | 0.0934% |
| pesto (`sauce_pesto`) | 0.0934% | 0.0934% | 0.0934% |
| pickled fish (`fish_pickled`) | 0.0934% | 0.0934% | 0.0934% |
| pile of seaweed (`seaweed_pile`) | 0.0934% | 0.0934% | 0.0934% |
| pine needle tea (`pine_tea`) | 0.0934% | 0.0934% | 0.0934% |
| plum (`plums`) | 0.0934% | 0.0934% | 0.0934% |
| powdered cheese (`cheese_powder`) | 0.0934% | 0.0934% | 0.0934% |
| powdered egg (`powder_eggs`) | 0.0934% | 0.0934% | 0.0934% |
| powdered milk (`milk_powder`) | 0.0934% | 0.0934% | 0.0934% |
| protein drink (`protein_drink`) | 0.0934% | 0.0934% | 0.0934% |
| protein powder (`protein_powder`) | 0.0934% | 0.0934% | 0.0934% |
| protein shake (`protein_shake`) | 0.0934% | 0.0934% | 0.0934% |
| protein smoothie (`protein_smoothie`) | 0.0934% | 0.0934% | 0.0934% |
| quesadilla (`quesadilla_cheese`) | 0.0934% | 0.0934% | 0.0934% |
| ratatouille entree (`mre_ratatouille`) | 0.0934% | 0.0934% | 0.0934% |
| ravioli (`ravioli`) | 0.0934% | 0.0934% | 0.0934% |
| raw butter (`raw_butter`) | 0.0934% | 0.0934% | 0.0934% |
| raw hide (`raw_leather`) | 0.0934% | 0.0934% | 0.0934% |
| raw human skin (`raw_hleather`) | 0.0934% | 0.0934% | 0.0934% |
| raw pelt (`raw_fur`) | 0.0934% | 0.0934% | 0.0934% |
| reconstituted milk (`milk_reconstituted`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated cheese (`cheese_rehydrated`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated chili pepper (`rehydrated_chili`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated egg (`rehydrated_eggs`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated fish (`rehydrated_fish`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated frog leg (`rehydrated_froglegs`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated fruit (`rehydrated_fruit`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated garlic clove (`rehydrated_garlic`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated lobster (`rehydrated_lobster`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated meat (`rehydrated_meat`) | 0.0934% | 0.0934% | 0.0934% |
| rehydrated mollusk (`rehydrated_mollusk`) | 0.0934% | 0.0934% | 0.0934% |
| roasted carrot (`carrot_roasted`) | 0.0934% | 0.0934% | 0.0934% |
| roasted cattail rhizome (`roasted_cattail_rhizome`) | 0.0934% | 0.0934% | 0.0934% |
| roasted pepper bone marrow (`pepperbone`) | 0.0934% | 0.0934% | 0.0934% |
| roasted pistachios (`pistachio_roasted`) | 0.0934% | 0.0934% | 0.0934% |
| salsa (`salsa`) | 0.0934% | 0.0934% | 0.0934% |
| salsify seeds (`seed_salsify_raw`) | 0.0934% | 0.0934% | 0.0934% |
| salt (`salt`) | 0.0934% | 0.0934% | 0.0934% |
| salted meat slice (`meat_salted`) | 0.0934% | 0.0934% | 0.0934% |
| salted popcorn (`popcorn2`) | 0.0934% | 0.0934% | 0.0934% |
| sausage gravy (`sausagegravy`) | 0.0934% | 0.0934% | 0.0934% |
| seasoned salt (`seasoning_salt`) | 0.0934% | 0.0934% | 0.0934% |
| seaweed (`seaweed`) | 0.0934% | 0.0934% | 0.0934% |
| seed popcorn (`seed_popcorn`) | 0.0934% | 0.0934% | 0.0934% |
| serving of candy ice cream (`icecream_candy`) | 0.0934% | 0.0934% | 0.0934% |
| serving of fruity ice cream (`icecream_fruit`) | 0.0934% | 0.0934% | 0.0934% |
| serving of ice cream (`icecream`) | 0.0934% | 0.0934% | 0.0934% |
| Shirley Temple drink (`drink_shirleytemple`) | 0.0934% | 0.0934% | 0.0934% |
| soggy hardtack (`soggy_hardtack`) | 0.0934% | 0.0934% | 0.0934% |
| SPAM (`can_spam`) | 0.0934% | 0.0934% | 0.0934% |
| starch (`starch`) | 0.0934% | 0.0934% | 0.0934% |
| sugar (`sugar`) | 0.0934% | 0.0934% | 0.0934% |
| sugar beet (`sugar_beet`) | 0.0934% | 0.0934% | 0.0934% |
| sugar beet seeds (`seed_sugar_beet`) | 0.0934% | 0.0934% | 0.0934% |
| sweet water (`sweet_water`) | 0.0934% | 0.0934% | 0.0934% |
| sweetened coffee substitute with milk (`milk_coffee_substitute_sweetened`) | 0.0934% | 0.0934% | 0.0934% |
| sweetened fortified milk (`sweet_milk_fortified`) | 0.0934% | 0.0934% | 0.0934% |
| sweetened milk (`sweet_milk`) | 0.0934% | 0.0934% | 0.0934% |
| tallow (`tallow`) | 0.0934% | 0.0934% | 0.0934% |
| threshed barley (`threshed_barley`) | 0.0934% | 0.0934% | 0.0934% |
| threshed buckwheat (`threshed_buckwheat`) | 0.0934% | 0.0934% | 0.0934% |
| threshed canola (`threshed_canola`) | 0.0934% | 0.0934% | 0.0934% |
| threshed oats (`threshed_oats`) | 0.0934% | 0.0934% | 0.0934% |
| threshed wheat (`threshed_wheat`) | 0.0934% | 0.0934% | 0.0934% |
| toaster pastry (`homemade_toasterpastry`) | 0.0934% | 0.0934% | 0.0934% |
| toaster pastry (`toasterpastry`) | 0.0934% | 0.0934% | 0.0934% |
| toaster pastry (uncooked) (`toasterpastryfrozen`) | 0.0934% | 0.0934% | 0.0934% |
| toaster pastry with buttercream (`homemade_toasterpastry2`) | 0.0934% | 0.0934% | 0.0934% |
| tomato sauce (`sauce_red`) | 0.0934% | 0.0934% | 0.0934% |
| tortilla chips (`nachos`) | 0.0934% | 0.0934% | 0.0934% |
| uncooked corn dog (`corndogs_frozen`) | 0.0934% | 0.0934% | 0.0934% |
| uncooked hot dog (`hotdogs_frozen`) | 0.0934% | 0.0934% | 0.0934% |
| uncooked TV dinner (`frozen_dinner`) | 0.0934% | 0.0934% | 0.0934% |
| Valencian paella (`paella_valenciana`) | 0.0934% | 0.0934% | 0.0934% |
| vegetable broth (`broth`) | 0.0934% | 0.0934% | 0.0934% |
| vegetable salad (`veggy_salad`) | 0.0934% | 0.0934% | 0.0934% |
| vegetable sandwich (`sandwich_veggy`) | 0.0934% | 0.0934% | 0.0934% |
| vegetable sandwich with cheese (`sandwich_veggy_cheese`) | 0.0934% | 0.0934% | 0.0934% |
| vegetable soup (`soup_veggy`) | 0.0934% | 0.0934% | 0.0934% |
| vegetarian nachos (`nachosv`) | 0.0934% | 0.0934% | 0.0934% |
| vegetarian nachos with cheese (`nachosvc`) | 0.0934% | 0.0934% | 0.0934% |
| wastebread (`wastebread`) | 0.0934% | 0.0934% | 0.0934% |
| wild rice seeds (`seed_wild_rice`) | 0.0934% | 0.0934% | 0.0934% |
| wild root seeds (`seed_wildcarrot`) | 0.0934% | 0.0934% | 0.0934% |
| woods meat soup (`soup_woods`) | 0.0934% | 0.0934% | 0.0934% |
| bench vise (`bench_vise`) | 0.0621% | 0.0621% | 0.0621% |
| cast-iron dutch oven (`dutch_oven`) | 0.0621% | 0.0621% | 0.0621% |
| heavy sledge hammer (`hammer_sledge_heavy`) | 0.0621% | 0.0621% | 0.0621% |
| homewrecker (`homewrecker`) | 0.0621% | 0.0621% | 0.0621% |
| makeshift war scythe (`makeshift_scythe_war`) | 0.0621% | 0.0621% | 0.0621% |
| muffler (`muffler`) | 0.0621% | 0.0621% | 0.0621% |
| polishing stone (`stone_polishing`) | 0.0621% | 0.0621% | 0.0621% |
| pressure cooker (`pressure_cooker`) | 0.0621% | 0.0621% | 0.0621% |
| sheet metal (`sheet_metal`) | 0.0621% | 0.0621% | 0.0621% |
| short sledge hammer (`hammer_sledge_short`) | 0.0621% | 0.0621% | 0.0621% |
| sledge hammer (`hammer_sledge`) | 0.0621% | 0.0621% | 0.0621% |
| still (`still`) | 0.0621% | 0.0621% | 0.0621% |
| superalloy plating (`alloy_plate`) | 0.0621% | 0.0621% | 0.0621% |
| the Disorder (`pulverizer`) | 0.0621% | 0.0621% | 0.0621% |
| backpack (`backpack`) | 0.0162% | 0.0411% | 0.0411% |
| large tactical backpack (`backpack_tactical_large`) | 0.0162% | 0.0411% | 0.0411% |
| leather backpack (`backpack_leather`) | 0.0162% | 0.0411% | 0.0411% |
| net backpack (`net_backpack`) | 0.0162% | 0.0411% | 0.0411% |
| wicker backpack (`wicker_backpack`) | 0.0162% | 0.0411% | 0.0411% |
| 1 L lead ingot (`1l_lead`) | 0.0000% | 0.0362% | 0.0362% |
| 1 L silver ingot (`1l_silver`) | 0.0000% | 0.0362% | 0.0362% |
| 1 L tin ingot (`1l_tin`) | 0.0000% | 0.0362% | 0.0362% |
| 1L aluminum ingot (`1l_aluminum`) | 0.0000% | 0.0362% | 0.0362% |
| 1L brass ingot (`1l_brass`) | 0.0000% | 0.0362% | 0.0362% |
| 1L bronze ingot (`1l_bronze`) | 0.0000% | 0.0362% | 0.0362% |
| 1L copper ingot (`1l_copper`) | 0.0000% | 0.0362% | 0.0362% |
| 1L zinc ingot (`1l_zinc`) | 0.0000% | 0.0362% | 0.0362% |
| 2-by-sword (`sword_wood`) | 0.0000% | 0.0362% | 0.0362% |
| adobe mortar (`mortar_adobe`) | 0.0000% | 0.0362% | 0.0362% |
| alien resin chunk (`resin_chunk`) | 0.0000% | 0.0362% | 0.0362% |
| almonds (`almond`) | 0.0000% | 0.0362% | 0.0362% |
| aluminum foil (`aluminum_foil`) | 0.0000% | 0.0362% | 0.0362% |
| back-up beeper (`beeper`) | 0.0000% | 0.0362% | 0.0362% |
| barbed wire bat (`bwirebat`) | 0.0000% | 0.0362% | 0.0362% |
| baseball bat (`bat`) | 0.0000% | 0.0362% | 0.0362% |
| battered glass storybook (`glass_book`) | 0.0000% | 0.0362% | 0.0362% |
| bee stinger (`bee_sting`) | 0.0000% | 0.0362% | 0.0362% |
| bicycle alternator (`alternator_bicycle`) | 0.0000% | 0.0362% | 0.0362% |
| birchbark funnel (`birchbark_funnel`) | 0.0000% | 0.0362% | 0.0362% |
| bismuth (`bismuth`) | 0.0000% | 0.0362% | 0.0362% |
| bō (`bo`) | 0.0000% | 0.0362% | 0.0362% |
| boiled makeshift bandage (`bandages_makeshift_boiled`) | 0.0000% | 0.0362% | 0.0362% |
| bolt studded bat (`nutboltbat`) | 0.0000% | 0.0362% | 0.0362% |
| bone glue (`bone_glue`) | 0.0000% | 0.0362% | 0.0362% |
| breadboard (`breadboard`) | 0.0000% | 0.0362% | 0.0362% |
| bronze button (`button_bronze`) | 0.0000% | 0.0362% | 0.0362% |
| bronze nail (`bronze_nail`) | 0.0000% | 0.0362% | 0.0362% |
| bronze war dart (`javelin_fletched_bronze`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of copper tubing (`bundle_copper_pipe`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of cotton patches (`bundle_rag`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of cotton sheets (`bundle_cotton`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of felt (`bundle_wool`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of javelins (`bundle_javelin`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of leather (`bundle_leather`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of pipes (`bundle_pipe`) | 0.0000% | 0.0362% | 0.0362% |
| bundle of synthetic fabric (`bundle_nylon`) | 0.0000% | 0.0362% | 0.0362% |
| butter knife (`knife_butter`) | 0.0000% | 0.0362% | 0.0362% |
| butterfly net (`butterfly_net_makeshift`) | 0.0000% | 0.0362% | 0.0362% |
| butternut husks (`butternut_husk`) | 0.0000% | 0.0362% | 0.0362% |
| candle (`candle`) | 0.0000% | 0.0362% | 0.0362% |
| canvas patch (`canvas_patch`) | 0.0000% | 0.0362% | 0.0362% |
| carding paddles (`carding_paddles`) | 0.0000% | 0.0362% | 0.0362% |
| cast iron chunk (`chunk_cast_iron`) | 0.0000% | 0.0362% | 0.0362% |
| cast iron lump (`lump_cast_iron`) | 0.0000% | 0.0362% | 0.0362% |
| charcoal (`charcoal`) | 0.0000% | 0.0362% | 0.0362% |
| chunk of beeswax (`wax`) | 0.0000% | 0.0362% | 0.0362% |
| chunk of brass (`scrap_brass`) | 0.0000% | 0.0362% | 0.0362% |
| chunk of bronze (`scrap_bronze`) | 0.0000% | 0.0362% | 0.0362% |
| chunk of copper (`scrap_copper`) | 0.0000% | 0.0362% | 0.0362% |
| chunk of rubber (`chunk_rubber`) | 0.0000% | 0.0362% | 0.0362% |
| clay flower pot (`clay_pot_flower`) | 0.0000% | 0.0362% | 0.0362% |
| clay oil lamp (off) (`oil_lamp_clay`) | 0.0000% | 0.0362% | 0.0362% |
| copper (`copper`) | 0.0000% | 0.0362% | 0.0362% |
| copper rod (`copper_rod`) | 0.0000% | 0.0362% | 0.0362% |
| copper tubing (`cu_pipe`) | 0.0000% | 0.0362% | 0.0362% |
| cotton balls (`cotton_ball`) | 0.0000% | 0.0362% | 0.0362% |
| crude bronze nail (`crude_bronze_nail`) | 0.0000% | 0.0362% | 0.0362% |
| crude heating element (`crude_heating_element`) | 0.0000% | 0.0362% | 0.0362% |
| crude lamp oil (`crude_lamp_oil`) | 0.0000% | 0.0362% | 0.0362% |
| crude wooden arrow (`arrow_fire_hardened_fletched`) | 0.0000% | 0.0362% | 0.0362% |
| crude wooden bolt (`bolt_crude`) | 0.0000% | 0.0362% | 0.0362% |
| cudgel (`cudgel`) | 0.0000% | 0.0362% | 0.0362% |
| cured hide (`cured_hide`) | 0.0000% | 0.0362% | 0.0362% |
| cured pelt (`cured_pelt`) | 0.0000% | 0.0362% | 0.0362% |
| cutting board (`cutting_board`) | 0.0000% | 0.0362% | 0.0362% |
| denim patch (`denim_patch`) | 0.0000% | 0.0362% | 0.0362% |
| denim sheet (`sheet_denim`) | 0.0000% | 0.0362% | 0.0362% |
| distaff and spindle (`distaff_spindle`) | 0.0000% | 0.0362% | 0.0362% |
| dog tag (`dog_tag_dog`) | 0.0000% | 0.0362% | 0.0362% |
| down feather (`down_feather`) | 0.0000% | 0.0362% | 0.0362% |
| down-filled pillow (`down_pillow`) | 0.0000% | 0.0362% | 0.0362% |
| draw plate (`draw_plate`) | 0.0000% | 0.0362% | 0.0362% |
| dried seaweed (`dry_seaweed`) | 0.0000% | 0.0362% | 0.0362% |
| electric firestarter (`crude_firestarter`) | 0.0000% | 0.0362% | 0.0362% |
| electronic scrap (`e_scrap`) | 0.0000% | 0.0362% | 0.0362% |
| ember carrier (`tinderbox`) | 0.0000% | 0.0362% | 0.0362% |
| faux fur patch (`faux_fur`) | 0.0000% | 0.0362% | 0.0362% |
| feather (`feather`) | 0.0000% | 0.0362% | 0.0362% |
| fiber insulation batt (`rock_wool_bat`) | 0.0000% | 0.0362% | 0.0362% |
| field stone (`field_stone`) | 0.0000% | 0.0362% | 0.0362% |
| fishing hook (`fishing_hook_basic`) | 0.0000% | 0.0362% | 0.0362% |
| flaking rock (`rock_flaking`) | 0.0000% | 0.0362% | 0.0362% |
| flint (`flint`) | 0.0000% | 0.0362% | 0.0362% |
| funnel (`funnel`) | 0.0000% | 0.0362% | 0.0362% |
| fur patch (`fur`) | 0.0000% | 0.0362% | 0.0362% |
| fur rollmat (`fur_rollmat`) | 0.0000% | 0.0362% | 0.0362% |
| fuse (`fuse`) | 0.0000% | 0.0362% | 0.0362% |
| gambeson batting (`gambeson_batting`) | 0.0000% | 0.0362% | 0.0362% |
| garlic press (`garlic_press`) | 0.0000% | 0.0362% | 0.0362% |
| glass bladed macuahuitl (`glass_macuahuitl`) | 0.0000% | 0.0362% | 0.0362% |
| glass bladed tepoztopili (`aztec_spear_glass`) | 0.0000% | 0.0362% | 0.0362% |
| glass prism (`glass_prism`) | 0.0000% | 0.0362% | 0.0362% |
| glass shard (`glass_shard`) | 0.0000% | 0.0362% | 0.0362% |
| gold (`gold_small`) | 0.0000% | 0.0362% | 0.0362% |
| grass yarn (`grass_yarn`) | 0.0000% | 0.0362% | 0.0362% |
| gravel (`material_gravel`) | 0.0000% | 0.0362% | 0.0362% |
| great pipe mace (`mace_pipe_large`) | 0.0000% | 0.0362% | 0.0362% |
| hammock (`hammock`) | 0.0000% | 0.0362% | 0.0362% |
| hand controls (`hand_controls`) | 0.0000% | 0.0362% | 0.0362% |
| handful of leaves (`leaves`) | 0.0000% | 0.0362% | 0.0362% |
| hardened steel chain link (`ch_chain_link`) | 0.0000% | 0.0362% | 0.0362% |
| hardened steel wire (`ch_wire`) | 0.0000% | 0.0362% | 0.0362% |
| heating element (`element`) | 0.0000% | 0.0362% | 0.0362% |
| heavy wire rack (`heavy_wire_rack`) | 0.0000% | 0.0362% | 0.0362% |
| high steel chain link (`hc_chain_link`) | 0.0000% | 0.0362% | 0.0362% |
| high steel wire (`hc_wire`) | 0.0000% | 0.0362% | 0.0362% |
| hinge (`hinge`) | 0.0000% | 0.0362% | 0.0362% |
| hotcut (`hotcut`) | 0.0000% | 0.0362% | 0.0362% |
| improvised fishing hook (`fishing_hook_bone`) | 0.0000% | 0.0362% | 0.0362% |
| kerosene (`lamp_oil`) | 0.0000% | 0.0362% | 0.0362% |
| Kevlar scraps (`scrap_kevlar`) | 0.0000% | 0.0362% | 0.0362% |
| Kevlar sheet (`sheet_kevlar`) | 0.0000% | 0.0362% | 0.0362% |
| kiddie spoon (`plastic_spoon_kids`) | 0.0000% | 0.0362% | 0.0362% |
| large canine skull (`skull_canis`) | 0.0000% | 0.0362% | 0.0362% |
| large wooden club (`club_wooden_large`) | 0.0000% | 0.0362% | 0.0362% |
| lead (`lead`) | 0.0000% | 0.0362% | 0.0362% |
| leather funnel (`leather_funnel`) | 0.0000% | 0.0362% | 0.0362% |
| leather patch (`leather`) | 0.0000% | 0.0362% | 0.0362% |
| leather scraps (`scrap_leather`) | 0.0000% | 0.0362% | 0.0362% |
| leather sheet (`sheet_leather`) | 0.0000% | 0.0362% | 0.0362% |
| light bulb (`light_bulb`) | 0.0000% | 0.0362% | 0.0362% |
| lime mortar (`mortar_lime`) | 0.0000% | 0.0362% | 0.0362% |
| long cordage piece (`cordage_36`) | 0.0000% | 0.0362% | 0.0362% |
| long leather lace (`cordage_36_leather`) | 0.0000% | 0.0362% | 0.0362% |
| lump of clay (`clay_lump`) | 0.0000% | 0.0362% | 0.0362% |
| Lycra patch (`lycra_patch`) | 0.0000% | 0.0362% | 0.0362% |
| Lycra sheet (`sheet_lycra`) | 0.0000% | 0.0362% | 0.0362% |
| magnifying glass (`magnifying_glass`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift bandage (`bandages_makeshift`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift crutches (`makeshift_crutches`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift funnel (`makeshift_funnel`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift macuahuitl (`aztec_sword_scrap`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift pillow (`makeshift_pillow`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift sap (`makeshift_sap`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift tepoztopili (`aztec_spear_scrap`) | 0.0000% | 0.0362% | 0.0362% |
| makeshift walking cane (`makeshift_cane`) | 0.0000% | 0.0362% | 0.0362% |
| medical gauze (`medical_gauze`) | 0.0000% | 0.0362% | 0.0362% |
| medium steel chain link (`mc_chain_link`) | 0.0000% | 0.0362% | 0.0362% |
| medium steel wire (`mc_wire`) | 0.0000% | 0.0362% | 0.0362% |
| mild steel chain link (`lc_chain_link`) | 0.0000% | 0.0362% | 0.0362% |
| motorbike alternator (`alternator_motorbike`) | 0.0000% | 0.0362% | 0.0362% |
| nail bat (`nailbat`) | 0.0000% | 0.0362% | 0.0362% |
| nailboard (`nailboard`) | 0.0000% | 0.0362% | 0.0362% |
| neoprene patch (`neoprene`) | 0.0000% | 0.0362% | 0.0362% |
| Nomex patch (`nomex`) | 0.0000% | 0.0362% | 0.0362% |
| Nomex sheet (`sheet_nomex`) | 0.0000% | 0.0362% | 0.0362% |
| Nomex thread (`thread_nomex`) | 0.0000% | 0.0362% | 0.0362% |
| nord (`sword_nail`) | 0.0000% | 0.0362% | 0.0362% |
| notched plank (`notched_plank`) | 0.0000% | 0.0362% | 0.0362% |
| notched stick (`notched_stick`) | 0.0000% | 0.0362% | 0.0362% |
| oven control panel (`oven_controls`) | 0.0000% | 0.0362% | 0.0362% |
| paint brush (`paint_brush`) | 0.0000% | 0.0362% | 0.0362% |
| paint chipper (`chipper`) | 0.0000% | 0.0362% | 0.0362% |
| pair of bolt cutters (`boltcutters`) | 0.0000% | 0.0362% | 0.0362% |
| pair of tinted glass lenses (`glass_tinted`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork canvas sheet (`sheet_canvas_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork cotton sheet (`sheet_cotton_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork denim sheet (`sheet_denim_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork faux fur sheet (`sheet_faux_fur_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork fur sheet (`sheet_fur_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork Kevlar sheet (`sheet_kevlar_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork leather sheet (`sheet_leather_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork Lycra sheet (`sheet_lycra_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork neoprene sheet (`sheet_neoprene_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork Nomex sheet (`sheet_nomex_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| patchwork synthetic fabric sheet (`sheet_nylon_patchwork`) | 0.0000% | 0.0362% | 0.0362% |
| pearl (`pearl`) | 0.0000% | 0.0362% | 0.0362% |
| peasant flail (`2h_flail_wood`) | 0.0000% | 0.0362% | 0.0362% |
| pebble (`pebble`) | 0.0000% | 0.0362% | 0.0362% |
| piece of birchbark (`birchbark`) | 0.0000% | 0.0362% | 0.0362% |
| pig skull (`skull_pig`) | 0.0000% | 0.0362% | 0.0362% |
| pile of dried seaweed (`dry_seaweed_pile`) | 0.0000% | 0.0362% | 0.0362% |
| pillow (`pillow`) | 0.0000% | 0.0362% | 0.0362% |
| pilot light (`pilot_light`) | 0.0000% | 0.0362% | 0.0362% |
| pine bough (`pine_bough`) | 0.0000% | 0.0362% | 0.0362% |
| pinecone (`pinecone`) | 0.0000% | 0.0362% | 0.0362% |
| pipe staff (`staff_pipe`) | 0.0000% | 0.0362% | 0.0362% |
| plant fiber (`plant_fibre`) | 0.0000% | 0.0362% | 0.0362% |
| plastic chunk (`plastic_chunk`) | 0.0000% | 0.0362% | 0.0362% |
| plastic fork (`plastic_fork`) | 0.0000% | 0.0362% | 0.0362% |
| plastic gasket (`gasket_plastic`) | 0.0000% | 0.0362% | 0.0362% |
| plastic shank (`sharp_toothbrush`) | 0.0000% | 0.0362% | 0.0362% |
| plastic sheet (`plastic_sheet_small`) | 0.0000% | 0.0362% | 0.0362% |
| quarterstaff (`q_staff`) | 0.0000% | 0.0362% | 0.0362% |
| rabbit skull (`skull_rabbit`) | 0.0000% | 0.0362% | 0.0362% |
| radio (off) (`radio`) | 0.0000% | 0.0362% | 0.0362% |
| raw copper wire (`copper_wire`) | 0.0000% | 0.0362% | 0.0362% |
| razor blade (`razor_blade`) | 0.0000% | 0.0362% | 0.0362% |
| reading light (`reading_light`) | 0.0000% | 0.0362% | 0.0362% |
| rigid Kevlar plate (`rigid_kevlar_plate`) | 0.0000% | 0.0362% | 0.0362% |
| rodent skull (`skull_rodent`) | 0.0000% | 0.0362% | 0.0362% |
| rolling paper (`rolling_paper`) | 0.0000% | 0.0362% | 0.0362% |
| rubber band (`rubber_band`) | 0.0000% | 0.0362% | 0.0362% |
| rubber cement (`rubber_cement`) | 0.0000% | 0.0362% | 0.0362% |
| sand (`material_sand`) | 0.0000% | 0.0362% | 0.0362% |
| scrap aluminum (`scrap_aluminum`) | 0.0000% | 0.0362% | 0.0362% |
| scrap cast iron (`scrap_cast_iron`) | 0.0000% | 0.0362% | 0.0362% |
| scrap metal (`scrap`) | 0.0000% | 0.0362% | 0.0362% |
| scrap tin (`scrap_tin`) | 0.0000% | 0.0362% | 0.0362% |
| set of pipe fittings (`pipe_fittings`) | 0.0000% | 0.0362% | 0.0362% |
| shaving razor (`razor_shaving`) | 0.0000% | 0.0362% | 0.0362% |
| shelter kit (`shelter_kit`) | 0.0000% | 0.0362% | 0.0362% |
| shillelagh (`shillelagh`) | 0.0000% | 0.0362% | 0.0362% |
| short cordage piece (`cordage_6`) | 0.0000% | 0.0362% | 0.0362% |
| short leather lace (`cordage_6_leather`) | 0.0000% | 0.0362% | 0.0362% |
| short plank (`plank_short`) | 0.0000% | 0.0362% | 0.0362% |
| shredded rubber (`shredded_rubber`) | 0.0000% | 0.0362% | 0.0362% |
| silver (`silver_small`) | 0.0000% | 0.0362% | 0.0362% |
| simple wooden bolt (`bolt_simple_wood`) | 0.0000% | 0.0362% | 0.0362% |
| simple wooden small game arrow (`arrow_small_game_fletched`) | 0.0000% | 0.0362% | 0.0362% |
| simple wooden small game bolt (`bolt_simple_small_game`) | 0.0000% | 0.0362% | 0.0362% |
| sinew (`sinew`) | 0.0000% | 0.0362% | 0.0362% |
| sling (`sling`) | 0.0000% | 0.0362% | 0.0362% |
| slingshot (`slingshot`) | 0.0000% | 0.0362% | 0.0362% |
| small feline skull (`skull_feline_small`) | 0.0000% | 0.0362% | 0.0362% |
| small high-quality lens (`lens_small`) | 0.0000% | 0.0362% | 0.0362% |
| small lock and key (`lock`) | 0.0000% | 0.0362% | 0.0362% |
| small metal sheet (`sheet_metal_small`) | 0.0000% | 0.0362% | 0.0362% |
| small propane tank (`small_propane_tank`) | 0.0000% | 0.0362% | 0.0362% |
| small storage battery (`small_storage_battery`) | 0.0000% | 0.0362% | 0.0362% |
| small wood block (`wood_block`) | 0.0000% | 0.0362% | 0.0362% |
| spear shaft (`spear_shaft`) | 0.0000% | 0.0362% | 0.0362% |
| spinning wheel (`spinwheelitem`) | 0.0000% | 0.0362% | 0.0362% |
| spurge flowers (`spurge`) | 0.0000% | 0.0362% | 0.0362% |
| steel buckle (`buckle_steel`) | 0.0000% | 0.0362% | 0.0362% |
| steel button (`button_steel`) | 0.0000% | 0.0362% | 0.0362% |
| steel wire (`lc_wire`) | 0.0000% | 0.0362% | 0.0362% |
| stick (`stick`) | 0.0000% | 0.0362% | 0.0362% |
| stone bladed tepoztopili (`aztec_spear_stone`) | 0.0000% | 0.0362% | 0.0362% |
| stone lined macuahuitl (`aztec_sword_stone`) | 0.0000% | 0.0362% | 0.0362% |
| sunflower (`sunflower`) | 0.0000% | 0.0362% | 0.0362% |
| superglue (`super_glue`) | 0.0000% | 0.0362% | 0.0362% |
| survival match (`survival_match`) | 0.0000% | 0.0362% | 0.0362% |
| synthetic fabric patch (`nylon`) | 0.0000% | 0.0362% | 0.0362% |
| synthetic fabric scraps (`scrap_nylon`) | 0.0000% | 0.0362% | 0.0362% |
| tanned hide (`tanned_hide`) | 0.0000% | 0.0362% | 0.0362% |
| tanned pelt (`tanned_pelt`) | 0.0000% | 0.0362% | 0.0362% |
| tempered steel chain link (`qt_chain_link`) | 0.0000% | 0.0362% | 0.0362% |
| tempered steel wire (`qt_wire`) | 0.0000% | 0.0362% | 0.0362% |
| thick rubber chunk (`rubber_tire_chunk`) | 0.0000% | 0.0362% | 0.0362% |
| throwing stick (`throwing_stick`) | 0.0000% | 0.0362% | 0.0362% |
| tin powder (`tin`) | 0.0000% | 0.0362% | 0.0362% |
| tinder (`tinder`) | 0.0000% | 0.0362% | 0.0362% |
| tiny canine skull (`skull_canis_small`) | 0.0000% | 0.0362% | 0.0362% |
| toaster (`toaster`) | 0.0000% | 0.0362% | 0.0362% |
| torch (`torch`) | 0.0000% | 0.0362% | 0.0362% |
| towel hanger (`towel_hanger`) | 0.0000% | 0.0362% | 0.0362% |
| transponder circuit (`transponder`) | 0.0000% | 0.0362% | 0.0362% |
| walnuts (`walnut`) | 0.0000% | 0.0362% | 0.0362% |
| washboard (`washboard`) | 0.0000% | 0.0362% | 0.0362% |
| washing kit (`wash_kit`) | 0.0000% | 0.0362% | 0.0362% |
| wasp stinger (`wasp_sting`) | 0.0000% | 0.0362% | 0.0362% |
| water faucet (`water_faucet`) | 0.0000% | 0.0362% | 0.0362% |
| welding rod (`welding_rod_steel`) | 0.0000% | 0.0362% | 0.0362% |
| withered glass apple (`glass_apple`) | 0.0000% | 0.0362% | 0.0362% |
| withered plant (`withered`) | 0.0000% | 0.0362% | 0.0362% |
| wooden bead (`wooden_bead`) | 0.0000% | 0.0362% | 0.0362% |
| wooden block and tackle (`block_and_tackle_wood`) | 0.0000% | 0.0362% | 0.0362% |
| wooden club (`club_wooden`) | 0.0000% | 0.0362% | 0.0362% |
| wooden fishing spear (`fishspear`) | 0.0000% | 0.0362% | 0.0362% |
| wooden shed stick (`shed_stick`) | 0.0000% | 0.0362% | 0.0362% |
| wooden tonfa (`tonfa_wood`) | 0.0000% | 0.0362% | 0.0362% |
| yarn (`yarn`) | 0.0000% | 0.0362% | 0.0362% |
| zinc (`zinc_metal`) | 0.0000% | 0.0362% | 0.0362% |
| zweitimber (`sword_wood_large`) | 0.0000% | 0.0362% | 0.0362% |
| cattail rhizome (`cattail_rhizome`) | 0.0000% | 0.0000% | 100.00% |
| cattail stalk (`cattail_stalk`) | 0.0000% | 0.0000% | 100.00% |

## Contents: discovery_remains

2–4 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| plastic canteen (`canteen`) | 0.22% | 0.67% | 1–1 | source default | — |
| short rope (`rope_6`) | 0.22% | 0.67% | 1–1 | source default | — |
| short cordage rope (`rope_makeshift_6`) | 0.22% | 0.67% | 1–1 | source default | — |
| t-shirt (`tshirt`) | 0.22% | 0.67% | 1–1 | source default | — |
| hoodie (`hoodie`) | 0.22% | 0.67% | 1–1 | source default | — |
| sweater (`sweater`) | 0.22% | 0.67% | 1–1 | source default | — |
| jeans (`jeans`) | 0.22% | 0.67% | 1–1 | source default | — |
| pants (`pants`) | 0.22% | 0.67% | 1–1 | source default | — |
| socks (pair) (`socks`) | 0.22% | 0.67% | 1–1 | source default | — |
| boots (pair) (`boots`) | 0.22% | 0.67% | 1–1 | source default | — |
| sneakers (pair) (`sneakers`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of light gloves (`gloves_light`) | 0.22% | 0.67% | 1–1 | source default | — |
| baseball cap (`hat_ball`) | 0.22% | 0.67% | 1–1 | source default | — |
| knit hat (`hat_knit`) | 0.22% | 0.67% | 1–1 | source default | — |
| light jacket (`jacket_light`) | 0.22% | 0.67% | 1–1 | source default | — |
| backpack (`backpack`) | 0.0750% | 0.22% | 1–1 | source default | — |
| small backpack (`backpack_small`) | 0.0750% | 0.22% | 1–1 | source default | — |
| pair of 2-by-arm guards (`2byarm_guard`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of 2-by-shin guards (`2byshin_guard`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of scrap arm guards (`armguard_scrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of neoprene arm sleeves (`armguard_soft`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of carpet arm guards (`carpet_armguards`) | 0.22% | 0.67% | 1–1 | source default | — |
| arm splint (`arm_splint`) | 0.22% | 0.67% | 1–1 | source default | — |
| leg splint (`leg_splint`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeping bag (`sleeping_bag`) | 0.22% | 0.67% | 1–1 | source default | — |
| blanket (`blanket`) | 0.22% | 0.67% | 1–1 | source default | — |
| sheet (`sheet`) | 0.22% | 0.67% | 1–1 | source default | — |
| bookstrap (`bookstrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| loop of rope (`rope_loop`) | 0.22% | 0.67% | 1–1 | source default | — |
| swag bag (`swag_bag`) | 0.22% | 0.67% | 1–1 | source default | — |
| belly wrap (`bellywrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| chestwrap (`chestwrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur chestwrap (`chestwrap_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather chestwrap (`chestwrap_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| wool chestwrap (`chestwrap_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of hand wraps (`gloves_wraps`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fur hand wraps (`gloves_wraps_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of leather hand wraps (`gloves_wraps_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of wool hand wraps (`gloves_wraps_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| foot rags (pair) (`footrags`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur foot wraps (pair) (`footrags_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather foot wraps (pair) (`footrags_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| wool foot wraps (pair) (`footrags_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of sock mitts (`sockmitts`) | 0.22% | 0.67% | 1–1 | source default | — |
| bag socks (pair) (`socks_bag`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of bag gloves (`gloves_bag`) | 0.22% | 0.67% | 1–1 | source default | — |
| makeshift poncho (`poncho_makeshift`) | 0.22% | 0.67% | 1–1 | source default | — |
| bandana (`bandana`) | 0.22% | 0.67% | 1–1 | source default | — |
| headscarf (`headscarf`) | 0.22% | 0.67% | 1–1 | source default | — |
| blindfold (`blindfold`) | 0.22% | 0.67% | 1–1 | source default | — |
| loincloth (`loincloth`) | 0.22% | 0.67% | 1–1 | source default | — |
| simple patchwork scarf (`patchwork_scarf`) | 0.22% | 0.67% | 1–1 | source default | — |
| long patchwork scarf (`long_patchwork_scarf`) | 0.22% | 0.67% | 1–1 | source default | — |
| turban (`turban`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather belt (`leather_belt`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of paper arm guards (`armguard_paper`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of paper leg guards (`legguard_paper`) | 0.22% | 0.67% | 1–1 | source default | — |
| pot helmet (`pot_helmet`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of carpet bracers (`carpet_bracers`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of carpet greaves (`carpet_greaves`) | 0.22% | 0.67% | 1–1 | source default | — |
| rag tunic (`tunic_rag`) | 0.22% | 0.67% | 1–1 | source default | — |
| long vine (`vine_30`) | 0.22% | 0.67% | 1–1 | source default | — |
| long rope (`rope_30`) | 0.22% | 0.67% | 1–1 | source default | — |
| towel (`towel`) | 0.22% | 0.67% | 1–1 | source default | — |
| plastic shopping bag (`plastic_shopping_bag`) | 0.22% | 0.67% | 1–1 | source default | — |
| short vine (`vine_6`) | 0.22% | 0.67% | 1–1 | source default | — |
| Kevlar dog harness (`kevlar_harness`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather dog harness (`leather_harness_dog`) | 0.22% | 0.67% | 1–1 | source default | — |
| rubber dog rainsuit (`rubber_harness_dog`) | 0.22% | 0.67% | 1–1 | source default | — |
| pot great helm (`stockpot_helmet`) | 0.22% | 0.67% | 1–1 | source default | — |
| long cordage rope (`rope_makeshift_30`) | 0.22% | 0.67% | 1–1 | source default | — |
| grappling hook (`grapnel`) | 0.22% | 0.67% | 1–1 | source default | — |
| hairpin (`hairpin`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather-padded sleeveless shirt (`survivor_adhoc_leather_torso`) | 0.22% | 0.67% | 1–1 | source default | — |
| scrap suit (`armor_scrapsuit`) | 0.22% | 0.67% | 1–1 | source default | — |
| espadrilles (`espadrilles`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fingerless leather gloves (`gloves_fingerless`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fingerless wool gloves (`gloves_wool_fingerless`) | 0.22% | 0.67% | 1–1 | source default | — |
| grass blanket (`grass_blanket`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless underwear top (`long_undertop_sleeveless`) | 0.22% | 0.67% | 1–1 | source default | — |
| cargo shorts (`shorts_cargo`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless tunic (`sleeveless_tunic`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of tentacle sleeves (`stockings_tent_arms`) | 0.22% | 0.67% | 1–1 | source default | — |
| tentacle stockings (pair) (`stockings_tent_legs`) | 0.22% | 0.67% | 1–1 | source default | — |
| crop top (`tshirt_cropped`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather backpack (`backpack_leather`) | 0.0750% | 0.22% | 1–1 | source default | — |
| cord sandals (pair) (`bastsandals`) | 0.22% | 0.67% | 1–1 | source default | — |
| belly band (`bellyband`) | 0.22% | 0.67% | 1–1 | source default | — |
| bindle (`bindle`) | 0.22% | 0.67% | 1–1 | source default | — |
| bookplate (`bookplate`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather armor boots (pair) (`boots_larmor`) | 0.22% | 0.67% | 1–1 | source default | — |
| scrap boots (pair) (`boots_scrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| ankle sheath (`bootsheath`) | 0.22% | 0.67% | 1–1 | source default | — |
| birchbark ankle sheath (`bootsheath_birchbark`) | 0.22% | 0.67% | 1–1 | source default | — |
| box backpack (`boxpack`) | 0.22% | 0.67% | 1–1 | source default | — |
| wooden canteen (`canteen_wood`) | 0.22% | 0.67% | 1–1 | source default | — |
| carpet cuirass (`carpet_cuirass`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of carpet leg guards (`carpet_legguards`) | 0.22% | 0.67% | 1–1 | source default | — |
| cotton apron (`apron_cotton`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather apron (`apron_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of arm warmers (`arm_warmers`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of leather arm guards (`armguard_larmor`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather cloak (`cloak_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| cloth-padded shirt (`cloth_shirt_padded`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur duster (`duster_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fur gloves (`gloves_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of leather gloves (`gloves_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| scrap helmet (`helmet_scrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather pouch (`leather_pouch`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather sandals (pair) (`leathersandals`) | 0.22% | 0.67% | 1–1 | source default | — |
| long underwear bottom (`long_underpants`) | 0.22% | 0.67% | 1–1 | source default | — |
| makeshift knapsack (`makeshift_knapsack`) | 0.22% | 0.67% | 1–1 | source default | — |
| cargo pants (`pants_cargo`) | 0.22% | 0.67% | 1–1 | source default | — |
| birchbark shoes (pair) (`shoes_birchbark`) | 0.22% | 0.67% | 1–1 | source default | — |
| straw hat (`straw_hat`) | 0.22% | 0.67% | 1–1 | source default | — |
| straw sandals (pair) (`straw_sandals`) | 0.22% | 0.67% | 1–1 | source default | — |
| straw basket (`straw_basket`) | 0.22% | 0.67% | 1–1 | source default | — |
| grass sheet (`grass_sheet`) | 0.22% | 0.67% | 1–1 | source default | — |
| grass cloak (`grass_cloak`) | 0.22% | 0.67% | 1–1 | source default | — |
| abaya (`abaya`) | 0.22% | 0.67% | 1–1 | source default | — |
| canvas aketon vest (`aketon_canvas_vest`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of sheet metal arm guards (`armguard_metal`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of mild steel sheet metal bracers (`armguard_metal_sheets_bracer`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of mild steel sheet metal elbow guards (`armguard_metal_sheets_elbows`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of mild steel sheet metal pauldrons (`armguard_metal_sheets_shoulders`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather body armor (`armor_larmor`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather armor cuirass (`armor_larmor_chest`) | 0.22% | 0.67% | 1–1 | source default | — |
| large tactical backpack (`backpack_tactical_large`) | 0.0750% | 0.22% | 1–1 | source default | — |
| balaclava (`balclava`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur belly wrap (`bellywrap_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather belly wrap (`bellywrap_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| wool beret (`beret_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| boxer briefs (`boxer_briefs`) | 0.22% | 0.67% | 1–1 | source default | — |
| boxer shorts (`boxer_shorts`) | 0.22% | 0.67% | 1–1 | source default | — |
| briefs (`briefs`) | 0.22% | 0.67% | 1–1 | source default | — |
| cloth-padded pants (`canvas_pants_padded`) | 0.22% | 0.67% | 1–1 | source default | — |
| sheet metal chest guard (`chestguard_metal_sheets`) | 0.22% | 0.67% | 1–1 | source default | — |
| light sheet metal chest guard (`chestguard_metal_sheets_light`) | 0.22% | 0.67% | 1–1 | source default | — |
| cloak (`cloak`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur cloak (`cloak_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| wool cloak (`cloak_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| wooden clogs (pair) (`clogs`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur coat (`coat_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| rain coat (`coat_rain`) | 0.22% | 0.67% | 1–1 | source default | — |
| cowboy hat (`cowboy_hat`) | 0.22% | 0.67% | 1–1 | source default | — |
| knit cowl (`cowl_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| scrap cuirass (`cuirass_scrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| deployment bag (`deployment_bag`) | 0.22% | 0.67% | 1–1 | source default | — |
| duster (`duster`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless canvas gambeson (`gambeson_canvas_vest`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless nylon gambeson (`gambeson_nylon_vest`) | 0.22% | 0.67% | 1–1 | source default | — |
| canvas heavy arming pants (`gambeson_pants_canvas`) | 0.22% | 0.67% | 1–1 | source default | — |
| nylon heavy arming pants (`gambeson_pants_nylon`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of leather armor gauntlets (`gauntlets_larmor`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of armored fingerless leather gloves (`gloves_fingerless_mod`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of studded gloves (`gloves_studded`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of wool gloves (`gloves_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| grass keffiyeh (`grass_keffiyeh`) | 0.22% | 0.67% | 1–1 | source default | — |
| boonie hat (`hat_boonie`) | 0.22% | 0.67% | 1–1 | source default | — |
| cotton hat (`hat_cotton`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur hat (`hat_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| hunting cap (`hat_hunting`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather armor helmet (`helmet_larmor`) | 0.22% | 0.67% | 1–1 | source default | — |
| wolf skull helmet (`helmet_skull`) | 0.22% | 0.67% | 1–1 | source default | — |
| hijab (`hijab`) | 0.22% | 0.67% | 1–1 | source default | — |
| rain hood (`hood_rain`) | 0.22% | 0.67% | 1–1 | source default | — |
| cropped hoodie (`hoodie_cropped`) | 0.22% | 0.67% | 1–1 | source default | — |
| bathrobe (`house_coat`) | 0.22% | 0.67% | 1–1 | source default | — |
| windbreaker (`jacket_windbreaker`) | 0.22% | 0.67% | 1–1 | source default | — |
| jerrypack (`jerrypack`) | 0.22% | 0.67% | 1–1 | source default | — |
| keffiyeh (`keffiyeh`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of nail knuckles (`knuckle_nail`) | 0.22% | 0.67% | 1–1 | source default | — |
| drop leg bag (`leg_bag`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of leg warmers (`leg_warmers`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fur leggings (`leg_warmers_f`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of leather leg guards (`legguard_larmor`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of sheet metal leg guards (`legguard_metal_sheets`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of sheet metal greaves (`legguard_metal_sheets_greaves`) | 0.22% | 0.67% | 1–1 | source default | — |
| sheet metal skirt (`legguard_metal_sheets_hip`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of sheet metal knee guards (`legguard_metal_sheets_knees`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of scrap leg guards (`legguard_scrap`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur loincloth (`loincloth_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather loincloth (`loincloth_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| wool loincloth (`loincloth_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| longarm bag (`long_duffelbag`) | 0.22% | 0.67% | 1–1 | source default | — |
| long underwear top (`long_undertop`) | 0.22% | 0.67% | 1–1 | source default | — |
| long-sleeved shirt (`longshirt`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of sheet metal gauntlets (`mitten_gaunt_metal_sheets`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of mittens (`mittens`) | 0.22% | 0.67% | 1–1 | source default | — |
| moccasins (pair) (`mocassins`) | 0.22% | 0.67% | 1–1 | source default | — |
| niqab (`niqab`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur pants (`pants_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| wool poncho (`poncho`) | 0.22% | 0.67% | 1–1 | source default | — |
| sheet metal sabatons (pair) (`sabaton_metal_sheets`) | 0.22% | 0.67% | 1–1 | source default | — |
| shorts (`shorts`) | 0.22% | 0.67% | 1–1 | source default | — |
| grass skirt (`skirt_grass`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless duster (`sleeveless_duster`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless fur duster (`sleeveless_duster_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless trenchcoat (`sleeveless_trenchcoat`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless fur trenchcoat (`sleeveless_trenchcoat_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| ankle socks (pair) (`socks_ankle`) | 0.22% | 0.67% | 1–1 | source default | — |
| wool socks (pair) (`socks_wool`) | 0.22% | 0.67% | 1–1 | source default | — |
| stockings (pair) (`stockings`) | 0.22% | 0.67% | 1–1 | source default | — |
| sundress (`sundress`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather-padded shirt (`survivor_adhoc_leather_shirt`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather-padded sleeves (`survivor_adhoc_leather_sleeves`) | 0.22% | 0.67% | 1–1 | source default | — |
| suspenders (`suspenders_cloth`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather suspenders (`suspenders_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| sustainment pouch (`sustainment_pouch`) | 0.22% | 0.67% | 1–1 | source default | — |
| sweatshirt (`sweatshirt`) | 0.22% | 0.67% | 1–1 | source default | — |
| tank top (`tank_top`) | 0.22% | 0.67% | 1–1 | source default | — |
| canvas throat guard (`throat_guard_canvas`) | 0.22% | 0.67% | 1–1 | source default | — |
| nylon throat guard (`throat_guard_nylon`) | 0.22% | 0.67% | 1–1 | source default | — |
| travelpack (`travelpack`) | 0.22% | 0.67% | 1–1 | source default | — |
| trenchcoat (`trenchcoat`) | 0.22% | 0.67% | 1–1 | source default | — |
| fur trenchcoat (`trenchcoat_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| tunic (`tunic`) | 0.22% | 0.67% | 1–1 | source default | — |
| undershirt (`undershirt`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of leather vambraces (`vambrace_larmor`) | 0.22% | 0.67% | 1–1 | source default | — |
| utility vest (`vest`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather vest (`vest_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| large waterskin (`waterskin3`) | 0.22% | 0.67% | 1–1 | source default | — |
| wicker backpack (`wicker_backpack`) | 0.0750% | 0.22% | 1–1 | source default | — |
| pair of wool sock mitts (`wool_sockmitts`) | 0.22% | 0.67% | 1–1 | source default | — |
| thick wool onesie (`wool_suit`) | 0.22% | 0.67% | 1–1 | source default | — |
| scrap suit (`armor_xs_scrapsuit`) | 0.22% | 0.67% | 1–1 | source default | — |
| large belt loop (`belt_loop_large`) | 0.22% | 0.67% | 1–1 | source default | — |
| medium belt loop (`belt_loop_medium`) | 0.22% | 0.67% | 1–1 | source default | — |
| turnout boots (pair) (`boots_bunker`) | 0.22% | 0.67% | 1–1 | source default | — |
| chitinous boots (pair) (`boots_chitin`) | 0.22% | 0.67% | 1–1 | source default | — |
| combat boots (pair) (`boots_combat`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of light survivor boots (`boots_lsurvivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| cloth-padded sleeveless shirt (`cloth_vest_padded`) | 0.22% | 0.67% | 1–1 | source default | — |
| faux fur coat (`coat_faux_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of copper earrings (`copper_ear`) | 0.22% | 0.67% | 1–1 | source default | — |
| faux fur duster (`duster_faux_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather duster (`duster_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| survivor duster (`duster_survivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather eyepatch (`eyepatch_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| garter belt (`garter_belt`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of safety glasses (`glasses_safety`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of black gloves (`gloves_black`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of claw gloves (`gloves_claws`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of denim gloves (`gloves_denim`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fingerless denim gloves (`gloves_denim_fingerless`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of EOD overhand protectors (`gloves_eod`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of survivor firegloves (`gloves_fsurvivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of golfing gloves (`gloves_golf`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of glove liners (`gloves_liner`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of light survivor gloves (`gloves_lsurvivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fingerless light survivor gloves (`gloves_lsurvivor_fingerless`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of armored gauntlets (`gloves_plate`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of rubber gloves (`gloves_rubber`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of survivor gloves (`gloves_survivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of fingerless survivor gloves (`gloves_survivor_fingerless`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of white gloves (`gloves_white`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of work gloves (`gloves_work`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of welding goggles (`goggles_welding`) | 0.22% | 0.67% | 1–1 | source default | — |
| toque (`hat_chef`) | 0.22% | 0.67% | 1–1 | source default | — |
| faux fur hat (`hat_faux_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| golf cap (`hat_golf`) | 0.22% | 0.67% | 1–1 | source default | — |
| hard hat (`hat_hard`) | 0.22% | 0.67% | 1–1 | source default | — |
| summer hard hat (`hat_hard_hooded`) | 0.22% | 0.67% | 1–1 | source default | — |
| eight point cap (`hat_navy`) | 0.22% | 0.67% | 1–1 | source default | — |
| noise canceling headgear (`hat_noise_cancelling`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of snow goggles (`iggaak`) | 0.22% | 0.67% | 1–1 | source default | — |
| jean jacket (`jacket_jean`) | 0.22% | 0.67% | 1–1 | source default | — |
| armored jean jacket (`jacket_jean_mod`) | 0.22% | 0.67% | 1–1 | source default | — |
| armored motorcycle jacket (`jacket_leather_mod`) | 0.22% | 0.67% | 1–1 | source default | — |
| armored jeans (`jeans_mod`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of knee pads (`knee_pads`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of scrap knuckles (`knuckle_steel`) | 0.22% | 0.67% | 1–1 | source default | — |
| motorcycle jacket (`leather_police_jacket`) | 0.22% | 0.67% | 1–1 | source default | — |
| rioter mask (`mask_rioter`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of Nomex sock mitts (`nomex_sockmitts`) | 0.22% | 0.67% | 1–1 | source default | — |
| flame-resistant socks (pair) (`nomex_socks`) | 0.22% | 0.67% | 1–1 | source default | — |
| scrap ESAPI plate (`scrap_esapi_plate`) | 0.22% | 0.67% | 1–1 | source default | — |
| scrap ESBI plate (`scrap_esbi_plate`) | 0.22% | 0.67% | 1–1 | source default | — |
| grass shirt (`shirt_straw`) | 0.22% | 0.67% | 1–1 | source default | — |
| jorts (`shorts_denim`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless faux fur duster (`sleeveless_duster_faux_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless leather duster (`sleeveless_duster_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless survivor duster (`sleeveless_duster_survivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless faux fur trenchcoat (`sleeveless_trenchcoat_faux_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless leather trenchcoat (`sleeveless_trenchcoat_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| sleeveless survivor trenchcoat (`sleeveless_trenchcoat_survivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| sun shield (`sun_shield`) | 0.22% | 0.67% | 1–1 | source default | — |
| tireplate (`tireplate`) | 0.22% | 0.67% | 1–1 | source default | — |
| faux fur trenchcoat (`trenchcoat_faux_fur`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather trenchcoat (`trenchcoat_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| survivor trenchcoat (`trenchcoat_survivor`) | 0.22% | 0.67% | 1–1 | source default | — |
| jean vest (`vest_jean`) | 0.22% | 0.67% | 1–1 | source default | — |
| armored jean vest (`vest_jean_mod`) | 0.22% | 0.67% | 1–1 | source default | — |
| armored leather vest (`vest_leather_mod`) | 0.22% | 0.67% | 1–1 | source default | — |
| briefcase (`briefcase`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of glass goggles (`glass_goggles`) | 0.22% | 0.67% | 1–1 | source default | — |
| pair of medical gloves (`gloves_medical`) | 0.22% | 0.67% | 1–1 | source default | — |
| ankle wallet pouch (`ankle_wallet_pouch`) | 0.22% | 0.67% | 1–1 | source default | — |
| plastic apron (`apron_plastic`) | 0.22% | 0.67% | 1–1 | source default | — |
| bottle gourd (`bottle_gourd`) | 0.22% | 0.67% | 1–1 | source default | — |
| duffel bag (`duffelbag`) | 0.22% | 0.67% | 1–1 | source default | — |
| pack frame (`frame_pack`) | 0.22% | 0.67% | 1–1 | source default | — |
| ripped jeans (`jeans_ripped`) | 0.22% | 0.67% | 1–1 | source default | — |
| makeshift sling (`makeshift_sling`) | 0.22% | 0.67% | 1–1 | source default | — |
| net backpack (`net_backpack`) | 0.0750% | 0.22% | 1–1 | source default | — |
| leather pants (`pants_leather`) | 0.22% | 0.67% | 1–1 | source default | — |
| pouch (`ragpouch`) | 0.22% | 0.67% | 1–1 | source default | — |
| leather-padded pants (`survivor_adhoc_leather_pants`) | 0.22% | 0.67% | 1–1 | source default | — |
| work pants (`technician_pants_gray`) | 0.22% | 0.67% | 1–1 | source default | — |
| trapper pack (`trapper_pack`) | 0.22% | 0.67% | 1–1 | source default | — |
| long waist apron (`waist_apron_long`) | 0.22% | 0.67% | 1–1 | source default | — |
| short waist apron (`waist_apron_short`) | 0.22% | 0.67% | 1–1 | source default | — |
| small waterskin (`waterskin`) | 0.22% | 0.67% | 1–1 | source default | — |
| waterskin (`waterskin2`) | 0.22% | 0.67% | 1–1 | source default | — |
| plastic bottle (`bottle_plastic`) | 0.11% | 0.67% | 1–1 | source default | — |
| steel bottle (`bottle_metal`) | 0.11% | 0.34% | 1–1 | source default | — |
| gallon jug (`jug_plastic`) | 0.11% | 0.34% | 1–1 | source default | — |
| small tin can (`can_food`) | 0.11% | 0.34% | 1–1 | source default | — |
| medium tin can (`can_medium`) | 0.11% | 0.34% | 1–1 | source default | — |
| 0.5 L glass jar (`jar_glass_sealed`) | 0.11% | 0.34% | 1–1 | source default | — |
| pot (`pot`) | 0.11% | 0.34% | 1–1 | source default | — |
| bucket (`bucket`) | 0.11% | 0.34% | 1–1 | source default | — |
| pocket knife (`pockknife`) | 0.11% | 0.34% | 1–1 | source default | — |
| small kitchen knife (`knife_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift knife (`makeshift_knife`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone knife (`primitive_knife`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone chopper (`stone_chopper`) | 0.11% | 0.34% | 1–1 | source default | — |
| hammer (`hammer`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift hammer (`makeshift_hammer`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone hammer (`primitive_hammer`) | 0.11% | 0.34% | 1–1 | source default | — |
| screwdriver (`screwdriver`) | 0.11% | 0.34% | 1–1 | source default | — |
| wood saw (`saw`) | 0.11% | 0.34% | 1–1 | source default | — |
| hatchet (`hatchet`) | 0.11% | 0.34% | 1–1 | source default | — |
| crowbar (`crowbar`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift crowbar (`makeshift_crowbar`) | 0.11% | 0.34% | 1–1 | source default | — |
| bow fire drill (`fire_drill`) | 0.11% | 0.34% | 1–1 | source default | — |
| sewing kit (`sewing_kit`) | 0.11% | 0.34% | 1–1 | source default | — |
| bone needle (`needle_bone`) | 0.11% | 0.34% | 1–1 | source default | — |
| rock (`rock`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| sharp rock (`sharp_rock`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift brazier (`makeshift_brazier`) | 0.11% | 0.34% | 1–1 | source default | — |
| hobo stove (`hobo_stove`) | 0.11% | 0.34% | 1–1 | source default | — |
| splintered wood (`splinter`) | 0.11% | 0.34% | 1–1 | source default | — |
| spike (`spike`) | 0.11% | 0.34% | 1–1 | source default | — |
| pipe (`pipe`) | 0.11% | 0.34% | 1–1 | source default | — |
| chunk of steel (`steel_chunk`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| chunk of mild steel (`lc_steel_chunk`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cotton patch (`cotton_patchwork`) | 0.11% | 0.34% | 1–1 | source default | — |
| brick (`brick`) | 0.11% | 0.34% | 1–1 | source default | — |
| pointy stick (`pointy_stick`) | 0.11% | 0.34% | 1–1 | source default | — |
| fire-hardened wooden spear (`spear_wood`) | 0.11% | 0.34% | 1–1 | source default | — |
| reinforced garbage bag (`bag_garbage_reinforced`) | 0.11% | 0.34% | 1–1 | source default | — |
| small cardboard box (`box_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| small wooden box (`box_small_wood`) | 0.11% | 0.34% | 1–1 | source default | — |
| small metal box (`box_small_metal`) | 0.11% | 0.34% | 1–1 | source default | — |
| fiber mat (`fiber_mat`) | 0.11% | 0.34% | 1–1 | source default | — |
| wooden billet (`billet_wood`) | 0.11% | 0.34% | 1–1 | source default | — |
| bone billet (`billet_bone`) | 0.11% | 0.34% | 1–1 | source default | — |
| primitive rock drill (`drill_rock_primitive`) | 0.11% | 0.34% | 1–1 | source default | — |
| improvised lockpick (`crude_picklock`) | 0.11% | 0.34% | 1–1 | source default | — |
| rudimentary lockpick (`emergency_lockpick`) | 0.11% | 0.34% | 1–1 | source default | — |
| mop (`mop`) | 0.11% | 0.34% | 1–1 | source default | — |
| paper wrapper (`wrapper`) | 0.11% | 0.34% | 1–1 | source default | — |
| foil wrapper (`wrapper_foil`) | 0.11% | 0.34% | 1–1 | source default | — |
| simple mace (`mace_simple`) | 0.11% | 0.34% | 1–1 | source default | — |
| set of clothes (`outfit_storage`) | 0.11% | 0.34% | 1–1 | source default | — |
| canvas sack (`bag_canvas`) | 0.11% | 0.34% | 1–1 | source default | — |
| garbage bag (`bag_garbage`) | 0.11% | 0.34% | 1–1 | source default | — |
| hacksaw (`hacksaw`) | 0.11% | 0.34% | 1–1 | source default | — |
| bone skewer (`skewer_bone`) | 0.11% | 0.34% | 1–1 | source default | — |
| nail punch (`punch_nail`) | 0.11% | 0.34% | 1–1 | source default | — |
| butchering kit (`butchering_kit`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift sieve (`sieve_steel_makeshift`) | 0.11% | 0.34% | 1–1 | source default | — |
| sandleather (`leather_filing`) | 0.11% | 0.34% | 1–1 | source default | — |
| rock in a sock (`rock_sock`) | 0.11% | 0.34% | 1–1 | source default | — |
| pipe mace (`mace_pipe`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift machete (`makeshift_machete`) | 0.11% | 0.34% | 1–1 | source default | — |
| wooden needle (`needle_wood`) | 0.11% | 0.34% | 1–1 | source default | — |
| pair of knitting needles (`knitting_needles`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic tupperware (`bowl_plastic`) | 0.11% | 0.34% | 1–1 | source default | — |
| foil cup (`cup_foil`) | 0.11% | 0.34% | 1–1 | source default | — |
| wooden bowl (`bowl_wood`) | 0.11% | 0.34% | 1–1 | source default | — |
| large wooden bowl (`bowl_wood_large`) | 0.11% | 0.34% | 1–1 | source default | — |
| skull bowl (`bowl_skull`) | 0.11% | 0.34% | 1–1 | source default | — |
| clay cup (`clay_cup`) | 0.11% | 0.34% | 1–1 | source default | — |
| bone punch (`punch_bone`) | 0.11% | 0.34% | 1–1 | source default | — |
| bone sewing awl (`awl_bone`) | 0.11% | 0.34% | 1–1 | source default | — |
| steel sewing awl (`awl_steel`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift copper pot (`pot_makeshift_copper`) | 0.11% | 0.34% | 1–1 | source default | — |
| digging stick (`digging_stick`) | 0.11% | 0.34% | 1–1 | source default | — |
| trench mace (`mace_trench`) | 0.11% | 0.34% | 1–1 | source default | — |
| sharpened pipe (`sharpened_pipe`) | 0.11% | 0.34% | 1–1 | source default | — |
| copper knife (`copper_knife`) | 0.11% | 0.34% | 1–1 | source default | — |
| bone shiv (`bone_knife`) | 0.11% | 0.34% | 1–1 | source default | — |
| fire brick (`fire_brick`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift tree spile (`makeshift_tree_spile`) | 0.11% | 0.34% | 1–1 | source default | — |
| copper pot (`pot_copper`) | 0.11% | 0.34% | 1–1 | source default | — |
| aluminum pot (`pot_aluminum`) | 0.11% | 0.34% | 1–1 | source default | — |
| leather bellow (`leather_bellow`) | 0.11% | 0.34% | 1–1 | source default | — |
| clay pot (`clay_pot`) | 0.11% | 0.34% | 1–1 | source default | — |
| clay teapot (`clay_teapot`) | 0.11% | 0.34% | 1–1 | source default | — |
| clay bowl (`bowl_clay`) | 0.11% | 0.34% | 1–1 | source default | — |
| clay canister (`clay_canister`) | 0.11% | 0.34% | 1–1 | source default | — |
| huge kitchen knife (`knife_huge`) | 0.11% | 0.34% | 1–1 | source default | — |
| large kitchen knife (`knife_large`) | 0.11% | 0.34% | 1–1 | source default | — |
| cleaver (`knife_cleaver`) | 0.11% | 0.34% | 1–1 | source default | — |
| blade (`blade`) | 0.11% | 0.34% | 1–1 | source default | — |
| metal fileset (`metal_file`) | 0.11% | 0.34% | 1–1 | source default | — |
| pair of flatjaw tongs (`metalworking_tongs`) | 0.11% | 0.34% | 1–1 | source default | — |
| grip hook (`grip_hook`) | 0.11% | 0.34% | 1–1 | source default | — |
| tin plate (`tin_plate`) | 0.11% | 0.34% | 1–1 | source default | — |
| lump of steel (`steel_lump`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| canvas bag (`bag_canvas_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| copper hatchet (`copper_ax`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone axe head (`hand_axe`) | 0.11% | 0.34% | 1–1 | source default | — |
| large sealed stomach (`large_stomach_sealed`) | 0.11% | 0.34% | 1–1 | source default | — |
| metal axe head (`makeshift_axe`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone axe (`primitive_axe`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone sickle (`sickle_stone`) | 0.11% | 0.34% | 1–1 | source default | — |
| wicker sieve (`sieve_primitive`) | 0.11% | 0.34% | 1–1 | source default | — |
| sealed stomach (`stomach_sealed`) | 0.11% | 0.34% | 1–1 | source default | — |
| scrap sword (`sword_crude`) | 0.11% | 0.34% | 1–1 | source default | — |
| duct tape wallet (`wallet_duct_tape`) | 0.11% | 0.34% | 1–1 | source default | — |
| leather wallet (`wallet_leather`) | 0.11% | 0.34% | 1–1 | source default | — |
| IV bag (`bag_iv`) | 0.11% | 0.34% | 1–1 | source default | — |
| small plastic bag (`bag_plastic_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| zipper bag (`bag_zipper`) | 0.11% | 0.34% | 1–1 | source default | — |
| bike basket (`bike_basket`) | 0.11% | 0.34% | 1–1 | source default | — |
| scythe blade (`blade_scythe`) | 0.11% | 0.34% | 1–1 | source default | — |
| foldable plastic bottle (`bottle_folding`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic painkiller bottle (`bottle_plastic_pill_painkiller`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic prescription bottle (`bottle_plastic_pill_prescription`) | 0.11% | 0.34% | 1–1 | source default | — |
| small plastic seasoning bottle (`bottle_plastic_seasoning_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| cigarette pack (`box_cigarette`) | 0.11% | 0.34% | 1–1 | source default | — |
| large rifle conversion kit (`box_retool_large`) | 0.11% | 0.34% | 1–1 | source default | — |
| SBR conversion kit (`box_retool_sbr`) | 0.11% | 0.34% | 1–1 | source default | — |
| micro-carbine conversion kit (`box_retool_sbr_micro`) | 0.11% | 0.34% | 1–1 | source default | — |
| wooden bucket (`bucket_wood`) | 0.11% | 0.34% | 1–1 | source default | — |
| butterfly sword (`butterfly_swords`) | 0.11% | 0.34% | 1–1 | source default | — |
| milk carton (`carton_milk`) | 0.11% | 0.34% | 1–1 | source default | — |
| metalworking chisel (`chisel`) | 0.11% | 0.34% | 1–1 | source default | — |
| clamp (`clamp`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic fish trap (`fish_trap`) | 0.11% | 0.34% | 1–1 | source default | — |
| basket fish trap (`fish_trap_basket`) | 0.11% | 0.34% | 1–1 | source default | — |
| handheld glass cutter (`glass_cutter`) | 0.11% | 0.34% | 1–1 | source default | — |
| glass plate (`glass_plate`) | 0.11% | 0.34% | 1–1 | source default | — |
| small glass tube (`glass_tube_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| bronze hammer (`hammer_bronze`) | 0.11% | 0.34% | 1–1 | source default | — |
| hand drill (`hand_drill`) | 0.11% | 0.34% | 1–1 | source default | — |
| hand pump (`hand_pump`) | 0.11% | 0.34% | 1–1 | source default | — |
| machete (`machete`) | 0.11% | 0.34% | 1–1 | source default | — |
| MRE bag (`mre_bag`) | 0.11% | 0.34% | 1–1 | source default | — |
| MRE dessert bag (`mre_bag_dessert`) | 0.11% | 0.34% | 1–1 | source default | — |
| MRE jam bag (`mre_bag_jam`) | 0.11% | 0.34% | 1–1 | source default | — |
| MRE spread bag (`mre_bag_spread`) | 0.11% | 0.34% | 1–1 | source default | — |
| MRE package (`mre_package`) | 0.11% | 0.34% | 1–1 | source default | — |
| curved needle (`needle_curved`) | 0.11% | 0.34% | 1–1 | source default | — |
| tobacco pipe (`pipe_tobacco`) | 0.11% | 0.34% | 1–1 | source default | — |
| vacuum-packed bag (`plastic_bag_vac`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic plate (`plastic_plate`) | 0.11% | 0.34% | 1–1 | source default | — |
| locking pliers (`pliers_locking`) | 0.11% | 0.34% | 1–1 | source default | — |
| bronze wood saw (`saw_bronze`) | 0.11% | 0.34% | 1–1 | source default | — |
| screwdriver set (`screwdriver_set`) | 0.11% | 0.34% | 1–1 | source default | — |
| small biogas tank (`small_biogas_tank`) | 0.11% | 0.34% | 1–1 | source default | — |
| storage line (`storage_line`) | 0.11% | 0.34% | 1–1 | source default | — |
| adjustable wrench (`wrench`) | 0.11% | 0.34% | 1–1 | source default | — |
| small adjustable wrench (`wrench_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| acetylene cooker (`acetylene_cooker`) | 0.11% | 0.34% | 1–1 | source default | — |
| superalloy sheet (`alloy_sheet`) | 0.11% | 0.34% | 1–1 | source default | — |
| aluminum frying pan (`aluminum_pan`) | 0.11% | 0.34% | 1–1 | source default | — |
| tiger claws (`bagh_nakha`) | 0.11% | 0.34% | 1–1 | source default | — |
| balloon (`balloon`) | 0.11% | 0.34% | 1–1 | source default | — |
| aluminum bat (`bat_metal`) | 0.11% | 0.34% | 1–1 | source default | — |
| tongue-and-groove pliers (`big_pliers`) | 0.11% | 0.34% | 1–1 | source default | — |
| glass seasoning bottle (`bottle_glass_seasoning`) | 0.11% | 0.34% | 1–1 | source default | — |
| tiny plastic bottle (`bottle_plastic_tiny`) | 0.11% | 0.34% | 1–1 | source default | — |
| boulder anvil (`boulder_anvil`) | 0.11% | 0.34% | 1–1 | source default | — |
| bow saw (`bow_saw`) | 0.11% | 0.34% | 1–1 | source default | — |
| coconut bowl (`bowl_coconut`) | 0.11% | 0.34% | 1–1 | source default | — |
| pewter bowl (`bowl_pewter`) | 0.11% | 0.34% | 1–1 | source default | — |
| boxcutter knife (`boxcutter`) | 0.11% | 0.34% | 1–1 | source default | — |
| aluminum can (`can_drink`) | 0.11% | 0.34% | 1–1 | source default | — |
| large tin can (`can_food_big`) | 0.11% | 0.34% | 1–1 | source default | — |
| empty canister (`canister_empty`) | 0.11% | 0.34% | 1–1 | source default | — |
| casserole pot (`casserole`) | 0.11% | 0.34% | 1–1 | source default | — |
| ceramic bowl (`ceramic_bowl`) | 0.11% | 0.34% | 1–1 | source default | — |
| ceramic cup (`ceramic_cup`) | 0.11% | 0.34% | 1–1 | source default | — |
| coffee mug (`ceramic_mug`) | 0.11% | 0.34% | 1–1 | source default | — |
| ceramic plate (`ceramic_plate`) | 0.11% | 0.34% | 1–1 | source default | — |
| ceramic shard (`ceramic_shard`) | 0.11% | 0.34% | 1–1 | source default | — |
| coal/charcoal cooker (`charcoal_cooker`) | 0.11% | 0.34% | 1–1 | source default | — |
| coffeemaker (`coffeemaker`) | 0.11% | 0.34% | 1–1 | source default | — |
| coffee pot (`coffeepot`) | 0.11% | 0.34% | 1–1 | source default | — |
| condom (`condom`) | 0.11% | 0.34% | 1–1 | source default | — |
| copper frying pan (`copper_pan`) | 0.11% | 0.34% | 1–1 | source default | — |
| crucible (`crucible`) | 0.11% | 0.34% | 1–1 | source default | — |
| electrohack (`electrohack`) | 0.11% | 0.34% | 1–1 | source default | — |
| hexamine stove (`esbit_stove`) | 0.11% | 0.34% | 1–1 | source default | — |
| pump fire drill (`fire_drill_large`) | 0.11% | 0.34% | 1–1 | source default | — |
| two-piece fishing rod (`fishing_rod_2pc`) | 0.11% | 0.34% | 1–1 | source default | — |
| pro fishing rod (`fishing_rod_professional`) | 0.11% | 0.34% | 1–1 | source default | — |
| telescoping fishing rod (`fishing_rod_tele`) | 0.11% | 0.34% | 1–1 | source default | — |
| gasoline cooker (`gasoline_cooker`) | 0.11% | 0.34% | 1–1 | source default | — |
| drinking glass (`glass`) | 0.11% | 0.34% | 1–1 | source default | — |
| glass bowl (`glass_bowl`) | 0.11% | 0.34% | 1–1 | source default | — |
| wooden hand fishing reel (`hoboreel`) | 0.11% | 0.34% | 1–1 | source default | — |
| kettle (`kettle`) | 0.11% | 0.34% | 1–1 | source default | — |
| survival knife (`knife_rambo`) | 0.11% | 0.34% | 1–1 | source default | — |
| lunchbox (`lunchbox`) | 0.11% | 0.34% | 1–1 | source default | — |
| maker kit box (`maker_kit_box`) | 0.11% | 0.34% | 1–1 | source default | — |
| chunk of aluminum (`material_aluminium_ingot`) | 0.11% | 0.34% | 1–1 | source default | — |
| mess kit (`mess_kit`) | 0.11% | 0.34% | 1–1 | source default | — |
| metal tank (2 L) (`metal_tank_little`) | 0.11% | 0.34% | 1–1 | source default | — |
| needle (`needle_steel`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic paint can (`paint_can_plastic`) | 0.11% | 0.34% | 1–1 | source default | — |
| metal paint can (`paint_can_steel`) | 0.11% | 0.34% | 1–1 | source default | — |
| water pipe (`pipe_water`) | 0.11% | 0.34% | 1–1 | source default | — |
| kiddie bowl (`plastic_bowl_kids`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic hand fishing reel (`plastichoboreel`) | 0.11% | 0.34% | 1–1 | source default | — |
| propane cooker (`propane_cooker`) | 0.11% | 0.34% | 1–1 | source default | — |
| sippy cup (`sippy_cup`) | 0.11% | 0.34% | 1–1 | source default | — |
| 10.1 ounce squeeze tube (`squeeze_tube`) | 0.11% | 0.34% | 1–1 | source default | — |
| 2.8 ounce squeeze tube (`squeeze_tube_small`) | 0.11% | 0.34% | 1–1 | source default | — |
| steel frying pan (`steel_pan`) | 0.11% | 0.34% | 1–1 | source default | — |
| survival kit box (`survival_kit_box`) | 0.11% | 0.34% | 1–1 | source default | — |
| tailor's kit (`tailors_kit`) | 0.11% | 0.34% | 1–1 | source default | — |
| steel tankard (`tankard_metal`) | 0.11% | 0.34% | 1–1 | source default | — |
| teapot (`teapot`) | 0.11% | 0.34% | 1–1 | source default | — |
| tin cup (`tin_cup`) | 0.11% | 0.34% | 1–1 | source default | — |
| tin snips (`tin_snips`) | 0.11% | 0.34% | 1–1 | source default | — |
| pair of kitchen tongs (`tongs`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic tumbler (`tumbler_plastic`) | 0.11% | 0.34% | 1–1 | source default | — |
| wine glass (`wine_glass`) | 0.11% | 0.34% | 1–1 | source default | — |
| plastic bag (`bag_plastic`) | 0.11% | 0.34% | 1–1 | source default | — |
| glass bottle (`bottle_glass`) | 0.11% | 0.34% | 1–1 | source default | — |
| glass shiv (`glass_shiv`) | 0.11% | 0.34% | 1–1 | source default | — |
| rubber hose (`hose`) | 0.11% | 0.34% | 1–1 | source default | — |
| 3 L glass jar (`jar_3l_glass_sealed`) | 0.11% | 0.67% | 1–1 | source default | — |
| clay jug (`jug_clay`) | 0.11% | 0.34% | 1–1 | source default | — |
| makeshift hand drill (`makeshift_hand_drill`) | 0.11% | 0.34% | 1–1 | source default | — |
| pliers (`pliers`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone adze (`primitive_adze`) | 0.11% | 0.34% | 1–1 | source default | — |
| pair of office scissors (`scissors`) | 0.11% | 0.34% | 1–1 | source default | — |
| stone chisel (`stone_chisel`) | 0.11% | 0.34% | 1–1 | source default | — |
| wooden tankard (`tankard_wooden`) | 0.11% | 0.34% | 1–1 | source default | — |
| clean water (`water_clean`) | 0.11% | 0.34% | 1–1 | 1–3 | plastic bottle |
| pile of straw (`straw_pile`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| canned beans (`can_beans`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| bread (`bread`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| hardtack cracker (`hardtack_cracker`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| potato chips (`chips`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cookie (`cookies`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| peanut butter candy (`candy`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| protein ration (`protein_bar_evac`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| apple (`apple`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| handful of blueberries (`blueberries`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| handful of raspberries (`raspberries`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| handful of blackberries (`blackberries`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| handful of strawberries (`strawberries`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked meat (`meat_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| dehydrated meat (`dry_meat`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| meat jerky (`jerky`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| smoked meat (`meat_smoked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked fish (`fish_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked mushroom (`mushroom_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked fruit (`fruit_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | 3 L glass jar |
| cooked plant marrow (`veggy_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked poultry (`poultry_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked fatty meat (`meat_fatty_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| roasted bone marrow (`cooked_marrow`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| corn on the cob (`corn_on_cob`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| popcorn (`popcorn`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked beans (`beans_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked lentils (`lentils_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |
| cooked oatmeal (`oatmeal_cooked`) | 0.11% | 0.34% | 1–1 | 1–3 | — |

## Contents: discovery_luggage

3–5 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| clean water (`water_clean`) | 0.48% | 1.91% | 1–1 | 1–3 | plastic bottle |
| pile of straw (`straw_pile`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| canned beans (`can_beans`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| bread (`bread`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| hardtack cracker (`hardtack_cracker`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| potato chips (`chips`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cookie (`cookies`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| peanut butter candy (`candy`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| protein ration (`protein_bar_evac`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| apple (`apple`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| handful of blueberries (`blueberries`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| handful of raspberries (`raspberries`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| handful of blackberries (`blackberries`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| handful of strawberries (`strawberries`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked meat (`meat_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| dehydrated meat (`dry_meat`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| meat jerky (`jerky`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| smoked meat (`meat_smoked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked fish (`fish_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked mushroom (`mushroom_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked fruit (`fruit_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | 3 L glass jar |
| cooked plant marrow (`veggy_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked poultry (`poultry_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked fatty meat (`meat_fatty_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| roasted bone marrow (`cooked_marrow`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| corn on the cob (`corn_on_cob`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| popcorn (`popcorn`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked beans (`beans_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked lentils (`lentils_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked oatmeal (`oatmeal_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| cooked rice (`rice_cooked`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| toast (`toast`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| black tea (`tea`) | 0.48% | 1.91% | 1–1 | 1–3 | plastic bottle |
| herbal tea (`herbal_tea`) | 0.48% | 1.91% | 1–1 | 1–3 | plastic bottle |
| black coffee (`coffee`) | 0.48% | 1.91% | 1–1 | 1–3 | plastic bottle |
| cotton boll (`cotton_boll`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| dried rice (`dry_rice`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| herbal tea bag (`herbal_tea_bag`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| popcorn kernels (`kernels`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| Italian seasoning (`seasoning_italian`) | 0.48% | 1.91% | 1–1 | 1–3 | — |
| plastic canteen (`canteen`) | 0.24% | 0.96% | 1–1 | source default | — |
| short rope (`rope_6`) | 0.24% | 0.96% | 1–1 | source default | — |
| short cordage rope (`rope_makeshift_6`) | 0.24% | 0.96% | 1–1 | source default | — |
| t-shirt (`tshirt`) | 0.24% | 0.96% | 1–1 | source default | — |
| hoodie (`hoodie`) | 0.24% | 0.96% | 1–1 | source default | — |
| sweater (`sweater`) | 0.24% | 0.96% | 1–1 | source default | — |
| jeans (`jeans`) | 0.24% | 0.96% | 1–1 | source default | — |
| pants (`pants`) | 0.24% | 0.96% | 1–1 | source default | — |
| socks (pair) (`socks`) | 0.24% | 0.96% | 1–1 | source default | — |
| boots (pair) (`boots`) | 0.24% | 0.96% | 1–1 | source default | — |
| sneakers (pair) (`sneakers`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of light gloves (`gloves_light`) | 0.24% | 0.96% | 1–1 | source default | — |
| baseball cap (`hat_ball`) | 0.24% | 0.96% | 1–1 | source default | — |
| knit hat (`hat_knit`) | 0.24% | 0.96% | 1–1 | source default | — |
| light jacket (`jacket_light`) | 0.24% | 0.96% | 1–1 | source default | — |
| backpack (`backpack`) | 0.0801% | 0.32% | 1–1 | source default | — |
| small backpack (`backpack_small`) | 0.0801% | 0.32% | 1–1 | source default | — |
| pair of 2-by-arm guards (`2byarm_guard`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of 2-by-shin guards (`2byshin_guard`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of scrap arm guards (`armguard_scrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of neoprene arm sleeves (`armguard_soft`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of carpet arm guards (`carpet_armguards`) | 0.24% | 0.96% | 1–1 | source default | — |
| arm splint (`arm_splint`) | 0.24% | 0.96% | 1–1 | source default | — |
| leg splint (`leg_splint`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeping bag (`sleeping_bag`) | 0.24% | 0.96% | 1–1 | source default | — |
| blanket (`blanket`) | 0.24% | 0.96% | 1–1 | source default | — |
| sheet (`sheet`) | 0.24% | 0.96% | 1–1 | source default | — |
| bookstrap (`bookstrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| loop of rope (`rope_loop`) | 0.24% | 0.96% | 1–1 | source default | — |
| swag bag (`swag_bag`) | 0.24% | 0.96% | 1–1 | source default | — |
| belly wrap (`bellywrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| chestwrap (`chestwrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur chestwrap (`chestwrap_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather chestwrap (`chestwrap_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| wool chestwrap (`chestwrap_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of hand wraps (`gloves_wraps`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fur hand wraps (`gloves_wraps_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of leather hand wraps (`gloves_wraps_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of wool hand wraps (`gloves_wraps_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| foot rags (pair) (`footrags`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur foot wraps (pair) (`footrags_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather foot wraps (pair) (`footrags_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| wool foot wraps (pair) (`footrags_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of sock mitts (`sockmitts`) | 0.24% | 0.96% | 1–1 | source default | — |
| bag socks (pair) (`socks_bag`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of bag gloves (`gloves_bag`) | 0.24% | 0.96% | 1–1 | source default | — |
| makeshift poncho (`poncho_makeshift`) | 0.24% | 0.96% | 1–1 | source default | — |
| bandana (`bandana`) | 0.24% | 0.96% | 1–1 | source default | — |
| headscarf (`headscarf`) | 0.24% | 0.96% | 1–1 | source default | — |
| blindfold (`blindfold`) | 0.24% | 0.96% | 1–1 | source default | — |
| loincloth (`loincloth`) | 0.24% | 0.96% | 1–1 | source default | — |
| simple patchwork scarf (`patchwork_scarf`) | 0.24% | 0.96% | 1–1 | source default | — |
| long patchwork scarf (`long_patchwork_scarf`) | 0.24% | 0.96% | 1–1 | source default | — |
| turban (`turban`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather belt (`leather_belt`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of paper arm guards (`armguard_paper`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of paper leg guards (`legguard_paper`) | 0.24% | 0.96% | 1–1 | source default | — |
| pot helmet (`pot_helmet`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of carpet bracers (`carpet_bracers`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of carpet greaves (`carpet_greaves`) | 0.24% | 0.96% | 1–1 | source default | — |
| rag tunic (`tunic_rag`) | 0.24% | 0.96% | 1–1 | source default | — |
| long vine (`vine_30`) | 0.24% | 0.96% | 1–1 | source default | — |
| long rope (`rope_30`) | 0.24% | 0.96% | 1–1 | source default | — |
| towel (`towel`) | 0.24% | 0.96% | 1–1 | source default | — |
| plastic shopping bag (`plastic_shopping_bag`) | 0.24% | 0.96% | 1–1 | source default | — |
| short vine (`vine_6`) | 0.24% | 0.96% | 1–1 | source default | — |
| Kevlar dog harness (`kevlar_harness`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather dog harness (`leather_harness_dog`) | 0.24% | 0.96% | 1–1 | source default | — |
| rubber dog rainsuit (`rubber_harness_dog`) | 0.24% | 0.96% | 1–1 | source default | — |
| pot great helm (`stockpot_helmet`) | 0.24% | 0.96% | 1–1 | source default | — |
| long cordage rope (`rope_makeshift_30`) | 0.24% | 0.96% | 1–1 | source default | — |
| grappling hook (`grapnel`) | 0.24% | 0.96% | 1–1 | source default | — |
| hairpin (`hairpin`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather-padded sleeveless shirt (`survivor_adhoc_leather_torso`) | 0.24% | 0.96% | 1–1 | source default | — |
| scrap suit (`armor_scrapsuit`) | 0.24% | 0.96% | 1–1 | source default | — |
| espadrilles (`espadrilles`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fingerless leather gloves (`gloves_fingerless`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fingerless wool gloves (`gloves_wool_fingerless`) | 0.24% | 0.96% | 1–1 | source default | — |
| grass blanket (`grass_blanket`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless underwear top (`long_undertop_sleeveless`) | 0.24% | 0.96% | 1–1 | source default | — |
| cargo shorts (`shorts_cargo`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless tunic (`sleeveless_tunic`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of tentacle sleeves (`stockings_tent_arms`) | 0.24% | 0.96% | 1–1 | source default | — |
| tentacle stockings (pair) (`stockings_tent_legs`) | 0.24% | 0.96% | 1–1 | source default | — |
| crop top (`tshirt_cropped`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather backpack (`backpack_leather`) | 0.0801% | 0.32% | 1–1 | source default | — |
| cord sandals (pair) (`bastsandals`) | 0.24% | 0.96% | 1–1 | source default | — |
| belly band (`bellyband`) | 0.24% | 0.96% | 1–1 | source default | — |
| bindle (`bindle`) | 0.24% | 0.96% | 1–1 | source default | — |
| bookplate (`bookplate`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather armor boots (pair) (`boots_larmor`) | 0.24% | 0.96% | 1–1 | source default | — |
| scrap boots (pair) (`boots_scrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| ankle sheath (`bootsheath`) | 0.24% | 0.96% | 1–1 | source default | — |
| birchbark ankle sheath (`bootsheath_birchbark`) | 0.24% | 0.96% | 1–1 | source default | — |
| box backpack (`boxpack`) | 0.24% | 0.96% | 1–1 | source default | — |
| wooden canteen (`canteen_wood`) | 0.24% | 0.96% | 1–1 | source default | — |
| carpet cuirass (`carpet_cuirass`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of carpet leg guards (`carpet_legguards`) | 0.24% | 0.96% | 1–1 | source default | — |
| cotton apron (`apron_cotton`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather apron (`apron_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of arm warmers (`arm_warmers`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of leather arm guards (`armguard_larmor`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather cloak (`cloak_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| cloth-padded shirt (`cloth_shirt_padded`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur duster (`duster_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fur gloves (`gloves_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of leather gloves (`gloves_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| scrap helmet (`helmet_scrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather pouch (`leather_pouch`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather sandals (pair) (`leathersandals`) | 0.24% | 0.96% | 1–1 | source default | — |
| long underwear bottom (`long_underpants`) | 0.24% | 0.96% | 1–1 | source default | — |
| makeshift knapsack (`makeshift_knapsack`) | 0.24% | 0.96% | 1–1 | source default | — |
| cargo pants (`pants_cargo`) | 0.24% | 0.96% | 1–1 | source default | — |
| birchbark shoes (pair) (`shoes_birchbark`) | 0.24% | 0.96% | 1–1 | source default | — |
| straw hat (`straw_hat`) | 0.24% | 0.96% | 1–1 | source default | — |
| straw sandals (pair) (`straw_sandals`) | 0.24% | 0.96% | 1–1 | source default | — |
| straw basket (`straw_basket`) | 0.24% | 0.96% | 1–1 | source default | — |
| grass sheet (`grass_sheet`) | 0.24% | 0.96% | 1–1 | source default | — |
| grass cloak (`grass_cloak`) | 0.24% | 0.96% | 1–1 | source default | — |
| abaya (`abaya`) | 0.24% | 0.96% | 1–1 | source default | — |
| canvas aketon vest (`aketon_canvas_vest`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of sheet metal arm guards (`armguard_metal`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of mild steel sheet metal bracers (`armguard_metal_sheets_bracer`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of mild steel sheet metal elbow guards (`armguard_metal_sheets_elbows`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of mild steel sheet metal pauldrons (`armguard_metal_sheets_shoulders`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather body armor (`armor_larmor`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather armor cuirass (`armor_larmor_chest`) | 0.24% | 0.96% | 1–1 | source default | — |
| large tactical backpack (`backpack_tactical_large`) | 0.0801% | 0.32% | 1–1 | source default | — |
| balaclava (`balclava`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur belly wrap (`bellywrap_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather belly wrap (`bellywrap_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| wool beret (`beret_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| boxer briefs (`boxer_briefs`) | 0.24% | 0.96% | 1–1 | source default | — |
| boxer shorts (`boxer_shorts`) | 0.24% | 0.96% | 1–1 | source default | — |
| briefs (`briefs`) | 0.24% | 0.96% | 1–1 | source default | — |
| cloth-padded pants (`canvas_pants_padded`) | 0.24% | 0.96% | 1–1 | source default | — |
| sheet metal chest guard (`chestguard_metal_sheets`) | 0.24% | 0.96% | 1–1 | source default | — |
| light sheet metal chest guard (`chestguard_metal_sheets_light`) | 0.24% | 0.96% | 1–1 | source default | — |
| cloak (`cloak`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur cloak (`cloak_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| wool cloak (`cloak_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| wooden clogs (pair) (`clogs`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur coat (`coat_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| rain coat (`coat_rain`) | 0.24% | 0.96% | 1–1 | source default | — |
| cowboy hat (`cowboy_hat`) | 0.24% | 0.96% | 1–1 | source default | — |
| knit cowl (`cowl_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| scrap cuirass (`cuirass_scrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| deployment bag (`deployment_bag`) | 0.24% | 0.96% | 1–1 | source default | — |
| duster (`duster`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless canvas gambeson (`gambeson_canvas_vest`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless nylon gambeson (`gambeson_nylon_vest`) | 0.24% | 0.96% | 1–1 | source default | — |
| canvas heavy arming pants (`gambeson_pants_canvas`) | 0.24% | 0.96% | 1–1 | source default | — |
| nylon heavy arming pants (`gambeson_pants_nylon`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of leather armor gauntlets (`gauntlets_larmor`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of armored fingerless leather gloves (`gloves_fingerless_mod`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of studded gloves (`gloves_studded`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of wool gloves (`gloves_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| grass keffiyeh (`grass_keffiyeh`) | 0.24% | 0.96% | 1–1 | source default | — |
| boonie hat (`hat_boonie`) | 0.24% | 0.96% | 1–1 | source default | — |
| cotton hat (`hat_cotton`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur hat (`hat_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| hunting cap (`hat_hunting`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather armor helmet (`helmet_larmor`) | 0.24% | 0.96% | 1–1 | source default | — |
| wolf skull helmet (`helmet_skull`) | 0.24% | 0.96% | 1–1 | source default | — |
| hijab (`hijab`) | 0.24% | 0.96% | 1–1 | source default | — |
| rain hood (`hood_rain`) | 0.24% | 0.96% | 1–1 | source default | — |
| cropped hoodie (`hoodie_cropped`) | 0.24% | 0.96% | 1–1 | source default | — |
| bathrobe (`house_coat`) | 0.24% | 0.96% | 1–1 | source default | — |
| windbreaker (`jacket_windbreaker`) | 0.24% | 0.96% | 1–1 | source default | — |
| jerrypack (`jerrypack`) | 0.24% | 0.96% | 1–1 | source default | — |
| keffiyeh (`keffiyeh`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of nail knuckles (`knuckle_nail`) | 0.24% | 0.96% | 1–1 | source default | — |
| drop leg bag (`leg_bag`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of leg warmers (`leg_warmers`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fur leggings (`leg_warmers_f`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of leather leg guards (`legguard_larmor`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of sheet metal leg guards (`legguard_metal_sheets`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of sheet metal greaves (`legguard_metal_sheets_greaves`) | 0.24% | 0.96% | 1–1 | source default | — |
| sheet metal skirt (`legguard_metal_sheets_hip`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of sheet metal knee guards (`legguard_metal_sheets_knees`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of scrap leg guards (`legguard_scrap`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur loincloth (`loincloth_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather loincloth (`loincloth_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| wool loincloth (`loincloth_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| longarm bag (`long_duffelbag`) | 0.24% | 0.96% | 1–1 | source default | — |
| long underwear top (`long_undertop`) | 0.24% | 0.96% | 1–1 | source default | — |
| long-sleeved shirt (`longshirt`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of sheet metal gauntlets (`mitten_gaunt_metal_sheets`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of mittens (`mittens`) | 0.24% | 0.96% | 1–1 | source default | — |
| moccasins (pair) (`mocassins`) | 0.24% | 0.96% | 1–1 | source default | — |
| niqab (`niqab`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur pants (`pants_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| wool poncho (`poncho`) | 0.24% | 0.96% | 1–1 | source default | — |
| sheet metal sabatons (pair) (`sabaton_metal_sheets`) | 0.24% | 0.96% | 1–1 | source default | — |
| shorts (`shorts`) | 0.24% | 0.96% | 1–1 | source default | — |
| grass skirt (`skirt_grass`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless duster (`sleeveless_duster`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless fur duster (`sleeveless_duster_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless trenchcoat (`sleeveless_trenchcoat`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless fur trenchcoat (`sleeveless_trenchcoat_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| ankle socks (pair) (`socks_ankle`) | 0.24% | 0.96% | 1–1 | source default | — |
| wool socks (pair) (`socks_wool`) | 0.24% | 0.96% | 1–1 | source default | — |
| stockings (pair) (`stockings`) | 0.24% | 0.96% | 1–1 | source default | — |
| sundress (`sundress`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather-padded shirt (`survivor_adhoc_leather_shirt`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather-padded sleeves (`survivor_adhoc_leather_sleeves`) | 0.24% | 0.96% | 1–1 | source default | — |
| suspenders (`suspenders_cloth`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather suspenders (`suspenders_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| sustainment pouch (`sustainment_pouch`) | 0.24% | 0.96% | 1–1 | source default | — |
| sweatshirt (`sweatshirt`) | 0.24% | 0.96% | 1–1 | source default | — |
| tank top (`tank_top`) | 0.24% | 0.96% | 1–1 | source default | — |
| canvas throat guard (`throat_guard_canvas`) | 0.24% | 0.96% | 1–1 | source default | — |
| nylon throat guard (`throat_guard_nylon`) | 0.24% | 0.96% | 1–1 | source default | — |
| travelpack (`travelpack`) | 0.24% | 0.96% | 1–1 | source default | — |
| trenchcoat (`trenchcoat`) | 0.24% | 0.96% | 1–1 | source default | — |
| fur trenchcoat (`trenchcoat_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| tunic (`tunic`) | 0.24% | 0.96% | 1–1 | source default | — |
| undershirt (`undershirt`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of leather vambraces (`vambrace_larmor`) | 0.24% | 0.96% | 1–1 | source default | — |
| utility vest (`vest`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather vest (`vest_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| large waterskin (`waterskin3`) | 0.24% | 0.96% | 1–1 | source default | — |
| wicker backpack (`wicker_backpack`) | 0.0801% | 0.32% | 1–1 | source default | — |
| pair of wool sock mitts (`wool_sockmitts`) | 0.24% | 0.96% | 1–1 | source default | — |
| thick wool onesie (`wool_suit`) | 0.24% | 0.96% | 1–1 | source default | — |
| scrap suit (`armor_xs_scrapsuit`) | 0.24% | 0.96% | 1–1 | source default | — |
| large belt loop (`belt_loop_large`) | 0.24% | 0.96% | 1–1 | source default | — |
| medium belt loop (`belt_loop_medium`) | 0.24% | 0.96% | 1–1 | source default | — |
| turnout boots (pair) (`boots_bunker`) | 0.24% | 0.96% | 1–1 | source default | — |
| chitinous boots (pair) (`boots_chitin`) | 0.24% | 0.96% | 1–1 | source default | — |
| combat boots (pair) (`boots_combat`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of light survivor boots (`boots_lsurvivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| cloth-padded sleeveless shirt (`cloth_vest_padded`) | 0.24% | 0.96% | 1–1 | source default | — |
| faux fur coat (`coat_faux_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of copper earrings (`copper_ear`) | 0.24% | 0.96% | 1–1 | source default | — |
| faux fur duster (`duster_faux_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather duster (`duster_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| survivor duster (`duster_survivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather eyepatch (`eyepatch_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| garter belt (`garter_belt`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of safety glasses (`glasses_safety`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of black gloves (`gloves_black`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of claw gloves (`gloves_claws`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of denim gloves (`gloves_denim`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fingerless denim gloves (`gloves_denim_fingerless`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of EOD overhand protectors (`gloves_eod`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of survivor firegloves (`gloves_fsurvivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of golfing gloves (`gloves_golf`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of glove liners (`gloves_liner`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of light survivor gloves (`gloves_lsurvivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fingerless light survivor gloves (`gloves_lsurvivor_fingerless`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of armored gauntlets (`gloves_plate`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of rubber gloves (`gloves_rubber`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of survivor gloves (`gloves_survivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of fingerless survivor gloves (`gloves_survivor_fingerless`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of white gloves (`gloves_white`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of work gloves (`gloves_work`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of welding goggles (`goggles_welding`) | 0.24% | 0.96% | 1–1 | source default | — |
| toque (`hat_chef`) | 0.24% | 0.96% | 1–1 | source default | — |
| faux fur hat (`hat_faux_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| golf cap (`hat_golf`) | 0.24% | 0.96% | 1–1 | source default | — |
| hard hat (`hat_hard`) | 0.24% | 0.96% | 1–1 | source default | — |
| summer hard hat (`hat_hard_hooded`) | 0.24% | 0.96% | 1–1 | source default | — |
| eight point cap (`hat_navy`) | 0.24% | 0.96% | 1–1 | source default | — |
| noise canceling headgear (`hat_noise_cancelling`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of snow goggles (`iggaak`) | 0.24% | 0.96% | 1–1 | source default | — |
| jean jacket (`jacket_jean`) | 0.24% | 0.96% | 1–1 | source default | — |
| armored jean jacket (`jacket_jean_mod`) | 0.24% | 0.96% | 1–1 | source default | — |
| armored motorcycle jacket (`jacket_leather_mod`) | 0.24% | 0.96% | 1–1 | source default | — |
| armored jeans (`jeans_mod`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of knee pads (`knee_pads`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of scrap knuckles (`knuckle_steel`) | 0.24% | 0.96% | 1–1 | source default | — |
| motorcycle jacket (`leather_police_jacket`) | 0.24% | 0.96% | 1–1 | source default | — |
| rioter mask (`mask_rioter`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of Nomex sock mitts (`nomex_sockmitts`) | 0.24% | 0.96% | 1–1 | source default | — |
| flame-resistant socks (pair) (`nomex_socks`) | 0.24% | 0.96% | 1–1 | source default | — |
| scrap ESAPI plate (`scrap_esapi_plate`) | 0.24% | 0.96% | 1–1 | source default | — |
| scrap ESBI plate (`scrap_esbi_plate`) | 0.24% | 0.96% | 1–1 | source default | — |
| grass shirt (`shirt_straw`) | 0.24% | 0.96% | 1–1 | source default | — |
| jorts (`shorts_denim`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless faux fur duster (`sleeveless_duster_faux_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless leather duster (`sleeveless_duster_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless survivor duster (`sleeveless_duster_survivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless faux fur trenchcoat (`sleeveless_trenchcoat_faux_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless leather trenchcoat (`sleeveless_trenchcoat_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| sleeveless survivor trenchcoat (`sleeveless_trenchcoat_survivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| sun shield (`sun_shield`) | 0.24% | 0.96% | 1–1 | source default | — |
| tireplate (`tireplate`) | 0.24% | 0.96% | 1–1 | source default | — |
| faux fur trenchcoat (`trenchcoat_faux_fur`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather trenchcoat (`trenchcoat_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| survivor trenchcoat (`trenchcoat_survivor`) | 0.24% | 0.96% | 1–1 | source default | — |
| jean vest (`vest_jean`) | 0.24% | 0.96% | 1–1 | source default | — |
| armored jean vest (`vest_jean_mod`) | 0.24% | 0.96% | 1–1 | source default | — |
| armored leather vest (`vest_leather_mod`) | 0.24% | 0.96% | 1–1 | source default | — |
| briefcase (`briefcase`) | 0.24% | 4.72% | 1–1 | source default | — |
| pair of glass goggles (`glass_goggles`) | 0.24% | 0.96% | 1–1 | source default | — |
| pair of medical gloves (`gloves_medical`) | 0.24% | 0.96% | 1–1 | source default | — |
| ankle wallet pouch (`ankle_wallet_pouch`) | 0.24% | 0.96% | 1–1 | source default | — |
| plastic apron (`apron_plastic`) | 0.24% | 0.96% | 1–1 | source default | — |
| bottle gourd (`bottle_gourd`) | 0.24% | 0.96% | 1–1 | source default | — |
| duffel bag (`duffelbag`) | 0.24% | 0.96% | 1–1 | source default | — |
| pack frame (`frame_pack`) | 0.24% | 0.96% | 1–1 | source default | — |
| ripped jeans (`jeans_ripped`) | 0.24% | 0.96% | 1–1 | source default | — |
| makeshift sling (`makeshift_sling`) | 0.24% | 0.96% | 1–1 | source default | — |
| net backpack (`net_backpack`) | 0.0801% | 0.32% | 1–1 | source default | — |
| leather pants (`pants_leather`) | 0.24% | 0.96% | 1–1 | source default | — |
| pouch (`ragpouch`) | 0.24% | 0.96% | 1–1 | source default | — |
| leather-padded pants (`survivor_adhoc_leather_pants`) | 0.24% | 0.96% | 1–1 | source default | — |
| work pants (`technician_pants_gray`) | 0.24% | 0.96% | 1–1 | source default | — |
| trapper pack (`trapper_pack`) | 0.24% | 0.96% | 1–1 | source default | — |
| long waist apron (`waist_apron_long`) | 0.24% | 0.96% | 1–1 | source default | — |
| short waist apron (`waist_apron_short`) | 0.24% | 0.96% | 1–1 | source default | — |
| small waterskin (`waterskin`) | 0.24% | 0.96% | 1–1 | source default | — |
| waterskin (`waterskin2`) | 0.24% | 0.96% | 1–1 | source default | — |
| suitcase (`suitcase_m`) | 0.96% | 3.79% | 1–1 | source default | — |
| briefcase (`briefcase`) | 0.96% | 4.72% | 1–1 | source default | — |
| pocket knife (`pockknife`) | 0.96% | 3.79% | 1–1 | source default | — |
| plastic bottle (`bottle_plastic`) | 0.96% | 11.02% | 1–1 | source default | — |
| light battery (`light_battery_cell`) | 0.96% | 3.79% | 1–1 | source default | — |
| bleached makeshift bandage (`bandages_makeshift_bleached`) | 0.48% | 1.91% | 1–1 | source default | — |

## Contents: discovery_workshop

2–4 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| solder (`solder_wire`) | 0.30% | 0.90% | 1–1 | 1–3 | — |
| soldering iron (`soldering_iron`) | 0.30% | 0.90% | 1–1 | source default | — |
| steel mesh (`wire_mesh`) | 0.30% | 0.90% | 1–1 | source default | — |
| amplifier circuit (`amplifier`) | 0.30% | 0.90% | 1–1 | source default | — |
| antenna (`antenna`) | 0.30% | 0.90% | 1–1 | source default | — |
| battery charger (`battery_charger`) | 0.30% | 0.90% | 1–1 | source default | — |
| copper wire (`cable`) | 0.30% | 0.90% | 1–1 | 1–3 | — |
| instrument cable (`cable_instrument`) | 0.30% | 0.90% | 1–1 | source default | — |
| XLR cable (`cable_xlr`) | 0.30% | 0.90% | 1–1 | source default | — |
| circuit board (`circuit`) | 0.30% | 0.90% | 1–1 | source default | — |
| electric lantern (off) (`electric_lantern`) | 0.30% | 0.90% | 1–1 | source default | — |
| flashlight (off) (`flashlight`) | 0.30% | 0.90% | 1–1 | source default | — |
| hand-crank charger (`hand_crank_charger`) | 0.30% | 0.90% | 1–1 | source default | — |
| small tool battery (`heavy_battery_cell`) | 0.30% | 0.90% | 1–1 | source default | — |
| big tool battery (`heavy_plus_battery_cell`) | 0.30% | 0.90% | 1–1 | source default | — |
| hotplate (`hotplate`) | 0.30% | 0.90% | 1–1 | source default | — |
| light battery (`light_battery_cell`) | 0.30% | 0.90% | 1–1 | source default | — |
| ultra-light battery (rechargeable) (`light_minus_battery_cell`) | 0.30% | 0.90% | 1–1 | source default | — |
| medium battery (rechargeable) (`medium_battery_cell`) | 0.30% | 0.90% | 1–1 | source default | — |
| micro electric motor (`motor_micro`) | 0.30% | 0.90% | 1–1 | source default | — |
| motorcycle police boots (pair) (`motor_police_boots`) | 0.30% | 0.90% | 1–1 | source default | — |
| small electric motor (`motor_small`) | 0.30% | 0.90% | 1–1 | source default | — |
| tiny electric motor (`motor_tiny`) | 0.30% | 0.90% | 1–1 | source default | — |
| multimeter (`multimeter`) | 0.30% | 0.90% | 1–1 | source default | — |
| power converter (`power_supply`) | 0.30% | 0.90% | 1–1 | source default | — |
| signal receiver (`receiver`) | 0.30% | 0.90% | 1–1 | source default | — |
| solar panel (`solar_panel`) | 0.30% | 0.90% | 1–1 | source default | — |
| portable soldering iron (`soldering_iron_portable`) | 0.30% | 0.90% | 1–1 | source default | — |
| makeshift arc welder (`welder_crude`) | 0.30% | 0.90% | 1–1 | source default | — |
| wire (`wire`) | 0.30% | 0.90% | 1–1 | source default | — |
| motorbike battery (`battery_motorbike`) | 0.30% | 0.90% | 1–1 | source default | — |
| small motorbike battery (`battery_motorbike_small`) | 0.30% | 0.90% | 1–1 | source default | — |
| speaker cable (`cable_speaker`) | 0.30% | 0.90% | 1–1 | source default | — |
| carbon electrode rod (`carbon_electrode`) | 0.30% | 0.90% | 1–1 | 1–3 | — |
| electrolysis kit (`electrolysis_kit`) | 0.30% | 0.90% | 1–1 | source default | — |
| electronics control unit (`electronics_controls`) | 0.30% | 0.90% | 1–1 | source default | — |
| barbed wire (`wire_barbed`) | 0.30% | 0.90% | 1–1 | source default | — |
| funnel (`funnel`) | 0.15% | 0.45% | 1–1 | source default | — |
| lighter (`lighter`) | 0.15% | 0.45% | 1–1 | source default | — |
| matchbook (`matches`) | 0.15% | 0.45% | 1–1 | source default | — |
| flaking rock (`rock_flaking`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| flint (`flint`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| torch (`torch`) | 0.15% | 0.45% | 1–1 | source default | — |
| stick (`stick`) | 0.15% | 0.45% | 1–1 | source default | — |
| plank (`2x4`) | 0.15% | 0.45% | 1–1 | source default | — |
| short wooden post (`wooden_post_short`) | 0.15% | 0.45% | 1–1 | source default | — |
| nail (`nail`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| scrap metal (`scrap`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| small metal sheet (`sheet_metal_small`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| nut and bolt (`nuts_bolts`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| hinge (`hinge`) | 0.15% | 0.45% | 1–1 | source default | — |
| small lock and key (`lock`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic chunk (`plastic_chunk`) | 0.15% | 0.45% | 1–1 | source default | — |
| duct tape (`duct_tape`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| short string (`string_6`) | 0.15% | 0.45% | 1–1 | source default | — |
| long string (`string_36`) | 0.15% | 0.45% | 1–1 | source default | — |
| short cordage piece (`cordage_6`) | 0.15% | 0.45% | 1–1 | source default | — |
| thread (`thread`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| plant fiber (`plant_fibre`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| sinew (`sinew`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| withered plant (`withered`) | 0.15% | 0.45% | 1–1 | source default | — |
| piece of birchbark (`birchbark`) | 0.15% | 0.45% | 1–1 | source default | — |
| pine bough (`pine_bough`) | 0.15% | 0.45% | 1–1 | source default | — |
| pinecone (`pinecone`) | 0.15% | 0.45% | 1–1 | source default | — |
| handful of leaves (`leaves`) | 0.15% | 0.45% | 1–1 | source default | — |
| tinder (`tinder`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| cotton sheet (`sheet_cotton`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork cotton sheet (`sheet_cotton_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| cotton scraps (`scrap_cotton`) | 0.15% | 0.45% | 1–1 | source default | — |
| leather patch (`leather`) | 0.15% | 0.45% | 1–1 | source default | — |
| leather scraps (`scrap_leather`) | 0.15% | 0.45% | 1–1 | source default | — |
| fur patch (`fur`) | 0.15% | 0.45% | 1–1 | source default | — |
| lump of clay (`clay_lump`) | 0.15% | 0.45% | 1–1 | source default | — |
| field stone (`field_stone`) | 0.15% | 0.45% | 1–1 | source default | — |
| nail bat (`nailbat`) | 0.15% | 0.45% | 1–1 | source default | — |
| baseball bat (`bat`) | 0.15% | 0.45% | 1–1 | source default | — |
| nailboard (`nailboard`) | 0.15% | 0.45% | 1–1 | source default | — |
| bandage (`bandages`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift bandage (`bandages_makeshift`) | 0.15% | 0.45% | 1–1 | source default | — |
| adhesive bandage (`adhesive_bandages`) | 0.15% | 0.45% | 1–1 | source default | — |
| medical gauze (`medical_gauze`) | 0.15% | 0.45% | 1–1 | source default | — |
| rollmat (`rollmat`) | 0.15% | 0.45% | 1–1 | source default | — |
| canvas patch (`canvas_patch`) | 0.15% | 0.45% | 1–1 | source default | — |
| cotton balls (`cotton_ball`) | 0.15% | 0.45% | 1–1 | source default | — |
| short leather lace (`cordage_6_leather`) | 0.15% | 0.45% | 1–1 | source default | — |
| long leather lace (`cordage_36_leather`) | 0.15% | 0.45% | 1–1 | source default | — |
| grass yarn (`grass_yarn`) | 0.15% | 0.45% | 1–1 | source default | — |
| yarn (`yarn`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| small wood block (`wood_block`) | 0.15% | 0.45% | 1–1 | source default | — |
| short plank (`plank_short`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden bead (`wooden_bead`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| notched plank (`notched_plank`) | 0.15% | 0.45% | 1–1 | source default | — |
| candle (`candle`) | 0.15% | 0.45% | 1–1 | source default | — |
| shaving razor (`razor_shaving`) | 0.15% | 0.45% | 1–1 | source default | — |
| rolling paper (`rolling_paper`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| bundle of cotton sheets (`bundle_cotton`) | 0.15% | 0.45% | 1–1 | source default | — |
| bundle of leather (`bundle_leather`) | 0.15% | 0.45% | 1–1 | source default | — |
| bundle of cotton patches (`bundle_rag`) | 0.15% | 0.45% | 1–1 | source default | — |
| bundle of felt (`bundle_wool`) | 0.15% | 0.45% | 1–1 | source default | — |
| pillow (`pillow`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden club (`club_wooden`) | 0.15% | 0.45% | 1–1 | source default | — |
| large wooden club (`club_wooden_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic shank (`sharp_toothbrush`) | 0.15% | 0.45% | 1–1 | source default | — |
| aluminum foil (`aluminum_foil`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| large folded cardboard box (`box_large_folded`) | 0.15% | 0.45% | 1–1 | source default | — |
| folded cardboard box (`box_medium_folded`) | 0.15% | 0.45% | 1–1 | source default | — |
| small folded cardboard box (`box_small_folded`) | 0.15% | 0.45% | 1–1 | source default | — |
| steel buckle (`buckle_steel`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| carding paddles (`carding_paddles`) | 0.15% | 0.45% | 1–1 | source default | — |
| felt patch (`felt_patch`) | 0.15% | 0.45% | 1–1 | source default | — |
| paper (`paper`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| razor blade (`razor_blade`) | 0.15% | 0.45% | 1–1 | source default | — |
| canvas scraps (`scrap_canvas`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork felt sheet (`sheet_felt_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| toaster (`toaster`) | 0.15% | 0.45% | 1–1 | source default | — |
| wool staple (`wool_staple`) | 0.15% | 0.45% | 1–1 | source default | — |
| dog tag (`dog_tag_dog`) | 0.15% | 0.45% | 1–1 | source default | — |
| down feather (`down_feather`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| feather (`feather`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| large canine skull (`skull_canis`) | 0.15% | 0.45% | 1–1 | source default | — |
| tiny canine skull (`skull_canis_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| small feline skull (`skull_feline_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| pig skull (`skull_pig`) | 0.15% | 0.45% | 1–1 | source default | — |
| rabbit skull (`skull_rabbit`) | 0.15% | 0.45% | 1–1 | source default | — |
| rodent skull (`skull_rodent`) | 0.15% | 0.45% | 1–1 | source default | — |
| spinning wheel (`spinwheelitem`) | 0.15% | 0.45% | 1–1 | source default | — |
| improvised fishing hook (`fishing_hook_bone`) | 0.15% | 0.45% | 1–1 | source default | — |
| steel wire (`lc_wire`) | 0.15% | 0.45% | 1–1 | source default | — |
| sand (`material_sand`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| superglue (`super_glue`) | 0.15% | 0.45% | 1–1 | 1–3 | plastic bottle |
| set of pipe fittings (`pipe_fittings`) | 0.15% | 0.45% | 1–1 | source default | — |
| welding rod (`welding_rod_steel`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| chunk of copper (`scrap_copper`) | 0.15% | 0.45% | 1–1 | source default | — |
| heavy wire rack (`heavy_wire_rack`) | 0.15% | 0.45% | 1–1 | source default | — |
| spear shaft (`spear_shaft`) | 0.15% | 0.45% | 1–1 | source default | — |
| scrap aluminum (`scrap_aluminum`) | 0.15% | 0.45% | 1–1 | source default | — |
| hotcut (`hotcut`) | 0.15% | 0.45% | 1–1 | source default | — |
| tin powder (`tin`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| patchwork leather sheet (`sheet_leather_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| long cordage piece (`cordage_36`) | 0.15% | 0.45% | 1–1 | source default | — |
| canvas sheet (`sheet_canvas`) | 0.15% | 0.45% | 1–1 | source default | — |
| heavy duty thread (`thread_canvas`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| bō (`bo`) | 0.15% | 0.45% | 1–1 | source default | — |
| leather funnel (`leather_funnel`) | 0.15% | 0.45% | 1–1 | source default | — |
| boiled makeshift bandage (`bandages_makeshift_boiled`) | 0.15% | 0.45% | 1–1 | source default | — |
| birchbark funnel (`birchbark_funnel`) | 0.15% | 0.45% | 1–1 | source default | — |
| crude wooden arrow (`arrow_fire_hardened_fletched`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| simple wooden small game arrow (`arrow_small_game_fletched`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| crude wooden bolt (`bolt_crude`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| simple wooden small game bolt (`bolt_simple_small_game`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| simple wooden bolt (`bolt_simple_wood`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| fur rollmat (`fur_rollmat`) | 0.15% | 0.45% | 1–1 | source default | — |
| distaff and spindle (`distaff_spindle`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass bladed tepoztopili (`aztec_spear_glass`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift tepoztopili (`aztec_spear_scrap`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone bladed tepoztopili (`aztec_spear_stone`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift macuahuitl (`aztec_sword_scrap`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone lined macuahuitl (`aztec_sword_stone`) | 0.15% | 0.45% | 1–1 | source default | — |
| barbed wire bat (`bwirebat`) | 0.15% | 0.45% | 1–1 | source default | — |
| paint chipper (`chipper`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass bladed macuahuitl (`glass_macuahuitl`) | 0.15% | 0.45% | 1–1 | source default | — |
| great pipe mace (`mace_pipe_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift sap (`makeshift_sap`) | 0.15% | 0.45% | 1–1 | source default | — |
| bolt studded bat (`nutboltbat`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden shed stick (`shed_stick`) | 0.15% | 0.45% | 1–1 | source default | — |
| shillelagh (`shillelagh`) | 0.15% | 0.45% | 1–1 | source default | — |
| pipe staff (`staff_pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| nord (`sword_nail`) | 0.15% | 0.45% | 1–1 | source default | — |
| 2-by-sword (`sword_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| zweitimber (`sword_wood_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden tonfa (`tonfa_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| peasant flail (`2h_flail_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| almonds (`almond`) | 0.15% | 0.45% | 1–1 | source default | — |
| back-up beeper (`beeper`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden block and tackle (`block_and_tackle_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| bone glue (`bone_glue`) | 0.15% | 0.45% | 1–1 | source default | — |
| breadboard (`breadboard`) | 0.15% | 0.45% | 1–1 | source default | — |
| butterfly net (`butterfly_net_makeshift`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay flower pot (`clay_pot_flower`) | 0.15% | 0.45% | 1–1 | source default | — |
| raw copper wire (`copper_wire`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| crude heating element (`crude_heating_element`) | 0.15% | 0.45% | 1–1 | source default | — |
| cured hide (`cured_hide`) | 0.15% | 0.45% | 1–1 | source default | — |
| cured pelt (`cured_pelt`) | 0.15% | 0.45% | 1–1 | source default | — |
| denim patch (`denim_patch`) | 0.15% | 0.45% | 1–1 | source default | — |
| down-filled pillow (`down_pillow`) | 0.15% | 0.45% | 1–1 | source default | — |
| draw plate (`draw_plate`) | 0.15% | 0.45% | 1–1 | source default | — |
| electronic scrap (`e_scrap`) | 0.15% | 0.45% | 1–1 | source default | — |
| heating element (`element`) | 0.15% | 0.45% | 1–1 | source default | — |
| faux fur patch (`faux_fur`) | 0.15% | 0.45% | 1–1 | source default | — |
| gambeson batting (`gambeson_batting`) | 0.15% | 0.45% | 1–1 | source default | — |
| garlic press (`garlic_press`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic gasket (`gasket_plastic`) | 0.15% | 0.45% | 1–1 | source default | — |
| withered glass apple (`glass_apple`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass prism (`glass_prism`) | 0.15% | 0.45% | 1–1 | source default | — |
| hand controls (`hand_controls`) | 0.15% | 0.45% | 1–1 | source default | — |
| bronze war dart (`javelin_fletched_bronze`) | 0.15% | 0.45% | 1–1 | source default | — |
| light bulb (`light_bulb`) | 0.15% | 0.45% | 1–1 | source default | — |
| Lycra patch (`lycra_patch`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift walking cane (`makeshift_cane`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift crutches (`makeshift_crutches`) | 0.15% | 0.45% | 1–1 | source default | — |
| lime mortar (`mortar_lime`) | 0.15% | 0.45% | 1–1 | source default | — |
| neoprene patch (`neoprene`) | 0.15% | 0.45% | 1–1 | source default | — |
| paint brush (`paint_brush`) | 0.15% | 0.45% | 1–1 | source default | — |
| pearl (`pearl`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic fork (`plastic_fork`) | 0.15% | 0.45% | 1–1 | source default | — |
| kiddie spoon (`plastic_spoon_kids`) | 0.15% | 0.45% | 1–1 | source default | — |
| rigid Kevlar plate (`rigid_kevlar_plate`) | 0.15% | 0.45% | 1–1 | source default | — |
| thick rubber chunk (`rubber_tire_chunk`) | 0.15% | 0.45% | 1–1 | source default | — |
| chunk of bronze (`scrap_bronze`) | 0.15% | 0.45% | 1–1 | source default | — |
| scrap cast iron (`scrap_cast_iron`) | 0.15% | 0.45% | 1–1 | source default | — |
| Kevlar scraps (`scrap_kevlar`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork canvas sheet (`sheet_canvas_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| denim sheet (`sheet_denim`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork denim sheet (`sheet_denim_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork faux fur sheet (`sheet_faux_fur_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| Kevlar sheet (`sheet_kevlar`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork Kevlar sheet (`sheet_kevlar_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| leather sheet (`sheet_leather`) | 0.15% | 0.45% | 1–1 | source default | — |
| Lycra sheet (`sheet_lycra`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork Lycra sheet (`sheet_lycra_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork neoprene sheet (`sheet_neoprene_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| Nomex sheet (`sheet_nomex`) | 0.15% | 0.45% | 1–1 | source default | — |
| small propane tank (`small_propane_tank`) | 0.15% | 0.45% | 1–1 | source default | — |
| sunflower (`sunflower`) | 0.15% | 0.45% | 1–1 | source default | — |
| tanned hide (`tanned_hide`) | 0.15% | 0.45% | 1–1 | source default | — |
| tanned pelt (`tanned_pelt`) | 0.15% | 0.45% | 1–1 | source default | — |
| towel hanger (`towel_hanger`) | 0.15% | 0.45% | 1–1 | source default | — |
| transponder circuit (`transponder`) | 0.15% | 0.45% | 1–1 | source default | — |
| walnuts (`walnut`) | 0.15% | 0.45% | 1–1 | source default | — |
| water faucet (`water_faucet`) | 0.15% | 0.45% | 1–1 | source default | — |
| bicycle alternator (`alternator_bicycle`) | 0.15% | 0.45% | 1–1 | source default | — |
| motorbike alternator (`alternator_motorbike`) | 0.15% | 0.45% | 1–1 | source default | — |
| bee stinger (`bee_sting`) | 0.15% | 0.45% | 1–1 | source default | — |
| bismuth (`bismuth`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| butternut husks (`butternut_husk`) | 0.15% | 0.45% | 1–1 | source default | — |
| cast iron chunk (`chunk_cast_iron`) | 0.15% | 0.45% | 1–1 | source default | — |
| copper (`copper`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| copper rod (`copper_rod`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| electric firestarter (`crude_firestarter`) | 0.15% | 0.45% | 1–1 | source default | — |
| cutting board (`cutting_board`) | 0.15% | 0.45% | 1–1 | source default | — |
| battered glass storybook (`glass_book`) | 0.15% | 0.45% | 1–1 | source default | — |
| pair of tinted glass lenses (`glass_tinted`) | 0.15% | 0.45% | 1–1 | source default | — |
| butter knife (`knife_butter`) | 0.15% | 0.45% | 1–1 | source default | — |
| lead (`lead`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| small high-quality lens (`lens_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| cast iron lump (`lump_cast_iron`) | 0.15% | 0.45% | 1–1 | source default | — |
| magnifying glass (`magnifying_glass`) | 0.15% | 0.45% | 1–1 | source default | — |
| radio (off) (`radio`) | 0.15% | 0.45% | 1–1 | source default | — |
| reading light (`reading_light`) | 0.15% | 0.45% | 1–1 | source default | — |
| alien resin chunk (`resin_chunk`) | 0.15% | 0.45% | 1–1 | source default | — |
| rubber band (`rubber_band`) | 0.15% | 0.45% | 1–1 | source default | — |
| rubber cement (`rubber_cement`) | 0.15% | 0.45% | 1–1 | source default | — |
| scrap tin (`scrap_tin`) | 0.15% | 0.45% | 1–1 | source default | — |
| small storage battery (`small_storage_battery`) | 0.15% | 0.45% | 1–1 | source default | — |
| spurge flowers (`spurge`) | 0.15% | 0.45% | 1–1 | source default | — |
| survival match (`survival_match`) | 0.15% | 0.45% | 1–1 | source default | — |
| wasp stinger (`wasp_sting`) | 0.15% | 0.45% | 1–1 | source default | — |
| zinc (`zinc_metal`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| pair of bolt cutters (`boltcutters`) | 0.15% | 0.45% | 1–1 | source default | — |
| charcoal (`charcoal`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| crude lamp oil (`crude_lamp_oil`) | 0.15% | 0.45% | 1–1 | 1–3 | plastic bottle |
| cudgel (`cudgel`) | 0.15% | 0.45% | 1–1 | source default | — |
| fishing hook (`fishing_hook_basic`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden fishing spear (`fishspear`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| glass shard (`glass_shard`) | 0.15% | 0.45% | 1–1 | source default | — |
| hammock (`hammock`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift funnel (`makeshift_funnel`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift pillow (`makeshift_pillow`) | 0.15% | 0.45% | 1–1 | source default | — |
| gravel (`material_gravel`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| rock salt (`material_rocksalt`) | 0.15% | 0.45% | 1–1 | source default | — |
| notched stick (`notched_stick`) | 0.15% | 0.45% | 1–1 | source default | — |
| synthetic fabric patch (`nylon`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay oil lamp (off) (`oil_lamp_clay`) | 0.15% | 0.45% | 1–1 | source default | — |
| pebble (`pebble`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| plastic sheet (`plastic_sheet_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| quarterstaff (`q_staff`) | 0.15% | 0.45% | 1–1 | source default | — |
| synthetic fabric scraps (`scrap_nylon`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork fur sheet (`sheet_fur_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork synthetic fabric sheet (`sheet_nylon_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| shelter kit (`shelter_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| sling (`sling`) | 0.15% | 0.45% | 1–1 | source default | — |
| slingshot (`slingshot`) | 0.15% | 0.45% | 1–1 | source default | — |
| throwing stick (`throwing_stick`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| ember carrier (`tinderbox`) | 0.15% | 0.45% | 1–1 | source default | — |
| washing kit (`wash_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| washboard (`washboard`) | 0.15% | 0.45% | 1–1 | source default | — |
| chunk of beeswax (`wax`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic bottle (`bottle_plastic`) | 0.15% | 1.80% | 1–1 | source default | — |
| steel bottle (`bottle_metal`) | 0.15% | 0.45% | 1–1 | source default | — |
| gallon jug (`jug_plastic`) | 0.15% | 0.45% | 1–1 | source default | — |
| small tin can (`can_food`) | 0.15% | 0.45% | 1–1 | source default | — |
| medium tin can (`can_medium`) | 0.15% | 0.45% | 1–1 | source default | — |
| 0.5 L glass jar (`jar_glass_sealed`) | 0.15% | 0.45% | 1–1 | source default | — |
| pot (`pot`) | 0.15% | 0.45% | 1–1 | source default | — |
| cast-iron frying pan (`pan`) | 0.15% | 0.45% | 1–1 | source default | — |
| bucket (`bucket`) | 0.15% | 0.45% | 1–1 | source default | — |
| pocket knife (`pockknife`) | 0.15% | 0.45% | 1–1 | source default | — |
| small kitchen knife (`knife_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift knife (`makeshift_knife`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone knife (`primitive_knife`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone chopper (`stone_chopper`) | 0.15% | 0.45% | 1–1 | source default | — |
| hammer (`hammer`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift hammer (`makeshift_hammer`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone hammer (`primitive_hammer`) | 0.15% | 0.45% | 1–1 | source default | — |
| screwdriver (`screwdriver`) | 0.15% | 0.45% | 1–1 | source default | — |
| wood saw (`saw`) | 0.15% | 0.45% | 1–1 | source default | — |
| hatchet (`hatchet`) | 0.15% | 0.45% | 1–1 | source default | — |
| crowbar (`crowbar`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift crowbar (`makeshift_crowbar`) | 0.15% | 0.45% | 1–1 | source default | — |
| bow fire drill (`fire_drill`) | 0.15% | 0.45% | 1–1 | source default | — |
| sewing kit (`sewing_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| bone needle (`needle_bone`) | 0.15% | 0.45% | 1–1 | source default | — |
| rock (`rock`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| sharp rock (`sharp_rock`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift brazier (`makeshift_brazier`) | 0.15% | 0.45% | 1–1 | source default | — |
| hobo stove (`hobo_stove`) | 0.15% | 0.45% | 1–1 | source default | — |
| splintered wood (`splinter`) | 0.15% | 0.45% | 1–1 | source default | — |
| spike (`spike`) | 0.15% | 0.45% | 1–1 | source default | — |
| pipe (`pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| chunk of steel (`steel_chunk`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| chunk of mild steel (`lc_steel_chunk`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| cotton patch (`cotton_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| brick (`brick`) | 0.15% | 0.45% | 1–1 | source default | — |
| pointy stick (`pointy_stick`) | 0.15% | 0.45% | 1–1 | source default | — |
| fire-hardened wooden spear (`spear_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone spear (`spear_stone`) | 0.15% | 0.45% | 1–1 | source default | — |
| simple knife spear (`spear_knife`) | 0.15% | 0.45% | 1–1 | source default | — |
| reinforced garbage bag (`bag_garbage_reinforced`) | 0.15% | 0.45% | 1–1 | source default | — |
| small cardboard box (`box_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| small wooden box (`box_small_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| small metal box (`box_small_metal`) | 0.15% | 0.45% | 1–1 | source default | — |
| fiber mat (`fiber_mat`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden billet (`billet_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| bone billet (`billet_bone`) | 0.15% | 0.45% | 1–1 | source default | — |
| primitive rock drill (`drill_rock_primitive`) | 0.15% | 0.45% | 1–1 | source default | — |
| improvised lockpick (`crude_picklock`) | 0.15% | 0.45% | 1–1 | source default | — |
| rudimentary lockpick (`emergency_lockpick`) | 0.15% | 0.45% | 1–1 | source default | — |
| mop (`mop`) | 0.15% | 0.45% | 1–1 | source default | — |
| paper wrapper (`wrapper`) | 0.15% | 0.45% | 1–1 | source default | — |
| foil wrapper (`wrapper_foil`) | 0.15% | 0.45% | 1–1 | source default | — |
| long pointy stick (`pointy_stick_long`) | 0.15% | 0.45% | 1–1 | source default | — |
| simple mace (`mace_simple`) | 0.15% | 0.45% | 1–1 | source default | — |
| spike on a stick (`spear_spike`) | 0.15% | 0.45% | 1–1 | source default | — |
| set of clothes (`outfit_storage`) | 0.15% | 0.45% | 1–1 | source default | — |
| canvas sack (`bag_canvas`) | 0.15% | 0.45% | 1–1 | source default | — |
| garbage bag (`bag_garbage`) | 0.15% | 0.45% | 1–1 | source default | — |
| hacksaw (`hacksaw`) | 0.15% | 0.45% | 1–1 | source default | — |
| wood axe (`ax`) | 0.15% | 0.45% | 1–1 | source default | — |
| bone skewer (`skewer_bone`) | 0.15% | 0.45% | 1–1 | source default | — |
| nail punch (`punch_nail`) | 0.15% | 0.45% | 1–1 | source default | — |
| butchering kit (`butchering_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| basic fishing rod (`fishing_rod_basic`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift sieve (`sieve_steel_makeshift`) | 0.15% | 0.45% | 1–1 | source default | — |
| sandleather (`leather_filing`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift homemade polehammer (`homemade_polehammer_makeshift`) | 0.15% | 0.45% | 1–1 | source default | — |
| rock in a sock (`rock_sock`) | 0.15% | 0.45% | 1–1 | source default | — |
| pipe mace (`mace_pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift machete (`makeshift_machete`) | 0.15% | 0.45% | 1–1 | source default | — |
| simple makeshift glaive (`makeshift_halberd`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden needle (`needle_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| pair of knitting needles (`knitting_needles`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic tupperware (`bowl_plastic`) | 0.15% | 0.45% | 1–1 | source default | — |
| foil cup (`cup_foil`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden bowl (`bowl_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| large wooden bowl (`bowl_wood_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| skull bowl (`bowl_skull`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay cup (`clay_cup`) | 0.15% | 0.45% | 1–1 | source default | — |
| bone punch (`punch_bone`) | 0.15% | 0.45% | 1–1 | source default | — |
| bone sewing awl (`awl_bone`) | 0.15% | 0.45% | 1–1 | source default | — |
| steel sewing awl (`awl_steel`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift copper pot (`pot_makeshift_copper`) | 0.15% | 0.45% | 1–1 | source default | — |
| improvised oven (`improvised_oven`) | 0.15% | 0.45% | 1–1 | source default | — |
| digging stick (`digging_stick`) | 0.15% | 0.45% | 1–1 | source default | — |
| homemade polehammer (`homemade_polehammer`) | 0.15% | 0.45% | 1–1 | source default | — |
| trench mace (`mace_trench`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift glaive (`makeshift_glaive`) | 0.15% | 0.45% | 1–1 | source default | — |
| sharpened pipe (`sharpened_pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| basic pipe spear (`simple_spear_pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| copper knife (`copper_knife`) | 0.15% | 0.45% | 1–1 | source default | — |
| crude steel spear (`spear_steel_crude`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift knife spear (`spear_knife_superior`) | 0.15% | 0.45% | 1–1 | source default | — |
| knife spear (`spear_knife_proper`) | 0.15% | 0.45% | 1–1 | source default | — |
| bone shiv (`bone_knife`) | 0.15% | 0.45% | 1–1 | source default | — |
| fire brick (`fire_brick`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift tree spile (`makeshift_tree_spile`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay crucible (`crucible_clay`) | 0.15% | 0.45% | 1–1 | source default | — |
| copper pot (`pot_copper`) | 0.15% | 0.45% | 1–1 | source default | — |
| aluminum pot (`pot_aluminum`) | 0.15% | 0.45% | 1–1 | source default | — |
| leather bellow (`leather_bellow`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay pot (`clay_pot`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay teapot (`clay_teapot`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay urn (`clay_urn`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay bowl (`bowl_clay`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay canister (`clay_canister`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay hydria (`clay_hydria`) | 0.15% | 0.45% | 1–1 | source default | — |
| stock pot (`stock_pot`) | 0.15% | 0.45% | 1–1 | source default | — |
| huge kitchen knife (`knife_huge`) | 0.15% | 0.45% | 1–1 | source default | — |
| large kitchen knife (`knife_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| cleaver (`knife_cleaver`) | 0.15% | 0.45% | 1–1 | source default | — |
| blade (`blade`) | 0.15% | 0.45% | 1–1 | source default | — |
| metal fileset (`metal_file`) | 0.15% | 0.45% | 1–1 | source default | — |
| pair of flatjaw tongs (`metalworking_tongs`) | 0.15% | 0.45% | 1–1 | source default | — |
| grip hook (`grip_hook`) | 0.15% | 0.45% | 1–1 | source default | — |
| tin plate (`tin_plate`) | 0.15% | 0.45% | 1–1 | source default | — |
| lump of steel (`steel_lump`) | 0.15% | 0.45% | 1–1 | 1–3 | — |
| leather tarp (`leather_tarp`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden shovel (`primitive_shovel`) | 0.15% | 0.45% | 1–1 | source default | — |
| canvas bag (`bag_canvas_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| copper hatchet (`copper_ax`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone axe head (`hand_axe`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic jerrycan (`jerrycan`) | 0.15% | 0.45% | 1–1 | source default | — |
| large sealed stomach (`large_stomach_sealed`) | 0.15% | 0.45% | 1–1 | source default | — |
| metal axe head (`makeshift_axe`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone axe (`primitive_axe`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone sickle (`sickle_stone`) | 0.15% | 0.45% | 1–1 | source default | — |
| wicker sieve (`sieve_primitive`) | 0.15% | 0.45% | 1–1 | source default | — |
| sealed stomach (`stomach_sealed`) | 0.15% | 0.45% | 1–1 | source default | — |
| scrap sword (`sword_crude`) | 0.15% | 0.45% | 1–1 | source default | — |
| scrap greatsword (`sword_crude_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| duct tape wallet (`wallet_duct_tape`) | 0.15% | 0.45% | 1–1 | source default | — |
| leather wallet (`wallet_leather`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden smoother (`wood_smoother`) | 0.15% | 0.45% | 1–1 | source default | — |
| IV bag (`bag_iv`) | 0.15% | 0.45% | 1–1 | source default | — |
| small plastic bag (`bag_plastic_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| zipper bag (`bag_zipper`) | 0.15% | 0.45% | 1–1 | source default | — |
| bike basket (`bike_basket`) | 0.15% | 0.45% | 1–1 | source default | — |
| scythe blade (`blade_scythe`) | 0.15% | 0.45% | 1–1 | source default | — |
| foldable plastic bottle (`bottle_folding`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic painkiller bottle (`bottle_plastic_pill_painkiller`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic prescription bottle (`bottle_plastic_pill_prescription`) | 0.15% | 0.45% | 1–1 | source default | — |
| small plastic seasoning bottle (`bottle_plastic_seasoning_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| cigarette pack (`box_cigarette`) | 0.15% | 0.45% | 1–1 | source default | — |
| large rifle conversion kit (`box_retool_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| SBR conversion kit (`box_retool_sbr`) | 0.15% | 0.45% | 1–1 | source default | — |
| micro-carbine conversion kit (`box_retool_sbr_micro`) | 0.15% | 0.45% | 1–1 | source default | — |
| bill (`brush_axe`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden bucket (`bucket_wood`) | 0.15% | 0.45% | 1–1 | source default | — |
| butterfly sword (`butterfly_swords`) | 0.15% | 0.45% | 1–1 | source default | — |
| milk carton (`carton_milk`) | 0.15% | 0.45% | 1–1 | source default | — |
| metalworking chisel (`chisel`) | 0.15% | 0.45% | 1–1 | source default | — |
| clamp (`clamp`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic fish trap (`fish_trap`) | 0.15% | 0.45% | 1–1 | source default | — |
| basket fish trap (`fish_trap_basket`) | 0.15% | 0.45% | 1–1 | source default | — |
| handheld glass cutter (`glass_cutter`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass plate (`glass_plate`) | 0.15% | 0.45% | 1–1 | source default | — |
| small glass tube (`glass_tube_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| bronze hammer (`hammer_bronze`) | 0.15% | 0.45% | 1–1 | source default | — |
| engineer's hammer (`hammer_sledge_engineer`) | 0.15% | 0.45% | 1–1 | source default | — |
| hand drill (`hand_drill`) | 0.15% | 0.45% | 1–1 | source default | — |
| hand pump (`hand_pump`) | 0.15% | 0.45% | 1–1 | source default | — |
| ironshod quarterstaff (`i_staff`) | 0.15% | 0.45% | 1–1 | source default | — |
| machete (`machete`) | 0.15% | 0.45% | 1–1 | source default | — |
| MRE bag (`mre_bag`) | 0.15% | 0.45% | 1–1 | source default | — |
| MRE dessert bag (`mre_bag_dessert`) | 0.15% | 0.45% | 1–1 | source default | — |
| MRE jam bag (`mre_bag_jam`) | 0.15% | 0.45% | 1–1 | source default | — |
| MRE spread bag (`mre_bag_spread`) | 0.15% | 0.45% | 1–1 | source default | — |
| MRE package (`mre_package`) | 0.15% | 0.45% | 1–1 | source default | — |
| curved needle (`needle_curved`) | 0.15% | 0.45% | 1–1 | source default | — |
| tobacco pipe (`pipe_tobacco`) | 0.15% | 0.45% | 1–1 | source default | — |
| vacuum-packed bag (`plastic_bag_vac`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic plate (`plastic_plate`) | 0.15% | 0.45% | 1–1 | source default | — |
| locking pliers (`pliers_locking`) | 0.15% | 0.45% | 1–1 | source default | — |
| bronze wood saw (`saw_bronze`) | 0.15% | 0.45% | 1–1 | source default | — |
| screwdriver set (`screwdriver_set`) | 0.15% | 0.45% | 1–1 | source default | — |
| small biogas tank (`small_biogas_tank`) | 0.15% | 0.45% | 1–1 | source default | — |
| storage line (`storage_line`) | 0.15% | 0.45% | 1–1 | source default | — |
| adjustable wrench (`wrench`) | 0.15% | 0.45% | 1–1 | source default | — |
| large adjustable wrench (`wrench_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| small adjustable wrench (`wrench_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| acetylene cooker (`acetylene_cooker`) | 0.15% | 0.45% | 1–1 | source default | — |
| adobe brick (`adobe_brick`) | 0.15% | 0.45% | 1–1 | source default | — |
| superalloy sheet (`alloy_sheet`) | 0.15% | 0.45% | 1–1 | source default | — |
| aluminum frying pan (`aluminum_pan`) | 0.15% | 0.45% | 1–1 | source default | — |
| bolted battle axe (`ax_sheets_bolted`) | 0.15% | 0.45% | 1–1 | source default | — |
| welded battle axe (`ax_sheets_welded`) | 0.15% | 0.45% | 1–1 | source default | — |
| tiger claws (`bagh_nakha`) | 0.15% | 0.45% | 1–1 | source default | — |
| balloon (`balloon`) | 0.15% | 0.45% | 1–1 | source default | — |
| aluminum bat (`bat_metal`) | 0.15% | 0.45% | 1–1 | source default | — |
| battle axe (`battleaxe`) | 0.15% | 0.45% | 1–1 | source default | — |
| tongue-and-groove pliers (`big_pliers`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass seasoning bottle (`bottle_glass_seasoning`) | 0.15% | 0.45% | 1–1 | source default | — |
| tiny plastic bottle (`bottle_plastic_tiny`) | 0.15% | 0.45% | 1–1 | source default | — |
| boulder anvil (`boulder_anvil`) | 0.15% | 0.45% | 1–1 | source default | — |
| bow saw (`bow_saw`) | 0.15% | 0.45% | 1–1 | source default | — |
| coconut bowl (`bowl_coconut`) | 0.15% | 0.45% | 1–1 | source default | — |
| pewter bowl (`bowl_pewter`) | 0.15% | 0.45% | 1–1 | source default | — |
| boxcutter knife (`boxcutter`) | 0.15% | 0.45% | 1–1 | source default | — |
| aluminum can (`can_drink`) | 0.15% | 0.45% | 1–1 | source default | — |
| large tin can (`can_food_big`) | 0.15% | 0.45% | 1–1 | source default | — |
| empty canister (`canister_empty`) | 0.15% | 0.45% | 1–1 | source default | — |
| casserole pot (`casserole`) | 0.15% | 0.45% | 1–1 | source default | — |
| ceramic bowl (`ceramic_bowl`) | 0.15% | 0.45% | 1–1 | source default | — |
| ceramic cup (`ceramic_cup`) | 0.15% | 0.45% | 1–1 | source default | — |
| coffee mug (`ceramic_mug`) | 0.15% | 0.45% | 1–1 | source default | — |
| ceramic plate (`ceramic_plate`) | 0.15% | 0.45% | 1–1 | source default | — |
| ceramic shard (`ceramic_shard`) | 0.15% | 0.45% | 1–1 | source default | — |
| coal/charcoal cooker (`charcoal_cooker`) | 0.15% | 0.45% | 1–1 | source default | — |
| coffeemaker (`coffeemaker`) | 0.15% | 0.45% | 1–1 | source default | — |
| coffee pot (`coffeepot`) | 0.15% | 0.45% | 1–1 | source default | — |
| condom (`condom`) | 0.15% | 0.45% | 1–1 | source default | — |
| copper frying pan (`copper_pan`) | 0.15% | 0.45% | 1–1 | source default | — |
| cordless drill (`cordless_drill`) | 0.15% | 0.45% | 1–1 | source default | — |
| cordless impact wrench (`cordless_impact_wrench`) | 0.15% | 0.45% | 1–1 | source default | — |
| crucible (`crucible`) | 0.15% | 0.45% | 1–1 | source default | — |
| electrohack (`electrohack`) | 0.15% | 0.45% | 1–1 | source default | — |
| hexamine stove (`esbit_stove`) | 0.15% | 0.45% | 1–1 | source default | — |
| pump fire drill (`fire_drill_large`) | 0.15% | 0.45% | 1–1 | source default | — |
| two-piece fishing rod (`fishing_rod_2pc`) | 0.15% | 0.45% | 1–1 | source default | — |
| pro fishing rod (`fishing_rod_professional`) | 0.15% | 0.45% | 1–1 | source default | — |
| telescoping fishing rod (`fishing_rod_tele`) | 0.15% | 0.45% | 1–1 | source default | — |
| gasoline cooker (`gasoline_cooker`) | 0.15% | 0.45% | 1–1 | source default | — |
| drinking glass (`glass`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass bowl (`glass_bowl`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden hand fishing reel (`hoboreel`) | 0.15% | 0.45% | 1–1 | source default | — |
| cast-iron pot (`iron_pot`) | 0.15% | 0.45% | 1–1 | source default | — |
| kettle (`kettle`) | 0.15% | 0.45% | 1–1 | source default | — |
| survival knife (`knife_rambo`) | 0.15% | 0.45% | 1–1 | source default | — |
| lunchbox (`lunchbox`) | 0.15% | 0.45% | 1–1 | source default | — |
| maker kit box (`maker_kit_box`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift pressure cooker (`makeshift_pressure_cooker`) | 0.15% | 0.45% | 1–1 | source default | — |
| chunk of aluminum (`material_aluminium_ingot`) | 0.15% | 0.45% | 1–1 | source default | — |
| mess kit (`mess_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| metal tank (2 L) (`metal_tank_little`) | 0.15% | 0.45% | 1–1 | source default | — |
| needle (`needle_steel`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic paint can (`paint_can_plastic`) | 0.15% | 0.45% | 1–1 | source default | — |
| metal paint can (`paint_can_steel`) | 0.15% | 0.45% | 1–1 | source default | — |
| water pipe (`pipe_water`) | 0.15% | 0.45% | 1–1 | source default | — |
| kiddie bowl (`plastic_bowl_kids`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic hand fishing reel (`plastichoboreel`) | 0.15% | 0.45% | 1–1 | source default | — |
| propane cooker (`propane_cooker`) | 0.15% | 0.45% | 1–1 | source default | — |
| sippy cup (`sippy_cup`) | 0.15% | 0.45% | 1–1 | source default | — |
| 10.1 ounce squeeze tube (`squeeze_tube`) | 0.15% | 0.45% | 1–1 | source default | — |
| 2.8 ounce squeeze tube (`squeeze_tube_small`) | 0.15% | 0.45% | 1–1 | source default | — |
| steel frying pan (`steel_pan`) | 0.15% | 0.45% | 1–1 | source default | — |
| survival kit box (`survival_kit_box`) | 0.15% | 0.45% | 1–1 | source default | — |
| survivor mess kit (`survivor_mess_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| tailor's kit (`tailors_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| steel tankard (`tankard_metal`) | 0.15% | 0.45% | 1–1 | source default | — |
| teapot (`teapot`) | 0.15% | 0.45% | 1–1 | source default | — |
| thread cutting set (`thread_cutting_set`) | 0.15% | 0.45% | 1–1 | source default | — |
| tin cup (`tin_cup`) | 0.15% | 0.45% | 1–1 | source default | — |
| tin snips (`tin_snips`) | 0.15% | 0.45% | 1–1 | source default | — |
| pair of kitchen tongs (`tongs`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic tumbler (`tumbler_plastic`) | 0.15% | 0.45% | 1–1 | source default | — |
| wine glass (`wine_glass`) | 0.15% | 0.45% | 1–1 | source default | — |
| plastic bag (`bag_plastic`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass bottle (`bottle_glass`) | 0.15% | 0.45% | 1–1 | source default | — |
| glass shiv (`glass_shiv`) | 0.15% | 0.45% | 1–1 | source default | — |
| rubber hose (`hose`) | 0.15% | 0.45% | 1–1 | source default | — |
| 3 L glass jar (`jar_3l_glass_sealed`) | 0.15% | 0.45% | 1–1 | source default | — |
| clay jug (`jug_clay`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift hand drill (`makeshift_hand_drill`) | 0.15% | 0.45% | 1–1 | source default | — |
| mortar and pestle (`mortar_pestle`) | 0.15% | 0.45% | 1–1 | source default | — |
| pliers (`pliers`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone adze (`primitive_adze`) | 0.15% | 0.45% | 1–1 | source default | — |
| pair of office scissors (`scissors`) | 0.15% | 0.45% | 1–1 | source default | — |
| stone chisel (`stone_chisel`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden tankard (`tankard_wooden`) | 0.15% | 0.45% | 1–1 | source default | — |
| 1L aluminum ingot (`1l_aluminum`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| 1L brass ingot (`1l_brass`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| 1L bronze ingot (`1l_bronze`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| 1L copper ingot (`1l_copper`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| 1 L lead ingot (`1l_lead`) | 0.15% | 0.45% | 1–1 | source default | — |
| 1 L silver ingot (`1l_silver`) | 0.15% | 0.45% | 1–1 | source default | — |
| 1 L tin ingot (`1l_tin`) | 0.15% | 0.45% | 1–1 | source default | — |
| 1L zinc ingot (`1l_zinc`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| body bag (`bag_body_bag`) | 0.15% | 0.45% | 1–1 | source default | — |
| bronze nail (`bronze_nail`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| chunk of budget steel (`budget_steel_chunk`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| lump of budget steel (`budget_steel_lump`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| bundle of copper tubing (`bundle_copper_pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| bundle of javelins (`bundle_javelin`) | 0.15% | 0.45% | 1–1 | source default | — |
| bundle of synthetic fabric (`bundle_nylon`) | 0.15% | 0.45% | 1–1 | source default | — |
| bundle of pipes (`bundle_pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| bronze button (`button_bronze`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| steel button (`button_steel`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| piece of cardboard (`cardboard`) | 0.15% | 0.45% | 1–1 | source default | — |
| hardened steel chain link (`ch_chain_link`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| hardened steel wire (`ch_wire`) | 0.15% | 0.45% | 1–1 | source default | — |
| chunk of rubber (`chunk_rubber`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| circular saw (off) (`circsaw_off`) | 0.15% | 0.45% | 1–1 | source default | — |
| coin wrapper (`coin_wrapper`) | 0.15% | 0.45% | 1–1 | source default | — |
| crude bronze nail (`crude_bronze_nail`) | 0.15% | 0.45% | 1–1 | source default | — |
| copper tubing (`cu_pipe`) | 0.15% | 0.45% | 1–1 | source default | — |
| damaged shelter kit (`damaged_shelter_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| dried seaweed (`dry_seaweed`) | 0.15% | 0.45% | 1–1 | source default | — |
| pile of dried seaweed (`dry_seaweed_pile`) | 0.15% | 0.45% | 1–1 | source default | — |
| electric forge (`forge`) | 0.15% | 0.45% | 1–1 | source default | — |
| fuse (`fuse`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| plastic gasket set (`gasket_plastic_set`) | 0.15% | 0.45% | 1–1 | source default | — |
| gold (`gold_small`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| high steel chain link (`hc_chain_link`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| high steel wire (`hc_wire`) | 0.15% | 0.45% | 1–1 | source default | — |
| heavy-duty flashlight (off) (`heavy_flashlight`) | 0.15% | 0.45% | 1–1 | source default | — |
| wooden javelin (`javelin`) | 0.15% | 0.45% | 1–1 | source default | — |
| kerosene (`lamp_oil`) | 0.15% | 0.45% | 1–1 | 1–10 | plastic bottle |
| mild steel chain link (`lc_chain_link`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| long pole (`long_pole`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift stethoscope (`makeshift_stethoscope`) | 0.15% | 0.45% | 1–1 | source default | — |
| makeshift welding blanket (`makeshift_welding_blanket`) | 0.15% | 0.45% | 1–1 | source default | — |
| medium steel chain link (`mc_chain_link`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| medium steel wire (`mc_wire`) | 0.15% | 0.45% | 1–1 | source default | — |
| miscellaneous repair kit (`misc_repairkit`) | 0.15% | 0.45% | 1–1 | source default | — |
| adobe mortar (`mortar_adobe`) | 0.15% | 0.45% | 1–1 | source default | — |
| Nomex patch (`nomex`) | 0.15% | 0.45% | 1–1 | source default | — |
| manual oil press (`oil_press_manual`) | 0.15% | 0.45% | 1–1 | source default | — |
| oven control panel (`oven_controls`) | 0.15% | 0.45% | 1–1 | source default | — |
| pilot light (`pilot_light`) | 0.15% | 0.45% | 1–1 | source default | — |
| tempered steel chain link (`qt_chain_link`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| tempered steel wire (`qt_wire`) | 0.15% | 0.45% | 1–1 | source default | — |
| rebar (`rebar`) | 0.15% | 0.45% | 1–1 | source default | — |
| fiber insulation batt (`rock_wool_bat`) | 0.15% | 0.45% | 1–1 | source default | — |
| chunk of brass (`scrap_brass`) | 0.15% | 0.45% | 1–1 | source default | — |
| patchwork Nomex sheet (`sheet_nomex_patchwork`) | 0.15% | 0.45% | 1–1 | source default | — |
| shredded rubber (`shredded_rubber`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| silver (`silver_small`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| swage and die set (`swage`) | 0.15% | 0.45% | 1–1 | source default | — |
| Nomex thread (`thread_nomex`) | 0.15% | 0.45% | 1–1 | 10–40 | — |
| toolbox (`toolbox_empty`) | 0.15% | 0.45% | 1–1 | source default | — |
| heavy-duty headlamp (`wearable_big_light`) | 0.15% | 0.45% | 1–1 | source default | — |
| headlamp (`wearable_light`) | 0.15% | 0.45% | 1–1 | source default | — |
| arc welder (`welder`) | 0.15% | 0.45% | 1–1 | source default | — |
| high-temperature welding kit (`welding_kit`) | 0.15% | 0.45% | 1–1 | source default | — |
| X-Acto knife (`xacto`) | 0.15% | 0.45% | 1–1 | source default | — |

## Contents: discovery_backpack

2–3 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| clean water (`water_clean`) | 3.08% | 7.50% | 1–1 | 1–3 | plastic bottle |
| pile of straw (`straw_pile`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| canned beans (`can_beans`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| bread (`bread`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| hardtack cracker (`hardtack_cracker`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| potato chips (`chips`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| cookie (`cookies`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| peanut butter candy (`candy`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| protein ration (`protein_bar_evac`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| apple (`apple`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| handful of blueberries (`blueberries`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| handful of raspberries (`raspberries`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| handful of blackberries (`blackberries`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| handful of strawberries (`strawberries`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| cooked meat (`meat_cooked`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| dehydrated meat (`dry_meat`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| meat jerky (`jerky`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| smoked meat (`meat_smoked`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| cooked fish (`fish_cooked`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| cooked mushroom (`mushroom_cooked`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| cooked fruit (`fruit_cooked`) | 3.08% | 7.50% | 1–1 | 1–3 | 3 L glass jar |
| cooked plant marrow (`veggy_cooked`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| cooked poultry (`poultry_cooked`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| cooked fatty meat (`meat_fatty_cooked`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| roasted bone marrow (`cooked_marrow`) | 3.08% | 7.50% | 1–1 | 1–3 | — |
| pocket knife (`pockknife`) | 4.62% | 11.12% | 1–1 | source default | — |
| short rope (`rope_6`) | 4.62% | 11.12% | 1–1 | source default | — |
| bandage (`bandages`) | 4.62% | 11.12% | 1–1 | source default | — |
| plastic bottle (`bottle_plastic`) | 4.62% | 18.07% | 1–1 | source default | — |
| matchbook (`matches`) | 4.62% | 11.12% | 1–1 | source default | — |

## Contents: field

2–3 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| withered plant (`withered`) | 25.42% | 51.45% | 2–4 | source default | — |
| pile of straw (`straw_pile`) | 16.95% | 36.87% | 1–2 | source default | — |
| rock (`rock`) | 12.71% | 28.65% | 1–2 | source default | — |
| wild vegetables (`veggy_wild`) | 12.71% | 28.65% | 1–2 | source default | — |
| wild root (`carrot_wild`) | 8.47% | 19.78% | 1–1 | source default | — |
| dandelion (`raw_dandelion`) | 8.47% | 19.78% | 1–3 | source default | — |
| stick (`stick`) | 8.47% | 19.78% | 1–1 | source default | — |
| flaking rock (`rock_flaking`) | 4.24% | 10.24% | 1–1 | source default | — |
| hickory root (`hickory_root`) | 0.85% | 2.10% | 1–1 | source default | — |
| wild herbs (`wild_herbs`) | 0.85% | 2.10% | 1–1 | 1–1 | — |
| piece of willowbark (`willowbark`) | 0.85% | 2.10% | 1–1 | source default | — |

## Contents: car_wreck

2–4 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| scrap metal (`scrap`) | 20.00% | 47.95% | 2–4 | source default | — |
| pipe (`pipe`) | 10.00% | 26.83% | 1–2 | source default | — |
| nut and bolt (`nuts_bolts`) | 10.00% | 26.83% | 1–1 | 4–12 | — |
| spring (`spring`) | 6.00% | 16.84% | 1–1 | source default | — |
| small metal sheet (`sheet_metal_small`) | 8.00% | 21.95% | 1–2 | source default | — |
| sheet metal (`sheet_metal`) | 3.00% | 8.70% | 1–1 | source default | — |
| duct tape (`duct_tape`) | 5.00% | 14.19% | 1–1 | 20–60 | — |
| lighter (`lighter`) | 5.00% | 14.19% | 1–1 | 10–50 | — |
| plastic bottle (`bottle_plastic`) | 8.00% | 21.95% | 1–1 | source default | — |
| potato chips (`chips`) | 5.00% | 14.19% | 1–1 | source default | — |
| peanut butter candy (`candy`) | 5.00% | 14.19% | 1–1 | source default | — |
| small backpack (`backpack_small`) | 0.67% | 1.99% | 1–1 | source default | — |
| crowbar (`crowbar`) | 3.00% | 8.70% | 1–1 | source default | — |
| short rope (`rope_6`) | 4.00% | 11.48% | 1–1 | source default | — |
| plastic chunk (`plastic_chunk`) | 6.00% | 16.84% | 1–3 | source default | — |

## Contents: hills

2–3 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| rock (`rock`) | 29.13% | 57.08% | 2–5 | source default | — |
| flaking rock (`rock_flaking`) | 19.42% | 41.37% | 1–2 | source default | — |
| flint (`flint`) | 9.71% | 22.43% | 1–1 | source default | — |
| large rock (`rock_large`) | 9.71% | 22.43% | 1–1 | source default | — |
| stick (`stick`) | 9.71% | 22.43% | 1–1 | source default | — |
| withered plant (`withered`) | 9.71% | 22.43% | 1–2 | source default | — |
| pinecone (`pinecone`) | 4.85% | 11.67% | 1–2 | source default | — |
| chunk of sulfur (`chunk_sulfur`) | 0.97% | 2.41% | 1–1 | 1–1 | — |
| soil (`material_soil`) | 0.97% | 2.41% | 1–1 | 10–40 | — |
| large clay pot (`clay_watercont`) | 2.91% | 7.11% | 1–1 | source default | — |
| sand (`material_sand`) | 2.91% | 7.11% | 1–1 | source default | — |

## Contents: house_common

3–5 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| cotton sheet (`sheet_cotton`) | 5.32% | 19.56% | 1–2 | source default | — |
| t-shirt (`tshirt`) | 3.55% | 13.41% | 1–1 | source default | — |
| socks (pair) (`socks`) | 2.84% | 10.85% | 1–1 | source default | — |
| jeans (`jeans`) | 2.84% | 10.85% | 1–1 | source default | — |
| hoodie (`hoodie`) | 2.13% | 8.23% | 1–1 | source default | — |
| sweater (`sweater`) | 1.77% | 6.90% | 1–1 | source default | — |
| blanket (`blanket`) | 2.13% | 8.23% | 1–1 | source default | — |
| sheet (`sheet`) | 1.77% | 6.90% | 1–1 | source default | — |
| canned beans (`can_beans`) | 3.55% | 13.41% | 1–1 | source default | — |
| canned tomato (`can_tomato`) | 2.84% | 10.85% | 1–1 | source default | — |
| bread (`bread`) | 1.77% | 6.90% | 1–1 | source default | — |
| cookie (`cookies`) | 2.13% | 8.23% | 1–1 | source default | — |
| potato chips (`chips`) | 2.13% | 8.23% | 1–1 | source default | — |
| peanut butter candy (`candy`) | 2.13% | 8.23% | 1–1 | source default | — |
| clean water (`water_clean`) | 2.84% | 10.85% | 1–1 | source default | plastic bottle |
| plastic bottle (`bottle_plastic`) | 2.84% | 20.75% | 1–1 | source default | — |
| pot (`pot`) | 1.42% | 5.55% | 1–1 | source default | — |
| cast-iron frying pan (`pan`) | 1.06% | 4.18% | 1–1 | source default | — |
| small kitchen knife (`knife_small`) | 1.77% | 6.90% | 1–1 | source default | — |
| matchbook (`matches`) | 2.84% | 10.85% | 1–1 | 5–20 | — |
| lighter (`lighter`) | 1.77% | 6.90% | 1–1 | 20–100 | — |
| sewing kit (`sewing_kit`) | 1.06% | 4.18% | 1–1 | 50–200 | — |
| thread (`thread`) | 2.13% | 8.23% | 1–1 | 20–100 | — |
| nail (`nail`) | 2.13% | 8.23% | 1–1 | 10–40 | — |
| duct tape (`duct_tape`) | 1.77% | 6.90% | 1–1 | 50–200 | — |
| Cooking on a Budget (`cookbook`) | 1.06% | 4.18% | 1–1 | source default | — |
| 101 Crafts for Beginners (`manual_fabrication`) | 0.71% | 2.81% | 1–1 | source default | — |
| Sew What? Clothing! (`manual_tailor`) | 0.71% | 2.81% | 1–1 | source default | — |
| Pocket Survival Guide (`pocket_survival`) | 0.71% | 2.81% | 1–1 | source default | — |
| The Big Book of First Aid (`manual_first_aid`) | 0.71% | 2.81% | 1–1 | source default | — |
| aspirin (`aspirin`) | 2.13% | 8.23% | 1–1 | 5–20 | — |
| adhesive bandage (`adhesive_bandages`) | 2.13% | 8.23% | 1–1 | 3–10 | — |
| bandage (`bandages`) | 1.42% | 5.55% | 1–1 | 2–6 | — |
| small backpack (`backpack_small`) | 0.24% | 0.94% | 1–1 | source default | — |
| baseball cap (`hat_ball`) | 1.42% | 5.55% | 1–1 | source default | — |
| pair of light gloves (`gloves_light`) | 1.42% | 5.55% | 1–1 | source default | — |
| boots (pair) (`boots`) | 1.42% | 5.55% | 1–1 | source default | — |
| sneakers (pair) (`sneakers`) | 1.77% | 6.90% | 1–1 | source default | — |
| light jacket (`jacket_light`) | 1.42% | 5.55% | 1–1 | source default | — |
| rollmat (`rollmat`) | 0.71% | 2.81% | 1–1 | source default | — |
| screwdriver (`screwdriver`) | 2.13% | 8.23% | 1–1 | source default | — |
| hammer (`hammer`) | 1.77% | 6.90% | 1–1 | source default | — |
| short string (`string_6`) | 2.13% | 8.23% | 1–1 | source default | — |
| long string (`string_36`) | 1.06% | 4.18% | 1–1 | source default | — |
| cotton scraps (`scrap_cotton`) | 2.84% | 10.85% | 1–4 | source default | — |
| canvas sack (`bag_canvas`) | 0.71% | 2.81% | 1–2 | source default | — |
| garbage bag (`bag_garbage`) | 0.71% | 2.81% | 1–2 | source default | — |
| large folded cardboard box (`box_large_folded`) | 0.71% | 2.81% | 1–2 | source default | — |
| folded cardboard box (`box_medium_folded`) | 0.71% | 2.81% | 1–2 | source default | — |
| small folded cardboard box (`box_small_folded`) | 0.71% | 2.81% | 1–2 | source default | — |
| felt patch (`felt_patch`) | 0.71% | 2.81% | 1–2 | source default | — |
| paper (`paper`) | 0.71% | 2.81% | 1–2 | source default | — |
| plastic shopping bag (`plastic_shopping_bag`) | 0.71% | 2.81% | 1–2 | source default | — |
| canvas scraps (`scrap_canvas`) | 0.71% | 2.81% | 1–2 | source default | — |
| patchwork felt sheet (`sheet_felt_patchwork`) | 0.71% | 2.81% | 1–2 | source default | — |
| wool staple (`wool_staple`) | 0.71% | 2.81% | 1–2 | source default | — |
| yellow carpet (`y_carpet`) | 0.71% | 2.81% | 1–2 | source default | — |
| antiparasitic drug (`antiparasitic`) | 0.71% | 2.81% | 1–1 | 1–3 | — |
| basic chemistry set (`chemistry_set_basic`) | 0.35% | 1.41% | 1–1 | source default | — |
| chemistry set (`chemistry_set`) | 0.35% | 1.41% | 1–1 | source default | — |
| Chemistry for Kids: Awesome Science Experiments that Really Work (`basic_chemistry`) | 0.35% | 1.41% | 1–1 | source default | — |
| multimeter (`multimeter`) | 0.35% | 1.41% | 1–1 | source default | — |
| bleached makeshift bandage (`bandages_makeshift_bleached`) | 0.35% | 1.41% | 1–1 | source default | — |
| bleach (`bleach`) | 0.71% | 2.81% | 1–1 | 1–2 | gallon jug |
| yeast (`yeast`) | 0.35% | 1.41% | 1–1 | 1–1 | — |
| piece of cardboard (`cardboard`) | 0.35% | 1.41% | 1–1 | source default | — |
| instant coffee mix (`instant_coffee`) | 0.35% | 1.41% | 1–1 | 1–1 | — |
| roasted coffee beans (`roasted_coffee_bean`) | 0.35% | 1.41% | 1–1 | 1–1 | — |

## Contents: house_kitchen

2–4 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| canned beans (`can_beans`) | 6.98% | 19.36% | 1–1 | source default | — |
| canned tomato (`can_tomato`) | 5.58% | 15.73% | 1–1 | source default | — |
| bread (`bread`) | 2.79% | 8.12% | 1–1 | source default | — |
| cookie (`cookies`) | 3.72% | 10.71% | 1–1 | source default | — |
| potato chips (`chips`) | 3.72% | 10.71% | 1–1 | source default | — |
| peanut butter candy (`candy`) | 3.72% | 10.71% | 1–1 | source default | — |
| hardtack cracker (`hardtack_cracker`) | 1.86% | 5.47% | 1–1 | source default | — |
| clean water (`water_clean`) | 4.65% | 13.25% | 1–1 | source default | plastic bottle |
| pot (`pot`) | 2.79% | 8.12% | 1–1 | source default | — |
| cast-iron frying pan (`pan`) | 2.33% | 6.80% | 1–1 | source default | — |
| small kitchen knife (`knife_small`) | 3.72% | 10.71% | 1–1 | source default | — |
| matchbook (`matches`) | 3.72% | 10.71% | 1–1 | 5–20 | — |
| lighter (`lighter`) | 2.33% | 6.80% | 1–1 | 20–100 | — |
| plastic bottle (`bottle_plastic`) | 3.72% | 26.27% | 1–1 | source default | — |
| 0.5 L glass jar (`jar_glass_sealed`) | 1.86% | 5.47% | 1–1 | source default | — |
| bucket (`bucket`) | 1.40% | 4.12% | 1–1 | source default | — |
| duct tape (`duct_tape`) | 1.86% | 5.47% | 1–1 | 50–150 | — |
| portion of raw bone marrow (`bone_marrow`) | 0.93% | 2.76% | 1–2 | source default | — |
| coffee powder (`coffee_raw`) | 0.93% | 2.76% | 1–2 | source default | — |
| vegetable cooking oil (`cooking_oil`) | 0.93% | 2.76% | 1–2 | source default | — |
| corn cob (`corn`) | 0.93% | 2.76% | 1–2 | source default | — |
| cotton boll (`cotton_boll`) | 0.93% | 2.76% | 1–2 | source default | — |
| dried lentils (`dry_lentils`) | 0.93% | 2.76% | 1–2 | source default | — |
| dried rice (`dry_rice`) | 0.93% | 2.76% | 1–2 | source default | — |
| fillet of fish (`fish`) | 0.93% | 2.76% | 1–2 | source default | — |
| herbal tea bag (`herbal_tea_bag`) | 0.93% | 2.76% | 1–2 | source default | — |
| popcorn kernels (`kernels`) | 0.93% | 2.76% | 1–2 | source default | — |
| mushroom (`mushroom`) | 0.93% | 2.76% | 1–2 | source default | — |
| oatmeal (`oatmeal`) | 0.93% | 2.76% | 1–2 | source default | — |
| chunk of porkbelly (`porkbelly`) | 0.93% | 2.76% | 1–2 | source default | — |
| chunk of poultry meat (`poultry`) | 0.93% | 2.76% | 1–2 | source default | — |
| water purification tablet (`pur_tablets`) | 0.93% | 2.76% | 1–2 | source default | — |
| Italian seasoning (`seasoning_italian`) | 0.93% | 2.76% | 1–2 | source default | — |
| black tea leaves (`tea_raw`) | 0.93% | 2.76% | 1–2 | source default | — |
| triffid flesh (`veggy`) | 0.93% | 2.76% | 1–2 | source default | — |
| murky water (`water_murky`) | 0.93% | 2.76% | 1–2 | source default | — |
| basic chemistry set (`chemistry_set_basic`) | 0.47% | 1.39% | 1–1 | source default | — |
| chemistry set (`chemistry_set`) | 0.47% | 1.39% | 1–1 | source default | — |
| Chemistry for Kids: Awesome Science Experiments that Really Work (`basic_chemistry`) | 0.47% | 1.39% | 1–1 | source default | — |
| multimeter (`multimeter`) | 0.47% | 1.39% | 1–1 | source default | — |
| chaff (`chaff`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| commercial fertilizer (`fertilizer_commercial`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| instant coffee mix (`instant_coffee`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| nut paste (`paste_nut`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| raw popcorn (`popcorn_raw`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| press cake (`press_cake`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| roasted coffee beans (`roasted_coffee_bean`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| threshed lentils (`threshed_lentils`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| yeast (`yeast`) | 0.93% | 2.76% | 1–1 | 1–1 | — |
| glass bottle (`bottle_glass`) | 1.40% | 4.12% | 1–1 | source default | — |
| bottle gourd (`bottle_gourd`) | 1.40% | 4.12% | 1–1 | source default | — |
| plastic bottle (`bottle_plastic`) | 1.40% | 26.27% | 1–1 | source default | — |
| medium tin can (`can_medium`) | 1.40% | 4.12% | 1–1 | source default | — |
| dried bottle gourd (`dry_bottle_gourd`) | 1.40% | 4.12% | 1–1 | source default | — |
| 3 L glass jar (`jar_3l_glass_sealed`) | 1.40% | 4.12% | 1–1 | source default | — |
| clay jug (`jug_clay`) | 1.40% | 4.12% | 1–1 | source default | — |
| gallon jug (`jug_plastic`) | 1.40% | 4.12% | 1–1 | source default | — |
| rock salt (`material_rocksalt`) | 1.40% | 4.12% | 1–1 | source default | — |
| makeshift pot (`pot_makeshift`) | 1.40% | 4.12% | 1–1 | source default | — |
| chunk of fat (`fat`) | 1.40% | 4.12% | 1–1 | source default | — |

## Contents: house_clothes

2–4 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| t-shirt (`tshirt`) | 7.01% | 19.45% | 1–1 | source default | — |
| socks (pair) (`socks`) | 5.61% | 15.80% | 1–2 | source default | — |
| jeans (`jeans`) | 8.41% | 22.97% | 1–1 | source default | — |
| pants (`pants`) | 8.41% | 22.97% | 1–1 | source default | — |
| hoodie (`hoodie`) | 3.74% | 10.76% | 1–1 | source default | — |
| sweater (`sweater`) | 2.80% | 8.15% | 1–1 | source default | — |
| pair of light gloves (`gloves_light`) | 2.34% | 6.83% | 1–1 | source default | — |
| knit hat (`hat_knit`) | 1.87% | 5.49% | 1–1 | source default | — |
| baseball cap (`hat_ball`) | 1.87% | 5.49% | 1–1 | source default | — |
| light jacket (`jacket_light`) | 2.34% | 6.83% | 1–1 | source default | — |
| sneakers (pair) (`sneakers`) | 2.80% | 8.15% | 1–1 | source default | — |
| boots (pair) (`boots`) | 1.87% | 5.49% | 1–1 | source default | — |
| cotton scraps (`scrap_cotton`) | 8.41% | 22.97% | 2–5 | source default | — |
| cotton sheet (`sheet_cotton`) | 8.41% | 22.97% | 1–1 | source default | — |
| canvas sack (`bag_canvas`) | 0.93% | 2.77% | 1–2 | source default | — |
| garbage bag (`bag_garbage`) | 0.93% | 2.77% | 1–2 | source default | — |
| large folded cardboard box (`box_large_folded`) | 0.93% | 2.77% | 1–2 | source default | — |
| folded cardboard box (`box_medium_folded`) | 0.93% | 2.77% | 1–2 | source default | — |
| small folded cardboard box (`box_small_folded`) | 0.93% | 2.77% | 1–2 | source default | — |
| felt patch (`felt_patch`) | 0.93% | 2.77% | 1–2 | source default | — |
| paper (`paper`) | 0.93% | 2.77% | 1–2 | source default | — |
| plastic shopping bag (`plastic_shopping_bag`) | 0.93% | 2.77% | 1–2 | source default | — |
| canvas scraps (`scrap_canvas`) | 0.93% | 2.77% | 1–2 | source default | — |
| patchwork felt sheet (`sheet_felt_patchwork`) | 0.93% | 2.77% | 1–2 | source default | — |
| wool staple (`wool_staple`) | 0.93% | 2.77% | 1–2 | source default | — |
| yellow carpet (`y_carpet`) | 0.93% | 2.77% | 1–2 | source default | — |
| blanket (`blanket`) | 8.41% | 22.97% | 1–1 | source default | — |
| long string (`string_36`) | 8.41% | 22.97% | 1–1 | source default | — |
| basic chemistry set (`chemistry_set_basic`) | 0.47% | 1.39% | 1–1 | source default | — |
| chemistry set (`chemistry_set`) | 0.47% | 1.39% | 1–1 | source default | — |
| Chemistry for Kids: Awesome Science Experiments that Really Work (`basic_chemistry`) | 0.47% | 1.39% | 1–1 | source default | — |
| multimeter (`multimeter`) | 0.47% | 1.39% | 1–1 | source default | — |
| sheet (`sheet`) | 1.40% | 4.14% | 1–1 | source default | — |
| canvas sheet (`sheet_canvas`) | 1.40% | 4.14% | 1–1 | source default | — |
| heavy duty thread (`thread_canvas`) | 1.40% | 4.14% | 1–1 | source default | — |

## Contents: house_books

1–2 draws per search/exploration.

| Item | Per draw | At least once per search | Count | Charges | Container |
|---|---:|---:|---|---|---|
| Cooking on a Budget (`cookbook`) | 13.51% | 19.36% | 1–1 | source default | — |
| 101 Crafts for Beginners (`manual_fabrication`) | 10.81% | 15.63% | 1–1 | source default | — |
| Sew What? Clothing! (`manual_tailor`) | 10.81% | 15.63% | 1–1 | source default | — |
| Pocket Survival Guide (`pocket_survival`) | 10.81% | 15.63% | 1–1 | source default | — |
| Pitching a Tent (`manual_survival`) | 8.11% | 11.83% | 1–1 | source default | — |
| The Big Book of First Aid (`manual_first_aid`) | 8.11% | 11.83% | 1–1 | source default | — |
| Under the Hood (`manual_mechanics`) | 8.11% | 11.83% | 1–1 | source default | — |
| Close Quarter Fighting Manual (`manual_melee`) | 5.41% | 7.96% | 1–1 | source default | — |
| The Book of Dances (`manual_dodge`) | 5.41% | 7.96% | 1–1 | source default | — |
| basic chemistry set (`chemistry_set_basic`) | 2.70% | 4.02% | 1–1 | source default | — |
| chemistry set (`chemistry_set`) | 2.70% | 4.02% | 1–1 | source default | — |
| Chemistry for Kids: Awesome Science Experiments that Really Work (`basic_chemistry`) | 2.70% | 4.02% | 1–1 | source default | — |
| multimeter (`multimeter`) | 2.70% | 4.02% | 1–1 | source default | — |
| Historic Warfare: The Bronze Age (`bronze_mag`) | 2.70% | 4.02% | 1–1 | source default | — |
| Studies in Historic Armorsmithing (`textbook_armwest`) | 2.70% | 4.02% | 1–1 | source default | — |
| The Essential Oil Enthusiasts Handbook (`textbook_extraction`) | 2.70% | 4.02% | 1–1 | source default | — |

## Gather/dismantle: Underbrush

Required qualities: [].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| wild vegetables | 95.00% | 2–4 | source default |
| withered plant | 100.00% | 1–3 | source default |
| stick | 66.67% | 0–2 | source default |
| dogbane | 35.00% | 1–3 | source default |
| wild garlic | 25.00% | 1–3 | source default |
| handful of ground nuts | 20.00% | 2–4 | source default |
| chicken egg | 15.00% | 1–3 | source default |
| handful of young leaves | 40.00% | 2–5 | source default |
| burdock | 20.00% | 1–3 | source default |
| rhubarb | 15.00% | 1–3 | source default |
| spurge flowers | 15.00% | 1–3 | source default |

## Gather/dismantle: Rock outcrop

Required qualities: [].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| rock | 100.00% | 3–6 | source default |
| flaking rock | 100.00% | 1–2 | source default |
| flint | 30.00% | 1–1 | source default |
| large rock | 20.00% | 1–1 | source default |

## Gather/dismantle: Shoreline cattails

Required qualities: [].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| cattail stalk | 100.00% | 4–8 | source default |
| cattail rhizome | 100.00% | 2–4 | source default |

## Gather/dismantle: Dead tree

Required qualities: [].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| long stick | 100.00% | 2–5 | source default |
| splintered wood | 100.00% | 4–10 | source default |
| stick | 100.00% | 2–4 | source default |

## Gather/dismantle: Refrigerator

Required qualities: [["SCREW",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| household fridge | 100.00% | 1–1 | source default |
| household freezer | 100.00% | 1–1 | source default |

## Gather/dismantle: Oven

Required qualities: [["SCREW",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| disconnected oven | 100.00% | 1–1 | source default |

## Gather/dismantle: Cupboard

Required qualities: [["PRY",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| plank | 100.00% | 3–3 | source default |
| wooden panel | 100.00% | 1–1 | source default |
| nail | 100.00% | 1–1 | 6–8 |

## Gather/dismantle: Counter

Required qualities: [["PRY",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| plank | 100.00% | 4–4 | source default |
| wooden panel | 100.00% | 1–1 | source default |
| nail | 100.00% | 1–1 | 6–10 |

## Gather/dismantle: Table

Required qualities: [["SCREW",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| plank | 100.00% | 4–4 | source default |
| wooden panel | 100.00% | 1–1 | source default |
| nail | 100.00% | 1–1 | 6–8 |

## Gather/dismantle: Chair

Required qualities: [["SCREW",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| wooden chair | 100.00% | 1–1 | source default |

## Gather/dismantle: Bed

Required qualities: [["PRY",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| mattress | 100.00% | 1–1 | source default |

## Gather/dismantle: Dresser

Required qualities: [["PRY",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| plank | 100.00% | 6–6 | source default |
| wooden panel | 50.00% | 0–1 | source default |
| nail | 100.00% | 1–1 | 6–8 |

## Gather/dismantle: Sofa

Required qualities: [["PRY",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| short wooden post | 100.00% | 6–6 | source default |
| cotton sheet | 100.00% | 10–10 | source default |
| cotton patch | 100.00% | 5–5 | source default |
| nut and bolt | 100.00% | 1–1 | 16–16 |
| spring | 100.00% | 2–2 | source default |
| splintered wood | 100.00% | 1–25 | source default |

## Gather/dismantle: Bookcase

Required qualities: [["PRY",1]].

| Item | Chance per completed action | Count | Charges |
|---|---:|---|---|
| plank | 100.00% | 12–12 | source default |
| wooden panel | 50.00% | 0–1 | source default |
| nail | 100.00% | 1–1 | 12–16 |
