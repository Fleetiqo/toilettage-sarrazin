import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SALON_EMAIL = Deno.env.get('SALON_EMAIL') ?? 'toilettagesarrazin@gmail.com'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const body = await req.json()
    const { nom_proprio, telephone, nom_chien, race, taille, service, date_souhaitee, notes } = body

    const subject = `Nouveau RDV — ${nom_chien} (${race}) — ${service} — ${date_souhaitee}`

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2D2D2D;">
        <div style="background: #3B8D8C; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">Nouveau rendez-vous — Toilettage Sarrazin</h1>
        </div>
        <div style="background: #f7f7f7; padding: 24px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 40%;">Propriétaire</td><td style="padding: 8px 0;">${nom_proprio}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Téléphone</td><td style="padding: 8px 0;">${telephone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Nom du chien</td><td style="padding: 8px 0;">${nom_chien}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Race</td><td style="padding: 8px 0;">${race}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Taille</td><td style="padding: 8px 0;">${taille}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Date souhaitée</td><td style="padding: 8px 0;">${date_souhaitee}</td></tr>
            ${notes ? `<tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Notes</td><td style="padding: 8px 0;">${notes}</td></tr>` : ''}
          </table>
          <div style="margin-top: 20px; padding: 12px; background: #E8845C20; border-radius: 8px; font-size: 13px; color: #666;">
            Rappeler le client pour confirmer le créneau.
          </div>
        </div>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Toilettage Sarrazin <noreply@toilettagesarrazin.ca>',
        to: [SALON_EMAIL],
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Resend error: ${err}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
  }
})
