# Lines

- ✅ A cart MUST NOT have more than 4 lines.
- Each line MUST have:
  - ✅ either a phone or BYOD,
  - ✅ one rate plan.
- Each line MAY have:
  - ✅ one data plan,
  - ✅ multiple value-added services.

# Phones

| Brand | Model | Supported networks |
|----|----|----|
| Nokia | 3320 | 3G |
| Samsung | Galaxy 10 | LTE, 5G |
| Apple | iPhone | 3G, LTE, 5G |

# Rate plans

| Code | Family | Plan | Minutes | SMS | Notes |
|------|---------|-----|------------------|-----|----|-----|
| NOOB | Legacy | Newbie | 60 | 500 | 
| BASIC | US B2C | Basic | 120 | 500 
| TALKER | US B2C | Talker | 500 | 1000 
| FAMILY | US B2C | Family | 200 | 500 | ⚠️ only for 2 - 4 lines
| STARTUP | Enterprise | Startup | 500 | 1000 
| SMALLBIZ | Enterprise | Small Business | 1000 | 1000
| EXEC | Enterprise | Executive | 2000 | 2000 

# Data plans

- ✅ Each data plan MUST be compatible with the selected rate plan.
- ✅ Each data plan MUST be compatible with the selected phone.

| Code | GB | Rate plan compatibility | Phone compatibility |
|------|----|----|----|
| DATA2GB | 2 | ✅ Family = Legacy, US B2C | ✅ Networks = 3G, LTE
| DATA5GB | 5 | ✅ Family = US B2C | ✅ Networks = LTE, 5G
| DATA10GB | 10 | ✅ Family = US B2C, Enterprise | ✅ Networks = LTE, 5G
| DATA20GB | 20 | ✅ Family = US B2C, Enterprise | ✅ Networks = LTE, 5G
| DATA50GB | 50 | ✅ Family = Enterprise | ✅ Networks = LTE, 5G
| DATA100GB | 100 | ✅ Plan = Executive | ✅ Networks = 5G

# VAS

| Code | VAS | Rate plan compatibility | Phone compatibility | Notes
|----|---|---|---|----
| USROAM | US Roaming | ✅ Plan = TALKER or Family = Enterprise | | ✅ deselects USROAMPLUS
| USROAMPLUS | US Roaming Plus | ✅ Plan = TALKER or Family = Enterprise | | ✅ deselects USROAM
| INTLROAM | International Roaming | ✅ Plan = TALKER or Family = Enterprise |
| GLOBALROAM | Global Roaming | ✅ Plan = TALKER or Family = Enterprise | | ✅ USROAM + INTLROAM => GLOBALROAM, auto-selects and disables USROAM and USROAMPLUS and INTLROAM
| NETFLIX | Netflix | ✅ Family = US B2C | ✅ brand = "Apple" or brand = "Samsung" and model like "Galaxy" | ✅ requires a data plan
| HULU | Hulu | ✅ Family = US B2C | ✅ brand = "Apple" | ✅ requires a data plan
| SPOTIFY | Spotify | ✅ Family = US B2C | | ✅ requires a data plan
| ENTERTAINMENT2GO | Entertainment 2 Go | ✅ Family = US B2C | | 2GB data for media services, ✅ requires at least 2 media subs (choose from Netflix, Hulu, Spotify), ⚠️ requires a data plan with >= 5GB
| CALLERID | Caller ID | ✅ Family = US B2C, Enterprise | | ⚠️ included in all Enterprise plans => auto-selected and disabled

# Financing

| Code | Rate plan combatibility | Phone compatibility
|---|---|---|---|
| PHONEFINANCING | ⚠️ Family = US B2C (excl. Basic plan) or Enterprise | ⚠️ value > $500
