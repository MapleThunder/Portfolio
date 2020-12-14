---
title: "Project Boost"
type_id: project
project_id: project-boost
main_image: "../../images/me.jpg"
teaser: "Pilot your ship safely through caverns"
tags:
  - Unity
  - C#
  - WebGL
---

## Description

I created this game while learning game development principles and how to use Unity. The main gameplay loop is the simple act of piloting the rocket from the launch pad to the landing pad. There are both stationary and moving obstacles added to increase difficulty of the levels. The game is simple and short but still fun !

The goal of Project Boost is to pilot your rocket from the blue launch pad past the jutting, sometimes shifting, landscape and onto the yellow landing pad safely.

There is only 4 levels, but one mistake sends you back to the start !

[Try It Out !](/project-boost)

## How I Did It

### Models

All of the models and landscapes were created using Unity primitives that had be resized, rotated, and positioned to create the desired look. The terrain was made from a single prefab that I duplicated and adjusted the size and shape of.

The rocket consisted of multiple cubes, adjusted into different shapes, and saved as a single prefab object. I added a few particle systems to the rocket prefab that were intended to be activated when needed. One particle system for death, one for success, and one for the rocket thrusters.

A spot light was created and locked to the rocket's coordinates to assist with visibility, this was more necessary when I was playing with lighting levels.

### Gameplay

The main gameplay loop of navigating from point A to point B was chosen for its simplicity, with challenge easily added by introducing obstacles. This simple mechanic was implemented entirely inside the Rocket.cs script on the rocket prefab. On specific key input (space bar) the particle effect for the thrusters activated and force was applied to the rocket sending it forward. At the same time I checked key input for the left and right arrow keys to control turning the rocket.

I used the OnCollisionEnter function to provide behaviour for when the rocket touched something. I created 2 new tags of "Friendly" and "Finish", then set the tag for the launchpad to Friendly and the landing pad to Finish. In the OnCollisionEnter function I used a switch statement to check the tag of the object collided with and determine what should happen.

- Friendly: Nothing happens.
- Finish: The success particles play and the player beats the level !
- Default (anything else): The rocket explodes and the player loses.

To add difficulty to the levels I created a simple Oscillator.cs script to make terrain objects move. This was as simple as adjusting an objects transform between two values over time. This script was added to pieces of terrain in some levels to make them more challenging.
