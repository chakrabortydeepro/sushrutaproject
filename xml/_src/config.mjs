const config = {
    xslt: '../tei-to-html.xsl',
    files: [
        {
            input: ['../../01-su.su-1-31/kl_699_sutrasthana-1-31.txt',
                    '../../01-su.su-32-end/kl_699_sutrasthana-32-end.txt'],
            output:    '../01-su.su/kl_699_sutrasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Sūtrasthāna'],
                ['//facsimile',''],
                ['//revisionDesc','']
            ]
        },
        {
            input: '../../02-su.ni/kl_699_nidanasthana.txt',
            output:   '../02-su.ni/kl_699_nidanasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Nidānasthāna'],
                ['//revisionDesc','']
                ]
        },
        {
            input:  ['../../04-su.ci-1-20/kl_699_cikitsasthana_01-20.txt',
                    '../../04-su.ci-21-40/kl_699_cikitsasthana_21-40.txt'],
            output:    '../04-su.ci/kl_699_cikitsasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Cikitsāsthāna'],
                ['//revisionDesc','']
                ]
        },
        {
            input: '../../05-su.ka/kl_699_kalpasthana.txt',
            output:   '../05-su.ka/kl_699_kalpasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Kalpasthāna'],
                ['//revisionDesc','']               
                ]
        },
        {
            input: ['../../06-su.ut-1-30/kl_699_uttaratantra-1-30.txt',
                    '../../06-su.ut-31-end/kl_699_uttaratantra-31-66.txt'],
            output:    '../06-su.ut/kl_699_uttaratantra.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Uttaratantra'],
                ['//revisionDesc','']                
                ]
        },
    ]
};

export default config;
