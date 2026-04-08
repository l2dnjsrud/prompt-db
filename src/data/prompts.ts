export type Section = {
  title: string;
  prompts: string[];
  images: string[];
  description?: string;
};

export type Category = {
  id: string;
  title: string;
  sections: Section[];
};

export const categories: Category[] = [
  // ─── Category 1: 눈 관련 ───
  {
    id: "eyes",
    title: "눈 관련",
    sections: [
      {
        title: "혼란",
        prompts: ["wide-eyed", "button_eyes", "mechanical_eye", "spiral-only_eyes", "squiggle_eyes"],
        images: [
          "https://assets.st-note.com/img/1739455625-CaA1l6URi8buchO7NtJx2kvn.png?width=1200",
          "https://assets.st-note.com/img/1739455625-lBDSIFbZgwa3hAYk2OCGKQnu.png?width=1200",
          "https://assets.st-note.com/img/1739455625-ugp9qGI7yfYKBA8x0Xe31rjk.png?width=1200",
          "https://assets.st-note.com/img/1739455625-vV51Okjrpb83Ffqh9Y0iDtuw.png?width=1200",
          "https://assets.st-note.com/img/1739455625-YbwlfKg93LcN21yOFnd7piW4.png?width=1200",
        ],
      },
      {
        title: "분노",
        prompts: ["ringed_eyes", "crazy_eyes", "bloodshot_eyes", "bulging_eyes", "evil_eyes", "creepy_eyes", "too_many_eyes", "evil_eye_sigma", "square_eyes"],
        images: [
          "https://assets.st-note.com/img/1739455664-IGT6bDzpFlUeNxoO2LCVv4Rm.png?width=1200",
          "https://assets.st-note.com/img/1739455664-d0VlNwS3TogQUmbk6JcYnWGA.png?width=1200",
          "https://assets.st-note.com/img/1739455665-kgv3EzspdRPGtnHIFJjbuVST.png?width=1200",
          "https://assets.st-note.com/img/1739455665-gejOTZ9AXn2yrxpsULWtcHko.png?width=1200",
          "https://assets.st-note.com/img/1739455665-f03eVNspJgwuRKx7EYCiOytS.png?width=1200",
        ],
      },
      {
        title: "슬픈",
        prompts: ["crying_with_eyes_open"],
        images: [
          "https://assets.st-note.com/img/1739455777-UZ2380jt7uJDIKna9gkfElSb.png?width=1200",
        ],
      },
      {
        title: "마유게 속눈썹",
        prompts: ["v-shaped_eyebrows", "raised_eyebrows", "colored_eyelashes", "raised_eyebrow", "eyebrow_cut"],
        images: [
          "https://assets.st-note.com/img/1739455818-KabmWSDzeYdH8O9X2g4Jxhjk.png?width=1200",
          "https://assets.st-note.com/img/1739455818-FAMd7NBOswv4H2LEgJTXqWYn.png?width=1200",
          "https://assets.st-note.com/img/1739455819-ziM53F2lCjWHwIsugdJe81n9.png?width=1200",
          "https://assets.st-note.com/img/1739455819-eWlvEa0CbXYhmdN1MDpkTJfO.png?width=1200",
          "https://assets.st-note.com/img/1739455819-nIH1ci84RSqsYxAo2v6eMlhN.png?width=1200",
        ],
      },
      {
        title: "소름끼치는",
        prompts: ["empty_eyes", "rolling_eyes", "blank_eyes", "solid_oval_eyes", "extra_eyes", "solid_circle_eyes", "solid_eyes", "hollow_eyes", "wide_oval_eyes"],
        images: [
          "https://assets.st-note.com/img/1739455849-ASPVrRw4zKTUfxDMJnEvXuHy.png?width=1200",
          "https://assets.st-note.com/img/1739455849-pujdrz0h3e9wOBif8TYcgMC4.png?width=1200",
          "https://assets.st-note.com/img/1739455849-UznQE6NMrjftIK2bpFde0578.png?width=1200",
          "https://assets.st-note.com/img/1739455849-dzELufWRCv0HZcQlra15VBYP.png?width=1200",
          "https://assets.st-note.com/img/1739455849-JfQKE6PtUSVDOWIjFw9uqTsn.png?width=1200",
        ],
      },
      {
        title: "눈 근처 효과",
        prompts: ["scar_across_eye", "bags_under_eyes", "glowing_eyes", "sparkling_eyes", "gradient_eyes", "long_eyelashes"],
        images: [
          "https://assets.st-note.com/img/1739455872-cKTraO96uBkRoyj7GSsvXJb0.png?width=1200",
          "https://assets.st-note.com/img/1739455872-PgSmeIvhbqzV95FUino3MG1p.png?width=1200",
          "https://assets.st-note.com/img/1739455872-3qi8QHo27K9w6selCxUNhWXL.png?width=1200",
          "https://assets.st-note.com/img/1739455872-7z80LTJ9rfbmEIAvalxqjKde.png?width=1200",
          "https://assets.st-note.com/img/1739455872-SJ5V8H9Aflie6c4dYpMnRvqQ.png?width=1200",
        ],
      },
      {
        title: "눈 제스처",
        prompts: ["eye_contact", "v_over_eye", "covering_own_eyes", "covering_one_eye", "covering_another's_eyes", "rubbing_eyes", "shading_eyes", "eyelid_pull"],
        images: [
          "https://assets.st-note.com/img/1739455895-lzcvnoDMURmOT4wj9EVrsCFK.png?width=1200",
          "https://assets.st-note.com/img/1739455895-BJUu48q3FmIR07eQOHloSyKt.png?width=1200",
          "https://assets.st-note.com/img/1739455895-izWLCem1xSRw0y3daU2FEJ8o.png?width=1200",
          "https://assets.st-note.com/img/1739455895-GYBHNXRkJmOQUFpwate68P4r.png?width=1200",
          "https://assets.st-note.com/img/1739455895-vlWiDEL1PySV9Hjun3JdM4BA.png?width=1200",
        ],
      },
      {
        title: "눈을 닫는 방법",
        prompts: ["narrowed_eyes", "half-closed_eyes", "one_eye_closed", "closed_eyes", "uneven_eyes", "averting_eyes", "downcast_eyes"],
        images: [
          "https://assets.st-note.com/img/1739455917-IgtwYoNPsRFlmOv5JzdrbyjC.png?width=1200",
          "https://assets.st-note.com/img/1739455917-sqLhf58ar2cAYGW0RtJTidMN.png?width=1200",
          "https://assets.st-note.com/img/1739455917-ORAoUHq61gfDWIxm2lrGcbzK.png?width=1200",
          "https://assets.st-note.com/img/1739455917-bBlkuhCrSTDgVdcx7jwiyIoU.png?width=1200",
          "https://assets.st-note.com/img/1739455917-LIJF5cjmlhG4XC1ZoHeQvT8W.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 2: 손 관련 ───
  {
    id: "hands",
    title: "손 관련",
    sections: [
      {
        title: "손 제스처",
        prompts: [
          "clenched_hands", "cupping_hands", "double_finger_gun", "double_thumbs_up", "double_v",
          "fidgeting", "finger_counting", "finger_frame", "fist_bump", "fist_in_hand",
          "own_hands_clasped", "shadow_puppet", "steepled_fingers", "x_fingers", "beckoning",
          "twirling_hair", "index_finger_raised", "pinky_out", "pointing", "pointing_at_another",
          "pointing_at_self", "pointing_at_viewer", "pointing_down", "pointing_forward", "pointing_up",
          "shushing", "thumbs_down", "thumbs_up", "finger_gun", "fox_shadow_puppet",
          "gyaru_v", "two_finger_salute", "v", "v_over_eye", "v_over_mouth",
          "money_gesture", "ok_sign", "pinching_gesture", "reaching", "spread_fingers",
          "waving", "clenched_hand", "curled_fingers", "power_fist", "strange_hands",
        ],
        images: [
          "https://assets.st-note.com/img/1739613386-e3PNw1D9zXEO4cJLti8Tq2RH.png?width=1200",
          "https://assets.st-note.com/img/1739613386-KM20Gr9Cou6PBOh7DbxJQaLq.png?width=1200",
          "https://assets.st-note.com/img/1739613387-TqLpAM25FDJPf7oB1H8zyUwa.png?width=1200",
          "https://assets.st-note.com/img/1739613388-aw4yDxEQktj8ZXSKYAWlIvod.png?width=1200",
          "https://assets.st-note.com/img/1739613391-IeBghbP5SFEOXYVdCk9mp2ZM.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 3: 포즈 ───
  {
    id: "pose1",
    title: "포즈",
    sections: [
      {
        title: "자신의 동작",
        prompts: [
          "hat_tip", "stroking_own_chin", "bowing", "adjusting_eyewear", "hand_on_own_ear",
          "hand_on_own_head", "hand_on_own_face", "hand_on_own_forehead", "hand_on_own_cheek",
          "hand_on_own_chin", "head_rest", "hand_on_headwear", "hand_on_own_neck",
          "hand_on_own_chest", "hand_on_own_shoulder", "hand_on_own_stomach", "hand_on_own_arm",
          "hand_on_own_elbow", "hands_on_breasts", "breast_hold", "hand_on_own_hip",
          "hand_on_own_leg", "hand_on_own_thigh", "hand_on_own_knee", "hand_between_legs",
          "hand_on_own_foot", "holding_hands", "hand_in_pocket", "cheek_pinch",
          "cheek_poking", "arm_around_shoulder",
        ],
        images: [
          "https://assets.st-note.com/img/1739613834-wDKT96lL1dJuoy8RGe5CQjPg.png?width=1200",
          "https://assets.st-note.com/img/1739613837-7bVCjghdtQHaAo3UPGLcXnJm.png?width=1200",
          "https://assets.st-note.com/img/1739613837-rC5zgTPKjJpuf90McGaAWyU1.png?width=1200",
          "https://assets.st-note.com/img/1739613835-0Hn1teTE729dlKaNkvswqLW6.png?width=1200",
          "https://assets.st-note.com/img/1739613835-aL4hYO9Vk3y61T7BNoKQPbEu.png?width=1200",
        ],
      },
      {
        title: "상대의 동작",
        prompts: [
          "hand_on_another's_waist", "adjusting_another's_hair", "hand_on_another's_head",
          "headpat", "hand_on_another's_face", "hand_on_another's_cheek", "hand_on_another's_chin",
          "hand_on_another's_neck", "strangling", "hand_on_another's_arm",
          "hand_on_another's_chest", "hand_on_another's_shoulder", "hand_on_another's_stomach",
        ],
        images: [
          "https://assets.st-note.com/img/1739672689-HoURNK47GWdwsA8SIBVjDb5T.png?width=1200",
          "https://assets.st-note.com/img/1739672690-Sn8NxsEZ5geOaJ7Vvpko9cRK.png?width=1200",
          "https://assets.st-note.com/img/1739672689-THVQUe6Akg8zy4mpXSZIcO3F.png?width=1200",
          "https://assets.st-note.com/img/1739672689-jc2XwymWGZkDqrv3pdIQ0gCT.png?width=1200",
          "https://assets.st-note.com/img/1739672688-eGytTRbCg5EAOPu27Zqz0BwL.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 4: 헤어스타일 ───
  {
    id: "hairstyle",
    title: "헤어스타일",
    sections: [
      {
        title: "헤어스타일",
        prompts: [
          "single_sidelock", "single_hair_intake", "asymmetrical_sidelocks", "bob_cut", "inverted_bob",
          "flipped_hair", "wolf_cut", "mullet", "half_up_braid", "wavy_hair",
          "curly_hair", "messy_hair", "straight_hair", "ponytail", "side_ponytail",
          "folded_ponytail", "front_ponytail", "high_ponytail", "short_ponytail", "two_side_up",
          "one_side_up", "twintails", "low_twintails", "short_twintails", "braided_bun",
          "french_braided_ponytail", "single_braid", "twin_braids", "topknot", "double_bun",
          "hair_between_eyes", "bangs", "blunt_bangs", "long_bangs", "parted_bangs",
          "swept_bangs", "drill_hair", "twin_drills", "ahoge", "hair_slicked_back",
          "spiked_hair", "mohawk", "buzz_cut", "undercut", "cornrows", "dreadlocks",
        ],
        images: [
          "https://assets.st-note.com/img/1739880407-6t7yLFQgSPNOXDiB2uRcbWns.png?width=1200",
          "https://assets.st-note.com/img/1739880407-TyCOSXvhbkz7xYZdQ831psBM.png?width=1200",
          "https://assets.st-note.com/img/1739880407-kD7tuq4N5m0HwP639zVBoEW2.png?width=1200",
          "https://assets.st-note.com/img/1739880408-P653EZtvObISDc8lkKVB0Nne.png?width=1200",
          "https://assets.st-note.com/img/1739880408-xwoSzyD5q0QFXP4UY3hGmElB.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 5: 포즈2 ───
  {
    id: "pose2",
    title: "포즈2",
    sections: [
      {
        title: "앉는 포즈",
        prompts: [
          "butterfly_sitting", "indian_style", "knees_apart_feet_together", "leg_lock",
          "lotus_position", "spread_legs", "arm_support", "crossed_legs", "sitting",
          "slouching", "head_rest", "hugging_own_legs", "knee_up", "reclining",
          "sitting_on_lap", "all_fours", "crawling", "kneeling", "seiza",
          "squatting", "wariza",
        ],
        images: [
          "https://assets.st-note.com/img/1740239203-T16RMHA7NVli5dp0bW3fnLoS.png?width=1200",
          "https://assets.st-note.com/img/1740239203-L5w3pXzeOyQog8JqGVdPHlcN.png?width=1200",
          "https://assets.st-note.com/img/1740239203-AO1WhIrM9gjw6KVXaTQobR0E.png?width=1200",
          "https://assets.st-note.com/img/1740239203-bKHZMGP2CoRxN5OfiBsyrEqh.png?width=1200",
          "https://assets.st-note.com/img/1740239203-4ETkyGtDrv9A6VIxmozuHjZX.png?width=1200",
        ],
      },
      {
        title: "서있는/움직이는 포즈",
        prompts: [
          "arm_behind_back", "arm_behind_head", "arm_up", "arms_up", "claw_pose",
          "contrapposto", "crossed_arms", "fighting_stance", "flexing", "head_tilt",
          "jumping", "leaning_forward", "leg_lift", "legs_apart", "outstretched_arms",
          "paw_pose", "pigeon-toed", "reaching", "running", "t-pose",
          "tiptoes", "v_arms", "victory_pose", "walking", "zombie_pose",
          "hug", "holding_hands", "hug_from_behind", "princess_carry", "shoulder-to-shoulder",
        ],
        images: [
          "https://assets.st-note.com/img/1740239204-cMr86Td9xBRqG3fgCeauVN4A.png?width=1200",
          "https://assets.st-note.com/img/1740239204-GCfAZBDbqIKgpxaSNnQ58Prs.png?width=1200",
          "https://assets.st-note.com/img/1740239204-3qYk8062FV1iGtUJl5r9MCXh.png?width=1200",
          "https://assets.st-note.com/img/1740239204-tsMWvu8ZJ31IX6gVBqHChdaR.png?width=1200",
          "https://assets.st-note.com/img/1740239204-wl8KZAYTf6N4CUnmhcMdo7sG.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 6: 모자 ───
  {
    id: "hats",
    title: "모자",
    sections: [
      {
        title: "모자",
        prompts: [
          "crown", "baseball_cap", "cabbie_hat", "deerstalker", "kepi",
          "peaked_cap", "boater_hat", "bowler_hat", "bucket_hat", "cowboy_hat",
          "straw_hat", "fedora", "flat_cap", "witch_hat", "wizard_hat",
          "beret", "beanie", "ushanka", "chef_hat", "fez_hat",
          "garrison_cap", "mortarboard", "nightcap", "nurse_cap", "sailor_hat",
          "santa_hat", "top_hat", "mini_top_hat", "tricorne", "turban",
          "headband", "hair_bow", "hairband", "tiara", "diadem",
          "veil", "bonnet", "hijab", "bandana", "visor_cap",
        ],
        images: [
          "https://assets.st-note.com/img/1740576534-dcrm7yOCkSPhgxXbQfM36V92.png?width=1200",
          "https://assets.st-note.com/img/1740576541-l1GfNDLeptCcjnsdohmzbxwM.png?width=1200",
          "https://assets.st-note.com/img/1740576541-Vj1rQ6boAMzfY0xPLsTyhHI8.png?width=1200",
          "https://assets.st-note.com/img/1740576541-uvIVP3ladJOzoc60rLbEqtCn.png?width=1200",
          "https://assets.st-note.com/img/1740576541-nCXSDhz9428WbGfvOQaRPJBs.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 7: 감정표현 ───
  {
    id: "emotions",
    title: "감정표현",
    sections: [
      {
        title: "감정표현",
        prompts: [
          "angry", "anger_vein", "annoyed", "clenched_teeth", "scowl",
          "blush_stickers", "embarrassed", "full-face_blush", "disappointed", "disdain",
          "disgust", "drunk", "excited", "exhausted", "expressionless",
          "flustered", "frustrated", "nervous", "nosebleed", "one_eye_closed",
          "sad", "depressed", "frown", "tears", "scared",
          "serious", "sigh", "sleepy", "surprised", "thinking",
          "ahegao", "naughty_face", "seductive_smile", "crazy_smile", "evil_smile",
          "forced_smile", "light_smile", "sad_smile", "smug", "troll_face",
          "crying", "tongue_out", "drooling",
        ],
        images: [
          "https://assets.st-note.com/img/1740913854-Wpraszjf5S7v8mFwkciIAutO.png?width=1200",
          "https://assets.st-note.com/img/1740913854-BkgyFfChwRQxX0nGEzqKOjMo.png?width=1200",
          "https://assets.st-note.com/img/1740913854-PGL3V2RafUvXgBDqAdrjTwNi.png?width=1200",
          "https://assets.st-note.com/img/1740913854-OjR1S8D4TiuIJkwx2mA6Zelo.png?width=1200",
          "https://assets.st-note.com/img/1740913854-Hqr3T8LvaUNYFQMWwC0AOR2V.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 8: 구도 ───
  {
    id: "composition",
    title: "구도",
    sections: [
      {
        title: "만화",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1744027684-HzfwyZ8jcKnY2xo5SeNs19AF.png?width=1200",
          "https://assets.st-note.com/img/1744027684-Oo1lbkC8dsfG5XYiItZ027xn.png?width=1200",
          "https://assets.st-note.com/img/1744027691-x9QF7n48ZXhyGTSY6zwuNKC5.png?width=1200",
          "https://assets.st-note.com/img/1744027691-0NXan5uPy3LYCeKomFEZxQiH.png?width=1200",
          "https://assets.st-note.com/img/1744027718-Zt5l3ICghuf1eRDpOBKsAwzS.png?width=1200",
        ],
      },
      {
        title: "포커스",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1744027570-JMmiPjncGtv5Oqw2A9degkyz.png?width=1200",
          "https://assets.st-note.com/img/1744027570-Vscu1UfJoCKhH5dwXGWg0MlO.png?width=1200",
          "https://assets.st-note.com/img/1744027570-UTyWr9dkOI32oBG7ZqzKV8Ab.png?width=1200",
          "https://assets.st-note.com/img/1744027570-2ksX3IWLcZSH5vqQmt0uyEdC.png?width=1200",
          "https://assets.st-note.com/img/1744027570-5rWipom9kV4AYzhucC0wq3RK.png?width=1200",
        ],
      },
      {
        title: "프레임 외부",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1744027521-DfzSathl5TV7ogyX42vuENPF.png?width=1200",
          "https://assets.st-note.com/img/1744027521-WzBkCaeQEY1hPRfD2d5o7bTc.png?width=1200",
          "https://assets.st-note.com/img/1744027521-CrXvwJb6of9Pts3pZUjeFzEB.png?width=1200",
        ],
      },
      {
        title: "효과",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1744027492-9bmhxPgsXSi8KOZJfqoey5LW.png?width=1200",
          "https://assets.st-note.com/img/1744027492-GkU1Iubfa0FWxQnymi7Mr6Aw.png?width=1200",
          "https://assets.st-note.com/img/1744027492-xt7dmHynoC0NEpI6SRhYU3fB.png?width=1200",
          "https://assets.st-note.com/img/1744027492-0POJnqLDpCg89kcGImMoQ1vU.png?width=1200",
          "https://assets.st-note.com/img/1744027492-ew6NEsWCu4AJ0YgpTL3vDQVq.png?width=1200",
        ],
      },
      {
        title: "구도",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1744027468-uKoM8mPF9DrT2yYdZ5kUsNaB.png?width=1200",
          "https://assets.st-note.com/img/1744027468-UIprnX91e7hgbdHVzAfJYFvj.png?width=1200",
          "https://assets.st-note.com/img/1744027468-AX1hCv6rb3MseGItmRloJD4E.png?width=1200",
          "https://assets.st-note.com/img/1744027468-Dt0dJ9kLYhREOsUpiHlvGxC8.png?width=1200",
          "https://assets.st-note.com/img/1744027468-RuoP9mpfQUnHCle4XS5t8I7a.png?width=1200",
        ],
      },
      {
        title: "범위",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1744027390-B4uP8U2IZp1MH6YQGFaorc9T.png?width=1200",
          "https://assets.st-note.com/img/1744027390-shKLVXGbS1RvlJ8Z7apdrkjx.png?width=1200",
          "https://assets.st-note.com/img/1744027390-VNBgr5YWOMma7dps0yGhInXF.png?width=1200",
        ],
      },
      {
        title: "여러",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1744027384-r2YVmuv5RdBL01I4Fyja9Zgl.png?width=1200",
          "https://assets.st-note.com/img/1744027384-YBvsLzc0eNnFQoIiZqS47OhJ.png?width=1200",
          "https://assets.st-note.com/img/1744027384-JA1dGl842abBfxoewL3UFhHW.png?width=1200",
          "https://assets.st-note.com/img/1744027384-fg9ONGka4vD2Kml0MUXA3BCI.png?width=1200",
          "https://assets.st-note.com/img/1744027384-8pP5BKHlrXqvyf2wTtxduNQA.png?width=1200",
        ],
      },
      {
        title: "프롬프트 목록",
        prompts: [
          "Backlighting", "Bokeh", "Chiaroscuro", "Diffraction_spikes", "Motion_blur",
          "Silhouette", "From_above", "From_below", "From_side", "Full_body",
          "Cowboy_shot", "Upper_body", "POV", "bird's-eye_view", "high_angle",
          "back_shot", "profile", "speed_lines", "motion_lines", "speech_bubble",
          "sweatdrop", "Drop_shadow", "Emphasis_lines",
        ],
        images: [],
      },
    ],
  },

  // ─── Category 9: 색 표현 ───
  {
    id: "color-expression",
    title: "색 표현",
    sections: [
      {
        title: "Base",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1746825118-DWCPrl9ak3uR5teqvpHMzmBg.png?width=1200",
        ],
      },
      {
        title: "pastel colors",
        description: "파스텔 칼라로 하는 부드럽고 옅은 색조로, 귀엽고 섬세한 인상에.",
        prompts: ["pastel colors"],
        images: [
          "https://assets.st-note.com/img/1746824635-agmt01LS58ZQojrlAuO3NhyG.png?width=1200",
        ],
      },
      {
        title: "vibrant colors",
        description: "비비드로 선명한 색으로 하는 발색이 매우 강하고, 팝으로 활기찬 분위기를 연출합니다.",
        prompts: ["vibrant colors"],
        images: [
          "https://assets.st-note.com/img/1746824640-1OG7Ci5aWyMkzxKYvdfP8bgp.png?width=1200",
        ],
      },
      {
        title: "cool color palette",
        description: "한색계(파랑・녹)로 정리하는 청량감・조용함을 가진 인상에.",
        prompts: ["cool color palette"],
        images: [
          "https://assets.st-note.com/img/1746824646-ebq78vhg5apnUzuor1mZJs6C.png?width=1200",
        ],
      },
      {
        title: "warm tones",
        description: "따뜻한 색계로 따뜻함을 내는 친숙하고 감정적이고 따뜻한 느낌에.",
        prompts: ["warm tones"],
        images: [
          "https://assets.st-note.com/img/1746824651-YNdPv7s3I8jJHA2r0zEaRDZi.png?width=1200",
        ],
      },
      {
        title: "color blocking",
        description: "색의 덩어리로 구성하는 그래픽 표현.",
        prompts: ["color blocking"],
        images: [
          "https://assets.st-note.com/img/1746824661-azXUniObS2xrWqoDj4eEhtVF.png?width=1200",
        ],
      },
      {
        title: "인상적인 조합",
        prompts: [
          "pastel colors × overexposed",
          "vibrant colors × tonal contrast",
          "cool color palette × light leaks",
          "warm tones × cinematic lighting",
          "color blocking × soft lighting",
        ],
        images: [
          "https://assets.st-note.com/img/1746824462-R12X3n5PzCAdyfTaLjDiS0lQ.png?width=1200",
          "https://assets.st-note.com/img/1746824445-ahI10UpCZE4zn2AlcNXMJ6e7.png?width=1200",
          "https://assets.st-note.com/img/1746824426-RFMlDJeCYfk5ipZHw9nj0LGd.png?width=1200",
          "https://assets.st-note.com/img/1746824388-Fie7KLWA5zUodYHcPNqgEh3l.png?width=1200",
          "https://assets.st-note.com/img/1746824356-RMjzLl2rxvUCsQKEH9ZBN5Pa.png?width=1200",
        ],
      },
      {
        title: "Summary",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1746824814-JmIfBtYlRb2ijC0xVEMNoO7P.jpg?width=1200",
        ],
      },
    ],
  },

  // ─── Category 10: 질감 ───
  {
    id: "texture",
    title: "질감",
    sections: [
      {
        title: "Base",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1747133848-nWxme2GLZ8Il0NF1kPOsKYA9.png?width=1200",
        ],
      },
      {
        title: "watercolor",
        description: "수채화풍으로 하는",
        prompts: ["watercolor"],
        images: [
          "https://assets.st-note.com/img/1747133231-98o5l2SjDWtdU0BPhzOGe46V.png?width=1200",
        ],
      },
      {
        title: "sketch",
        description: "스케치풍으로 하는",
        prompts: ["sketch"],
        images: [
          "https://assets.st-note.com/img/1747133270-jH0AD5tRpK2NlkyoavI6h9eT.png?width=1200",
        ],
      },
      {
        title: "manga style",
        description: "만화풍으로 하는",
        prompts: ["manga style"],
        images: [
          "https://assets.st-note.com/img/1747133305-GD8TabIeVKmhszqiHtXU1yg9.png?width=1200",
        ],
      },
      {
        title: "posterized",
        description: "포스터라이즈풍으로 하는",
        prompts: ["posterized"],
        images: [
          "https://assets.st-note.com/img/1747133341-Y3gP8RyAeKxBruXSUfH4DbJq.png?width=1200",
        ],
      },
      {
        title: "semi-realistic",
        description: "세미리얼조로 하는",
        prompts: ["semi-realistic"],
        images: [
          "https://assets.st-note.com/img/1747133389-xCfOMZLtEmkFg3WUveGQTpjh.png?width=1200",
        ],
      },
      {
        title: "보조 프롬프트",
        prompts: ["soft light", "crosshatching", "ink wash", "textured background", "clean lines"],
        images: [
          "https://assets.st-note.com/img/1747133556-8G9OLswUMiRYc6AnevBzk2Z4.png?width=1200",
          "https://assets.st-note.com/img/1747133596-klPHCNLjxGtKA2p87qIMmYb4.png?width=1200",
          "https://assets.st-note.com/img/1747133613-OL6ofKwWQzeNDstb4PFpM8Gg.png?width=1200",
          "https://assets.st-note.com/img/1747133627-iINZSMrRkCvaVyFEGp8KPdtm.png?width=1200",
          "https://assets.st-note.com/img/1747133640-YmL5GWlrMpe2VSubjIUfg6kJ.png?width=1200",
        ],
      },
      {
        title: "인상적인 조합",
        prompts: [
          "watercolor × soft light",
          "sketch × crosshatching",
          "manga style × ink wash",
          "posterized × textured background",
          "semi-realistic × clean lines",
        ],
        images: [
          "https://assets.st-note.com/img/1747133454-Vu3TXmRM4Usn02LYWBabKSgd.png?width=1200",
          "https://assets.st-note.com/img/1747133283-BAFfJUouYKv8C5lG0zMTLQNt.png?width=1200",
          "https://assets.st-note.com/img/1747133323-qpyA9xUZoSE8L5WktXaQOh70.png?width=1200",
          "https://assets.st-note.com/img/1747133362-dmiJgGhMRLo2f4Z1ujVvpABS.png?width=1200",
          "https://assets.st-note.com/img/1747133416-3TeRmDBh9SZrEcMKaGoHf5X2.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 11: 색채 조합 ───
  {
    id: "color-combination",
    title: "색채 조합",
    sections: [
      {
        title: "Base",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1747146423-Sf2zemABZJqT7gHLoYiIOu9l.png?width=1200",
        ],
      },
      {
        title: "subsurface scattering",
        description: "피하 산란. 피부나 머리카락에 안쪽에서 번지는 것 같은 붉음을 주는 프롬프트.",
        prompts: ["subsurface scattering"],
        images: [
          "https://assets.st-note.com/img/1747146474-CXBSxeY2sR3E0daOtq54J9FV.png?width=1200",
        ],
      },
      {
        title: "iridescent colors",
        description: "옥충색. 각도에 따라 색이 바뀌는 무지개 색과 같은 효과.",
        prompts: ["iridescent colors"],
        images: [
          "https://assets.st-note.com/img/1747146510-o7whQHNbO1WTEVSJmRkGLv4c.png?width=1200",
        ],
      },
      {
        title: "moody lighting",
        description: "무디한 조명. 감정적이고 분위기 있는 조명 효과.",
        prompts: ["moody lighting"],
        images: [
          "https://assets.st-note.com/img/1747146550-DPI2voLzTEja9mF8n0cgKYJh.png?width=1200",
        ],
      },
      {
        title: "copper tone palette",
        description: "구리색의 컬러 팔레트.",
        prompts: ["copper tone palette"],
        images: [
          "https://assets.st-note.com/img/1747146584-JbSyitBuewYaofkP3n5OqXsv.png?width=1200",
        ],
      },
      {
        title: "bioluminescent",
        description: "생물 발광. 심해 생물과 같은 자발광 표현.",
        prompts: ["bioluminescent"],
        images: [
          "https://assets.st-note.com/img/1747146635-amgfid9FhUBJCevqWSO7tI6Z.png?width=1200",
        ],
      },
      {
        title: "인상적인 조합",
        prompts: [
          "subsurface scattering × soft rim lighting",
          "iridescent colors × soft glow",
          "moody lighting × light particles",
          "copper tone palette × film lighting",
          "bioluminescent × shallow depth of field",
        ],
        images: [
          "https://assets.st-note.com/img/1747146488-1fWdK6GFIrRYDUxlO7mncp2A.png?width=1200",
          "https://assets.st-note.com/img/1747146528-uxIJnilCBvPZh9OtdSQTR2cw.png?width=1200",
          "https://assets.st-note.com/img/1747146563-x5WbfstNGc9FLZh3zSkp7uvl.png?width=1200",
          "https://assets.st-note.com/img/1747146608-zFcj793N41aZXg5AvTfRxeOP.png?width=1200",
          "https://assets.st-note.com/img/1747146651-tP7bEZhVKACN58iMGjoLw2uv.png?width=1200",
        ],
      },
      {
        title: "Summary",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1747146718-hmeNl7GbW10oS6quPk4iCEJa.png?width=1200",
        ],
      },
    ],
  },

  // ─── Category 12: NSFW 커플 ───
  {
    id: "nsfw-couple",
    title: "NSFW 커플",
    sections: [
      {
        title: "SFW",
        prompts: [
          "holding hands while walking", "embracing each other", "boy with arm around girl",
          "sitting close together", "slow dancing", "sitting on boy's lap",
          "lying down together", "bridal carry", "piggyback ride",
          "standing back-to-back", "cuddling on blanket", "couple taking selfie",
          "couple stargazing",
        ],
        images: [],
      },
      {
        title: "Sensitive",
        prompts: [
          "boy caressing lower back", "passionate kiss", "slow dancing bodies pressed close",
          "hand resting on thigh", "sitting on lap", "legs wrapped around waist",
          "nuzzling neck from behind",
        ],
        images: [],
      },
      {
        title: "NSFW",
        prompts: [
          "missionary position", "girl on top straddling", "doggystyle",
          "top down bottom up", "hug from behind", "standing position",
          "fellatio", "fingering",
        ],
        images: [],
      },
    ],
  },

  // ─── Category 13: 거울셀카 ───
  {
    id: "mirror-selfie",
    title: "거울셀카",
    sections: [
      {
        title: "STEP1",
        description: "우선은 흠뻑 생성해 본다",
        prompts: [
          "A photorealistic image of a beautiful young Korean woman kneeling on the floor in front of a full-length mirror, taking a mirror selfie with her smartphone",
        ],
        images: [
          "https://assets.st-note.com/img/1746513773-4KwtqUDcSB9QAzo6yMZNePVT.jpg?width=1200",
          "https://assets.st-note.com/img/1746513774-xXWrYCMz5UI13ock9sy0vAd6.jpg?width=1200",
          "https://assets.st-note.com/img/1746513774-8kB6sbxygi4t2DVY1EcPjOTZ.jpg?width=1200",
          "https://assets.st-note.com/img/1746513774-BPqLpHkYXxiv7tsoAJEVOCFT.jpg?width=1200",
          "https://assets.st-note.com/img/1746513774-D9TiozP8fdh72OeLXyqEuZvJ.jpg?width=1200",
        ],
      },
      {
        title: "STEP2",
        description: "동작 및 무대 설정 추가",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1746513802-6jtzknWVv2TJfRQZ17dbLqNB.jpg?width=1200",
          "https://assets.st-note.com/img/1746513803-Q7f3EvgKHOtr2NczaqhAZXmT.png?width=1200",
          "https://assets.st-note.com/img/1746513803-pAPhXsCHg2S7tBirM68G3zwm.jpg?width=1200",
          "https://assets.st-note.com/img/1746513803-D1sZ4Ag0hOaU2rWpBEKvP7Y9.jpg?width=1200",
        ],
      },
      {
        title: "STEP3",
        description: "리얼리티와 완성도를 높인다",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1746513830-4bMNI6pfJUh975dGlYCoEZ8t.jpg?width=1200",
          "https://assets.st-note.com/img/1746513830-VpGy3RhlMW89PtLJe71vNrTI.jpg?width=1200",
          "https://assets.st-note.com/img/1746513830-H4phyN6e2MA10aZUvbdDBciX.jpg?width=1200",
          "https://assets.st-note.com/img/1746513831-GqlHXx7pV3ecUDOAmd8toFiM.jpg?width=1200",
        ],
      },
      {
        title: "응용 프롬프트",
        prompts: [
          "침대에 누워 스마트폰을 보는 여성",
          "창가에서 쉬는 여성",
          "침대에서 독서하는 여성",
          "바닥에서 음악 듣는 여성",
          "셔츠 한 장으로 아침 식사",
          "옷장 앞에서 갈아입기",
          "관엽식물과 사는 여자의 방",
          "노트북 작업중인 여성",
          "베란다에서 머리카락 말리기",
          "밤에 와인 마시기",
        ],
        images: [],
      },
    ],
  },

  // ─── Category 14: 필름 카메라 분위기 ───
  {
    id: "film-camera",
    title: "필름 카메라 분위기",
    sections: [
      {
        title: "STEP1",
        description: "폴라로이드풍 기본",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1746525272-yL8spEAnNqMc2CBJTljudz4W.png?width=1200",
          "https://assets.st-note.com/img/1746525272-rpRjbt2nWDuYeCyZgmE7APK3.png?width=1200",
          "https://assets.st-note.com/img/1746525272-L8F7toBE0NZRXvPOqwdI3yMz.png?width=1200",
          "https://assets.st-note.com/img/1746525272-dCAX3yPnwIo0iRcLmzZjTkg6.png?width=1200",
        ],
      },
      {
        title: "STEP2",
        description: "2000년대 미적 감각 추가",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1746525303-QeoUqPChkNaSgXuc1sAvWTGn.png?width=1200",
          "https://assets.st-note.com/img/1746525303-4iwSvh3TQPtVkjAGfMZdxcEW.png?width=1200",
          "https://assets.st-note.com/img/1746525304-eYNZJ5v0mL4QnURdVtEwXyWc.png?width=1200",
          "https://assets.st-note.com/img/1746525304-gKey1oamns7xkrfiTdbZHL4p.png?width=1200",
        ],
      },
      {
        title: "STEP3",
        description: "빛의 연출과 도시 배경",
        prompts: [],
        images: [
          "https://assets.st-note.com/img/1746525364-Eykgw9qKToCYJP1mpuZG60hi.png?width=1200",
          "https://assets.st-note.com/img/1746525364-RJK4iI8MAhNrOdSfCmPk7L0q.png?width=1200",
          "https://assets.st-note.com/img/1746525364-8ZS0KRfwsqrIdXPgvtDyGBU4.png?width=1200",
          "https://assets.st-note.com/img/1746525364-F2BT05mUP8oluKckx1fhLS9J.png?width=1200",
        ],
      },
      {
        title: "응용 프롬프트",
        prompts: [
          "황혼의 시부야 폴라로이드",
          "노래방 앞 걸풍 초상화",
          "프리쿠라 스타일 복고풍",
          "자판기 앞 입상 초상화",
          "루즈삭스 여고생",
          "네온 패밀리 주차장",
          "플립폰 셀카",
          "시부야 109 쇼핑",
          "레트로 게임 센터",
          "편의점 앞 스냅",
        ],
        images: [],
      },
    ],
  },

  // ─── Category 15: 수영복 ───
  {
    id: "swimsuit",
    title: "수영복",
    sections: [
      {
        title: "원피스계",
        prompts: [
          "one-piece swimsuit",
          "high-neck one-piece swimsuit",
          "asymmetrical swimsuit",
          "frilly one-piece swimsuit",
          "open-back one-piece swimsuit",
          "sporty one-piece swimsuit",
          "strapless one-piece",
        ],
        images: [
          "https://assets.st-note.com/img/1745545479-rxfLTdyqjBAN80QwJM9oscu5.jpg?width=1200",
          "https://assets.st-note.com/img/1745545494-Uiq2fJnLez1o9bdcXV8HA7B5.jpg?width=1200",
          "https://assets.st-note.com/img/1745545577-koxGQylSPEjLIwW5nXMT4NAc.jpg?width=1200",
          "https://assets.st-note.com/img/1745545587-ACOkWqjINaQGifsdJu1DyeLF.jpg?width=1200",
          "https://assets.st-note.com/img/1745551170-jQuByTIZqLa8zPXAUS9kOJb3.jpg?width=1200",
        ],
      },
      {
        title: "비키니계",
        prompts: [
          "triangle bikini",
          "bandeau bikini",
          "halter-neck bikini",
          "frilled bikini",
          "high-waist bikini",
          "sporty bikini",
          "multicolored ethnic bikini",
        ],
        images: [
          "https://assets.st-note.com/img/1745552363-LTUiapo1ZDfjBhmGQ6k2MAVH.jpg?width=1200",
          "https://assets.st-note.com/img/1745552363-IGrcs9CmajHTZiMK1NPv6fDt.jpg?width=1200",
          "https://assets.st-note.com/img/1745552453-Vd9EKZgle7YcsLSM5unbJqXh.jpg?width=1200",
          "https://assets.st-note.com/img/1745577808-oeDmxj7HBlTJc2gbZfL61M3X.jpg?width=1200",
          "https://assets.st-note.com/img/1745552484-1ZpvsKtgquwiVM3NPr6XHykB.jpg?width=1200",
        ],
      },
      {
        title: "기타",
        prompts: [
          "swim dress",
          "bikini with a skirt",
          "tankini",
          "crochet swimsuit",
        ],
        images: [
          "https://assets.st-note.com/img/1745656772-rZsn6Tqz9WOEdLJaRIVtX7Pl.jpg?width=1200",
          "https://assets.st-note.com/img/1745656779-FjXlZox9INf67ihJUCWRTtD2.jpg?width=1200",
          "https://assets.st-note.com/img/1745656822-EK5FHvDm8qYjh0yAr3lTJo9W.jpg?width=1200",
        ],
      },
      {
        title: "코스프레계",
        prompts: [
          "school-style swimsuit",
          "sailor cosplay bikini",
          "Chinese-style swimsuit",
          "maid-inspired bikini",
          "nurse-style swimsuit",
          "bunny-girl swimsuit",
        ],
        images: [
          "https://assets.st-note.com/img/1745578220-Lt2Mr46hPUzvex9WkgToV5Zc.jpg?width=1200",
          "https://assets.st-note.com/img/1745579355-GW8MvS3ntwUqdAH10J4bTpZR.jpg?width=1200",
          "https://assets.st-note.com/img/1745579481-fybhum8GQHecotVkKF6BIEgM.jpg?width=1200",
          "https://assets.st-note.com/img/1745579496-drKc6hEULVYJzgskwpFqXi4Q.jpg?width=1200",
          "https://assets.st-note.com/img/1745579412-VtPGdWivBzKLNkwbfY0saFlE.jpg?width=1200",
        ],
      },
    ],
  },

  // ─── Category 16: 속옷 ───
  {
    id: "lingerie",
    title: "속옷",
    sections: [
      {
        title: "귀여운 계",
        prompts: ["wearing cute pastel pink frilly lingerie with lace and ribbon accents"],
        images: [
          "https://assets.st-note.com/img/1744377541-1zjBaEmL5VZDWSpcM7KJCg9A.jpg?width=1200",
        ],
      },
      {
        title: "본디지풍",
        prompts: ["wearing a black bondage-style lingerie set with leather texture, strap details, and garter belts"],
        images: [
          "https://assets.st-note.com/img/1744377590-DGj92F6ypQrvEuSI3cZ0M7AL.jpg?width=1200",
        ],
      },
      {
        title: "스포티계",
        prompts: ["wearing a sporty gray cotton lingerie set"],
        images: [
          "https://assets.st-note.com/img/1744377613-pyV8UBG6LOZ4iQh2dnoNrufE.jpg?width=1200",
        ],
      },
      {
        title: "실크/새틴",
        prompts: ["wearing a luxurious champagne gold silk lingerie set"],
        images: [
          "https://assets.st-note.com/img/1744378572-JWfVHZrD017XdCiSBPqjoOyl.jpg?width=1200",
        ],
      },
      {
        title: "클래식 란제리",
        prompts: ["wearing classic black lace lingerie"],
        images: [
          "https://assets.st-note.com/img/1744377667-atiUQSqv8uwHDNK3Pzg0Y9Fj.jpg?width=1200",
        ],
      },
      {
        title: "코르셋 스타일",
        prompts: ["wearing a dark red bustier and corset-style lingerie set"],
        images: [
          "https://assets.st-note.com/img/1744377755-tkGxuysfpKXPlBrOD7W3M4jR.jpg?width=1200",
        ],
      },
      {
        title: "베이비돌",
        prompts: ["wearing a light pink sheer babydoll lingerie"],
        images: [
          "https://assets.st-note.com/img/1744377779-sWtQh2pIO73YalAVZqx4niwC.jpg?width=1200",
        ],
      },
      {
        title: "하이레그 컷",
        prompts: ["wearing a black high-leg cut lingerie"],
        images: [
          "https://assets.st-note.com/img/1744377797-P8eW9yxOsa6pouq2j4nQ3Evr.jpg?width=1200",
        ],
      },
      {
        title: "메쉬&시스루",
        prompts: ["wearing a sheer black mesh lingerie set"],
        images: [
          "https://assets.st-note.com/img/1744377838-pl2ynEzaWxtdPY8ZIACj0GQm.jpg?width=1200",
        ],
      },
      {
        title: "컷 아웃",
        prompts: ["wearing a bold black cut-out lingerie set"],
        images: [
          "https://assets.st-note.com/img/1744378514-nRikHKCcvLqGbeW6m5MJUdOX.jpg?width=1200",
        ],
      },
      {
        title: "풀 바디 시스루",
        prompts: ["wearing a full-body sheer black mesh bodysuit"],
        images: [
          "https://assets.st-note.com/img/1744379157-8Dc5n9pKATQoWVCJNlPdUuiZ.jpg?width=1200",
        ],
      },
      {
        title: "가터벨트",
        prompts: ["wearing lingerie with garter belt"],
        images: [
          "https://assets.st-note.com/img/1744378405-JqBt79rz1iFHPfMuSVZjlE56.jpg?width=1200",
        ],
      },
      {
        title: "시스루 네글리제",
        prompts: ["wearing sheer negligee"],
        images: [
          "https://assets.st-note.com/img/1744381766-z3Jxkm5Le9yiGYXbHCqoQrlp.jpg?width=1200",
        ],
      },
      {
        title: "레이스 테디",
        prompts: ["wearing lace teddy"],
        images: [
          "https://assets.st-note.com/img/1744381797-K3E5FA6zy4gawC8L7vdhORo9.jpg?width=1200",
        ],
      },
      {
        title: "브라렛",
        prompts: ["wearing bralette"],
        images: [
          "https://assets.st-note.com/img/1744381628-Nl7ReQrCOxaZbjvn63qHgFLA.jpg?width=1200",
        ],
      },
      {
        title: "캐미솔",
        prompts: ["wearing camisole"],
        images: [
          "https://assets.st-note.com/img/1744381704-zYEe7MKICGJZxdq2wTlLySXf.jpg?width=1200",
        ],
      },
      {
        title: "오픈 백",
        prompts: ["wearing open back lingerie"],
        images: [
          "https://assets.st-note.com/img/1744381663-VqPcki4BypKIl3RxLs1EuWeZ.jpg?width=1200",
        ],
      },
      {
        title: "하이넥 란제리",
        prompts: ["wearing high-neck lingerie"],
        images: [
          "https://assets.st-note.com/img/1744381511-03lZoAksBe5fUhjX9DJaQiRY.jpg?width=1200",
        ],
      },
      {
        title: "크로셰 란제리",
        prompts: ["wearing crochet lingerie"],
        images: [
          "https://assets.st-note.com/img/1744383487-2gkJnEqX6QsWUKvFo0ImzyN7.jpg?width=1200",
        ],
      },
      {
        title: "스트래피 란제리",
        prompts: ["wearing strappy lingerie"],
        images: [
          "https://assets.st-note.com/img/1744383498-HkMK3YUXpaIihoglJL5SPZ9v.jpg?width=1200",
        ],
      },
    ],
  },

  // ─── Category 17: 기타 ───
  {
    id: "etc",
    title: "기타",
    sections: [
      {
        title: "격노",
        prompts: ["(extreme anger:1.4), veins popping, (rage:1.3), bared teeth, intense glare, fierce expression, (fury:1.3), clenched teeth"],
        images: [],
      },
      {
        title: "미소지으며 격노",
        prompts: ["(murderous smile:1.4), psychotic grin, (killing intent:1.3), twisted smile, (yandere expression:1.2)"],
        images: [],
      },
      {
        title: "당황",
        prompts: ["wide eyes, (panic:1.4), raised eyebrows, trembling mouth, (shocked:1.3), cold sweat drops"],
        images: [],
      },
      {
        title: "비열미소",
        prompts: ["sneer, (smirk:1.3), delinquent, half-lidded eyes, (cunning smile:1.2)"],
        images: [],
      },
      {
        title: "체념",
        prompts: ["exhausted knowing smile, (deep resignation:1.4), weary eyes, cynical acceptance"],
        images: [],
      },
      {
        title: "절망",
        prompts: ["absolute despair, (completely broken:1.4), devastated expression, hopeless eyes"],
        images: [],
      },
      {
        title: "부끄 당황",
        prompts: ["(heavy blush:1.4), flustered expression, wide surprised eyes, embarrassed fidgeting"],
        images: [],
      },
      {
        title: "경멸 혐오",
        prompts: ["twisted expression of pure hatred, (absolutely repulsed:1.4), intense disgust"],
        images: [],
      },
      {
        title: "슬픔",
        prompts: ["crying with closed eyes, tears falling, sorrowful expression, (single tear drop:1.2)"],
        images: [],
      },
      {
        title: "흥미 놀람",
        prompts: ["surprised expression, wide eyes, raised eyebrows, open mouth, (gasping:0.8)"],
        images: [],
      },
      {
        title: "유혹",
        prompts: ["(seductive expression:1.4), half-lidded eyes, parted lips, alluring gaze"],
        images: [],
      },
      {
        title: "하품",
        prompts: ["yawning, open mouth, closed eyes, (sleepy:1.2), (tired expression:1.1)"],
        images: [],
      },
    ],
  },
];
