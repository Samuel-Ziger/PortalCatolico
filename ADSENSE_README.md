# Configuração do Google AdSense - Portal Católico

## Configuração Inicial

O código base do Google AdSense já foi adicionado ao arquivo `index.html` com o ID do publisher: `ca-pub-6284155976372801`.

## Componentes Disponíveis

### 1. AdSenseSpace
Componente fixo localizado na página inicial, entre a seção de doação e o footer.

**Localização:** `src/components/AdSenseSpace.jsx`

**Uso:** Já está implementado no `App.jsx`

### 2. AdSenseAd
Componente flexível que pode ser usado em qualquer lugar do site.

**Localização:** `src/components/AdSenseAd.jsx`

**Props:**
- `adSlot` (obrigatório): ID do slot de anúncio do AdSense
- `adFormat` (opcional): Formato do anúncio (padrão: 'auto')
- `className` (opcional): Classes CSS adicionais
- `style` (opcional): Estilos inline
- `showFallback` (opcional): Mostrar texto de fallback (padrão: true)

**Exemplo de uso:**
```jsx
import AdSenseAd from '@components/AdSenseAd';

// Em qualquer componente
<AdSenseAd 
  adSlot="1234567890" 
  className="my-4"
  adFormat="rectangle"
/>
```

## Próximos Passos

### 1. Criar Unidades de Anúncio no Google AdSense
1. Acesse o [Google AdSense](https://www.google.com/adsense)
2. Vá para "Anúncios" > "Por unidade de anúncio"
3. Clique em "Criar nova unidade de anúncio"
4. Escolha o tipo de anúncio:
   - **Banner responsivo** (recomendado para o AdSenseSpace)
   - **Banner retangular** (para o AdSenseAd)
   - **Banner de texto e display**

### 2. Obter IDs dos Slots
Após criar as unidades de anúncio, você receberá IDs como:
- `1234567890` (exemplo)

### 3. Atualizar os Componentes
Substitua `YOUR_AD_SLOT_ID` pelos IDs reais:

**No AdSenseSpace.jsx:**
```jsx
data-ad-slot="SEU_ID_REAL_AQUI"
```

**No AdSenseAd.jsx:**
```jsx
<AdSenseAd adSlot="SEU_ID_REAL_AQUI" />
```

## Locais Sugeridos para Anúncios

### 1. Página Inicial
- ✅ Já implementado (AdSenseSpace)

### 2. Entre Seções
```jsx
// Após a seção de orações
<OracoesSection />
<AdSenseAd adSlot="ID_ANUNCIO_1" className="my-8" />

// Após a seção de wallpapers
<WallpapersSection />
<AdSenseAd adSlot="ID_ANUNCIO_2" className="my-8" />
```

### 3. Sidebar (se implementada)
```jsx
<AdSenseAd 
  adSlot="ID_ANUNCIO_3" 
  adFormat="rectangle"
  className="sticky top-4"
/>
```

## Boas Práticas

1. **Não exagere:** Máximo 3 anúncios por página
2. **Posicionamento:** Evite colocar anúncios muito próximos ao conteúdo principal
3. **Responsividade:** Use formatos responsivos para melhor experiência mobile
4. **Teste:** Sempre teste em diferentes dispositivos

## Troubleshooting

### Anúncios não aparecem
1. Verifique se o site foi aprovado pelo Google AdSense
2. Confirme se os IDs dos slots estão corretos
3. Aguarde 24-48 horas para os anúncios começarem a aparecer

### Erros no console
- Verifique se o script do AdSense está carregando corretamente
- Confirme se não há bloqueadores de anúncio ativos

## Monitoramento

Após a implementação, monitore no painel do AdSense:
- Impressões
- Cliques
- CTR (Taxa de cliques)
- Receita

## Suporte

Para dúvidas sobre o Google AdSense, consulte a [Central de Ajuda do AdSense](https://support.google.com/adsense). 