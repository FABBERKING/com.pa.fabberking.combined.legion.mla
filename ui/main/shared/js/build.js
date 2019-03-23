var Build = (function() {
    var FALLBACK_ICON = 'coui://ui/main/game/live_game/img/build_bar/img_missing_unit.png';
    var pathWithoutExtensionMatch = /(.*)\.json[^\/]*$/;

    var iconForSpecId = function(id)
    {
        var match = null;
        if (id)
            match = pathWithoutExtensionMatch.exec(id);

        if (_.size(match) < 2)
            return FALLBACK_ICON;

        return 'coui:/' + match[1] + '_icon_buildbar.png';
    };

    var iconForUnit = function (unit)
    {
        if (!unit)
            return FALLBACK_ICON;
        return iconForSpecId(unit.id);
    };

    var HotkeyModel = function() {
        var self = this;

        self.SpecIdToGridMap = ko.observable(
          _.cloneDeep(HotkeyModel.SpecIdToGridMap));
    };

    HotkeyModel.SpecIdToGridMap = {
			//UTILITY////////////////////////////////////////////////
			"//pa/units/land/energy_plant_adv/energy_plant_adv.json": ["utility", 4],
			"///pa/units/land/metal_extractor_adv/metal_extractor_adv.json": ["utility", 5],			
			"/pa/units/land/radar_adv/radar_adv.json": ["utility", 9],
			"/pa/units/land/radar/radar.json": ["utility", 15],
			"//pa/units/land/energy_plant/energy_plant.json": ["utility", 10],
			"///pa/units/land/metal_extractor/metal_extractor.json": ["utility", 11],
			"/pa/units/land/land_barrier/land_barrier.json": ["utility", 13],
			"/pa/units/land/teleporter/teleporter.json": ["utility", 14],
			"///pa/units/land/energy_storage/energy_storage.json": ["utility", 16],
			"///pa/units/land/metal_storage/metal_storage.json": ["utility", 17],
			
			"/pa/units/land/l_energy_plant_adv/l_energy_plant_adv.json": [ "utility", 4 ],
			"/pa/units/land/l_mex_adv/l_mex_adv.json": [ "utility", 5 ],
			
			"///pa/units/land/l_radar_adv/l_radar_adv.json": [ "utility", 140 ],
			"/pa/units/land/l_energy_plant/l_energy_plant.json": [ "utility", 10 ],
			"/pa/units/land/l_mex/l_mex.json": [ "utility", 11 ],
			"///pa/units/land/l_land_barrier/l_land_barrier.json": [ "utility", 14 ],
			"///pa/units/land/l_teleporter/l_teleporter.json": [ "utility", 250 ],
			"///pa/units/land/l_radar/l_radar.json": [ "utility", 260 ],
			"/pa/units/land/l_storage/l_storage.json": [ "utility", 16 ],
			"/pa/units/land/l_shield_gen/l_shield_gen.json": [ "combat", 2 ],
			
			"/pa/units/orbital/l_mining_platform/l_mining_platform.json": [ "orbital_structure", 13 ],
			"/pa/units/orbital/mining_platform/mining_platform.json": ["orbital_structure", 7],
			"/pa/units/air/l_flying_teleporter/l_flying_teleporter.json": [ "factory", 6 ],
			
			"//pa/units/land/l_titan_structure/l_titan_structure.json": [ "orbital_structure", 60 ],
			"/pa/units/land/titan_structure/titan_structure.json": ["utility", 1],
			
			
			"/pa/units/orbital/l_deep_space_radar/l_deep_space_radar.json": [ "utility", 3 ],
			

			//FACTORY//////////////////////////////////////////////////
			"/pa/units/land/l_titan_bot/l_titan_bot.json": [ "factory", 2 ],
			"/pa/units/land/l_titan_vehicle/l_titan_vehicle.json": [ "factory", 4 ],
			//naval
			"/pa/units/air/l_titan_air/l_titan_air.json": [ "factory", 0 ],
			"/pa/units/orbital/l_titan_orbital/l_titan_orbital.json": [ "orbital_structure", 1 ],
			
			
			"/pa/units/land/titan_bot/titan_bot.json": ["factory", 3],
			"/pa/units/land/titan_vehicle/titan_vehicle.json": ["factory", 5],
			//naval
			"/pa/units/air/titan_air/titan_air.json": ["factory", 1],
			"/pa/units/orbital/titan_orbital/titan_orbital.json": ["orbital_structure", 0],
			
			"//pa/units/land/l_bot_factory_adv/l_bot_factory_adv.json": [ "0000factory", 9 ],
			"//pa/units/land/l_vehicle_factory_adv/l_vehicle_factory_adv.json": [ "0000factory", 10 ],
			"//pa/units/sea/l_naval_factory_adv/l_naval_factory_adv.json": [ "0000factory", 7 ],
			"//pa/units/air/l_air_factory_adv/l_air_factory_adv.json": [ "0000factory", 8 ],
			"//pa/units/orbital/l_orbital_factory/l_orbital_factory.json": [ "0000factory", 11 ],
			
			"/pa/units/land/bot_factory_adv/bot_factory_adv.json": ["factory", 10],
			"/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json": ["factory", 11],
			"/pa/units/sea/naval_factory_adv/naval_factory_adv.json": ["factory", 8],
			"/pa/units/air/air_factory_adv/air_factory_adv.json": ["factory", 9],
			"/pa/units/orbital/orbital_factory/orbital_factory.json": ["orbital_structure", 8],
			
			"//pa/units/land/l_bot_factory/l_bot_factory.json": [ "0000factory", 15 ],
			"//pa/units/land/l_vehicle_factory/l_vehicle_factory.json": [ "0000factory", 16 ],
			"//pa/units/sea/l_naval_factory/l_naval_factory.json": [ "0000factory", 13 ],
			"//pa/units/air/l_air_factory/l_air_factory.json": [ "0000factory", 14 ],
			"//pa/units/orbital/l_orbital_launcher/l_orbital_launcher.json": [ "0000factory", 17 ],
			
			"/pa/units/land/bot_factory/bot_factory.json": ["factory", 16],
			"/pa/units/land/vehicle_factory/vehicle_factory.json": ["factory", 17],			
			"/pa/units/sea/naval_factory/naval_factory.json": ["factory", 14],
			"/pa/units/air/air_factory/air_factory.json": ["factory", 15],
			"/pa/units/orbital/orbital_launcher/orbital_launcher.json": ["factory", 13],
			
			
			//COMBAT////////////////////////////////////////////////////
			"/pa/units/land/control_module/control_module.json": ["utility", 2],
			"///pa/units/land/l_anti_nuke_launcher/l_anti_nuke_launcher.json": [ "combat", 100 ],
			"///pa/units/land/l_nuke_launcher/l_nuke_launcher.json": [ "factory", 200 ],
			"/pa/units/land/l_rocket_barrage/l_rocket_barrage.json": [ "combat", 0 ],
			"///pa/units/orbital/l_delta_v_engine/l_delta_v_engine.json": [ "factory", 500 ],
			
			"/pa/units/land/laser_defense_adv/laser_defense_adv.json": ["combat", 1],
			"/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json": ["utility", 6],
			"/pa/units/land/nuke_launcher/nuke_launcher.json": ["utility", 0],
			"/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json": ["combat", 5],
			"/pa/units/land/l_flame_turret/l_flame_turret.json": [ "combat", 4 ],
			"/pa/units/orbital/delta_v_engine/delta_v_engine.json": ["utility", 8],
			
			"/pa/units/land/l_t1_turret_adv/l_t1_turret_adv.json": [ "combat", 6 ],
			"///pa/units/land/l_air_defense_adv/l_air_defense_adv.json": [ "combat", 7 ],			
			"///pa/units/sea/l_torpedo_launcher_adv/l_torpedo_launcher_adv.json": [ "factory", 140 ],
			"/pa/units/orbital/l_defense_satellite/l_defense_satellite.json": [ "orbital_structure", 12 ],
			"/pa/units/land/l_artillery_long/l_artillery_long.json": [ "combat", 10 ],
			"/pa/units/orbital/l_orbital_dropper/l_orbital_dropper.json": [ "orbital_structure", 14 ],
			
			"/pa/units/land/l_t1_turret_basic/l_t1_turret_basic.json": [ "combat", 12 ],
			"/pa/units/land/air_defense_adv/air_defense_adv.json": ["combat", 8],
			"/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv.json": ["combat", 11],
			"/pa/units/orbital/defense_satellite/defense_satellite.json": ["orbital_structure", 6],
			"/pa/units/land/artillery_long/artillery_long.json": ["combat", 3],
			"/pa/units/land/unit_cannon/unit_cannon.json": ["factory", 7],
			
			"/pa/units/land/laser_defense/laser_defense.json": ["combat", 7],
			"///pa/units/land/l_air_defense/l_air_defense.json": [ "factory", 250 ],
			"///pa/units/sea/l_torpedo_launcher/l_torpedo_launcher.json": [ "factory", 260 ],
			"///pa/units/orbital/l_ion_defense/l_ion_defense.json": [ "factory", 270 ],
			"///pa/units/land/l_artillery_short/l_artillery_short.json": [ "factory", 280 ],
			"/pa/units/land/l_swarm_hive/l_swarm_hive.json": [ "combat", 16 ],
			
			"/pa/units/land/laser_defense_single/laser_defense_single.json": ["combat", 13],
			"/pa/units/land/air_defense/air_defense.json": ["combat", 14],
			"/pa/units/sea/torpedo_launcher/torpedo_launcher.json": ["combat", 17],
			"/pa/units/orbital/ion_defense/ion_defense.json": ["utility", 12],
			"/pa/units/land/artillery_short/artillery_short.json": ["combat", 15],
			"/pa/units/land/artillery_unit_launcher/artillery_unit_launcher.json": ["combat", 9],
			
			
			//AMMO/////////////////////////////////////////////////////////////
			"/pa/units/land/l_land_mine/l_land_mine.json": [ "ammo", 15 ],
			"/pa/units/sea/l_sea_mine/l_sea_mine.json": [ "ammo", 16 ],
			"///pa/units/land/l_anti_nuke_launcher/l_anti_nuke_launcher_ammo.json": [ "ammo", 14 ],
			"///pa/units/land/l_nuke_launcher/l_nuke_launcher_ammo.json": [ "ammo", 15 ],
			
			"/pa/units/land/land_mine/land_mine.json": ["ammo", 12],
			"/pa/units/land/anti_nuke_launcher/anti_nuke_launcher_ammo.json": ["ammo", 13],
			"/pa/units/land/nuke_launcher/nuke_launcher_ammo.json": ["ammo", 14],
			
		
			//VEHICLE//////////////////////////////////////////////////////////
			"/pa/units/land/tank_nuke/tank_nuke.json": ["vehicle", 0],
			"/pa/units/land/l_tank_swarm/l_tank_swarm.json": [ "L_vehicle", 10 ],
			
			"///pa/units/land/l_fabrication_vehicle_adv/l_fabrication_vehicle_adv.json": [ "L_vehicle", 6 ],
			"/pa/units/land/l_tank_laser_adv/l_tank_laser_adv.json": [ "L_vehicle", 6 ],
			"/pa/units/land/l_tank_heavy_armor/l_tank_heavy_armor.json": [ "L_vehicle", 7 ],
			"/pa/units/land/l_sniper_tank/l_sniper_tank.json": [ "L_vehicle", 8 ],
			"/pa/units/land/l_hover_tank_adv/l_hover_tank_adv.json": [ "L_vehicle", 9 ],
			
			"/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json": ["vehicle", 6],
			"/pa/units/land/tank_laser_adv/tank_laser_adv.json": ["vehicle", 7],
			"/pa/units/land/tank_heavy_armor/tank_heavy_armor.json": ["vehicle", 8],
			"/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json": ["vehicle", 9],
			"/pa/units/land/tank_flak/tank_flak.json": ["vehicle", 10],
			
			"///pa/units/land/l_fabrication_vehicle/l_fabrication_vehicle.json": [ "L_vehicle", 12 ],
			"/pa/units/land/l_tank_shank/l_tank_shank.json": [ "L_vehicle", 12 ],
			"/pa/units/land/l_shotgun_tank/l_shotgun_tank.json": [ "L_vehicle", 13 ],
			"/pa/units/land/l_mortar_tank/l_mortar_tank.json": [ "L_vehicle", 14 ],
			"/pa/units/land/l_hover_tank/l_hover_tank.json": [ "L_vehicle", 15 ],
			"/pa/units/land/l_fabrication_vehicle_combat/l_fabrication_vehicle_combat.json": [ "L_vehicle", 16 ],
			
			"/pa/units/land/fabrication_vehicle/fabrication_vehicle.json": ["vehicle", 12],
			"/pa/units/land/tank_light_laser/tank_light_laser.json": ["vehicle", 13],
			"/pa/units/land/tank_armor/tank_armor.json": ["vehicle", 14],
			"/pa/units/land/land_scout/land_scout.json": ["vehicle", 15],
			"/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json": ["vehicle", 16],
			"/pa/units/land/tank_hover/tank_hover.json": ["vehicle", 17],

			
			//BOT/////////////////////////////////////////////////////////////
			"/pa/units/land/bot_support_commander/bot_support_commander.json": ["bot", 0],
			"///pa/units/land/l_bot_support_commander/l_bot_support_commander.json": [ "L_bot", 0 ],
			
			"///pa/units/land/l_fabrication_bot_adv/l_fabrication_bot_adv.json": [ "L_bot", 6 ],
			"/pa/units/land/l_riot_bot/l_riot_bot.json": [ "L_bot", 6 ],
			"/pa/units/land/l_bot_artillery_adv/l_bot_artillery_adv.json": [ "L_bot", 7 ],
			"/pa/units/land/l_bot_aa_adv/l_bot_aa_adv.json": [ "L_bot", 8 ],
			"/pa/units/land/l_bot_artillery/l_bot_artillery.json": [ "L_bot", 9 ],
			"/pa/units/land/l_necromancer/l_necromancer.json": [ "L_bot", 10 ],
			
			"/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json": ["bot", 6],
			"/pa/units/land/assault_bot_adv/assault_bot_adv.json": ["bot", 7],
			"/pa/units/land/bot_sniper/bot_sniper.json": ["bot", 8],
			"/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json": ["bot", 9],
			"/pa/units/land/bot_tactical_missile/bot_tactical_missile.json": ["bot", 10],
			"/pa/units/land/bot_nanoswarm/bot_nanoswarm.json": ["bot", 11],
			
			"///pa/units/land/l_fabrication_bot/l_fabrication_bot.json": [ "L_bot", 12 ],
			"/pa/units/land/l_assault_bot/l_assault_bot.json": [ "L_bot", 12 ],
			"/pa/units/land/l_sniper_bot/l_sniper_bot.json": [ "L_bot", 13 ],
			"/pa/units/land/l_bot_aa/l_bot_aa.json": [ "L_bot", 14 ],
			"/pa/units/land/l_bot_bomb/l_bot_bomb.json": [ "L_bot", 15 ],
			"/pa/units/land/l_scout_bot/l_scout_bot.json": [ "L_bot", 16 ],

			"/pa/units/land/fabrication_bot/fabrication_bot.json": ["bot", 12],
			"/pa/units/land/assault_bot/assault_bot.json": ["bot", 13],
			"/pa/units/land/bot_grenadier/bot_grenadier.json": ["bot", 14],
			"/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json": ["bot", 15],
			"/pa/units/land/bot_bomb/bot_bomb.json": ["bot", 16],
			"/pa/units/land/bot_tesla/bot_tesla.json": ["bot", 17],


			//AIR//////////////////////////////////////////////////////////////////
			"/pa/units/air/support_platform/support_platform.json": ["air", 0],
			"/pa/units/air/l_air_carrier/l_air_carrier.json": [ "L_air", 8 ],

			"///pa/units/air/l_fabrication_aircraft_adv/l_fabrication_aircraft_adv.json": [ "L_air", 6 ],
			"/pa/units/air/l_fighter_adv/l_fighter_adv.json": [ "L_air", 6 ],
			"/pa/units/air/l_gunship/l_gunship.json": [ "L_air", 7 ],
			"/pa/units/air/l_air_scout_adv/l_air_scout_adv.json": [ "L_air", 10 ],
			"/pa/units/air/l_firestarter/l_firestarter.json": [ "L_air", 9 ],

			"/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json": ["air", 6],
			"/pa/units/air/fighter_adv/fighter_adv.json": ["air", 7],
			"/pa/units/air/gunship/gunship.json": ["air", 8],
			"/pa/units/air/bomber_adv/bomber_adv.json": ["air", 9],
			"/pa/units/air/bomber_heavy/bomber_heavy.json": ["air", 10],
			
			"///pa/units/air/l_fabrication_aircraft/l_fabrication_aircraft.json": [ "L_air", 12 ],
			"/pa/units/air/l_fighter/l_fighter.json": [ "L_air", 12 ],
			"/pa/units/air/l_bomber/l_bomber.json": [ "L_air", 13 ],
			"/pa/units/air/l_raider/l_raider.json": [ "L_air", 14 ],
			"/pa/units/air/l_transport/l_transport.json": [ "L_air", 15 ],
			"/pa/units/air/l_air_bomb/l_air_bomb.json": [ "L_air", 16 ],

			"/pa/units/air/fabrication_aircraft/fabrication_aircraft.json": ["air", 12],
			"/pa/units/air/fighter/fighter.json": ["air", 13],
			"/pa/units/air/bomber/bomber.json": ["air", 14],
			"/pa/units/air/air_scout/air_scout.json": ["air", 15],
			"/pa/units/air/transport/transport.json": ["air", 16],
			"/pa/units/air/solar_drone/solar_drone.json": ["air", 17],
			
			//"/pa/units/air/l_air_scout_adv/vision/vision.json": [ "L_air", 0 ],
			
			
			//SEA//////////////////////////////////////////////////////////////////
			"/pa/units/sea/drone_carrier/carrier/carrier.json": ["sea",0],
			"/pa/units/sea/l_hover_ship/l_hover_ship.json": [ "L_sea", 0 ],
			
			"///pa/units/sea/l_fabrication_ship_adv/l_fabrication_ship_adv.json": [ "L_sea", 6 ],
			"/pa/units/sea/l_sea_tank/l_sea_tank.json": [ "L_sea", 6 ],
			"/pa/units/sea/l_battleship/l_battleship.json": [ "L_sea", 7 ],
			"/pa/units/sea/l_missile_ship/l_missile_ship.json": [ "L_sea", 8 ],
			"/pa/units/sea/l_fabrication_sub_combat_adv/l_fabrication_sub_combat_adv.json": [ "L_sea", 9 ],

			"/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json": ["sea",6],
			"/pa/units/sea/battleship/battleship.json": ["sea", 7],
			"/pa/units/sea/missile_ship/missile_ship.json": ["sea", 8],
			"/pa/units/sea/nuclear_sub/nuclear_sub.json": ["sea", 9],
			"/pa/units/sea/hover_ship/hover_ship.json": ["sea",10],
			
			"///pa/units/sea/l_fabrication_ship/l_fabrication_ship.json": [ "L_sea", 12 ],
			"/pa/units/sea/l_sea_scout/l_sea_scout.json": [ "L_sea", 12 ],
			"/pa/units/sea/l_destroyer/l_destroyer.json": [ "L_sea", 13 ],
			"/pa/units/sea/l_attack_sub/l_attack_sub.json": [ "L_sea", 14 ],
			"/pa/units/sea/l_frigate/l_frigate.json": [ "L_sea", 15 ],

			"/pa/units/sea/fabrication_ship/fabrication_ship.json": ["sea", 12],
			"/pa/units/sea/frigate/frigate.json": ["sea", 13],
			"/pa/units/sea/destroyer/destroyer.json": ["sea", 14],
			"/pa/units/sea/attack_sub/attack_sub.json": ["sea", 15],
			"/pa/units/sea/sea_scout/sea_scout.json": ["sea", 16],
			"/pa/units/sea/fabrication_barge/fabrication_barge.json": ["sea",17],


			//ORBITAL///////////////////////////////////////////////////////////
			"/pa/units/orbital/orbital_battleship/orbital_battleship.json": ["orbital", 0],
			"/pa/units/orbital/l_orbital_battleship/l_orbital_battleship.json": [ "L_orbital", 0 ],
			
			"/pa/units/orbital/l_orbital_laser/l_orbital_laser.json": [ "L_orbital", 6 ],
			"/pa/units/orbital/l_radar_satellite_adv/l_radar_satellite_adv.json": [ "L_orbital", 7 ],
			"/pa/units/orbital/l_orbital_railgun/l_orbital_railgun.json": [ "L_orbital", 8 ],

			"/pa/units/orbital/orbital_laser/orbital_laser.json": ["orbital", 7],
			"/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json": ["orbital", 8],
			"/pa/units/orbital/orbital_railgun/orbital_railgun.json": ["orbital", 9],
			"/pa/units/orbital/solar_array/solar_array.json": ["orbital", 6],
			
			"///pa/units/orbital/l_orbital_fabrication_bot/l_orbital_fabrication_bot.json": [ "L_orbital", 12 ],
			"/pa/units/orbital/l_orbital_fighter/l_orbital_fighter.json": [ "L_orbital", 12 ],
			"/pa/units/orbital/l_radar_satellite/l_radar_satellite.json": [ "L_orbital", 13 ],
			"///pa/units/orbital/l_orbital_lander/l_orbital_lander.json": [ "L_orbital", 15 ],
			"/pa/units/orbital/l_orbital_probe/l_orbital_probe.json": [ "L_orbital", 14 ],			

			"/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json": ["orbital", 12],
			"/pa/units/orbital/orbital_fighter/orbital_fighter.json": ["orbital", 13],
			"/pa/units/orbital/radar_satellite/radar_satellite.json": ["orbital", 14],
			"/pa/units/orbital/orbital_lander/orbital_lander.json": ["orbital", 15],
			"/pa/units/orbital/orbital_probe/orbital_probe.json": ["orbital", 16]
    };

    return {
        iconForSpecId: iconForSpecId,
        iconForUnit: iconForUnit,
        HotkeyModel: HotkeyModel,
    };
})();

if (scene_mod_list['']) {
  loadMods(scene_mod_list[''])
}
